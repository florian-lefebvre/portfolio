## Motivation

My brother enjoys Provençal (a French regional language) but felt that it was difficult to learn it online, that there were not really websites concentrating learning content and resources. So he asked me to build a website for this. The goal was to be able to have many languages so that people can contribute.

## Requirements

We decided to go with a recursive approach. Indeed we needed some kind of file explorer logic with folders and files (here categories and resources).

## Tech stack

At the time, Nuxt 3 wasn't out already so I went with Nuxt 2. Later on, I checked if I could use Nuxt 3 but since it was still lacking static generation, it was a no go.

As for the backend, I decided to use [Supabase](https://supabase.com) because it was easy and I wanted to try it for real. That was also a great choice for hypothetical scaling, like for a platform instead of a single website.

## Challenges

### Category hierarchy

I needed to build a breadcrumb navigation. But since the categories are structured as `categories/:id-slugified-title` on the website, i couldn't use the url to build the breadcrumb. Instead, I wrote an rpc to get the hierarchy of categories given a category id. Here is the code:

```sql:category_hierarchy.sql
create or replace function public.category_hierarchy(id_param bigint)
returns categories[]
as $$
  declare arr categories[];
  declare x categories%rowtype;
begin
  select * into x from categories where id = id_param;
  arr = array_append(arr, x);
  while x.parent_id is not null loop
    select * into x from categories where id = x.parent_id;
    arr = array_append(arr, x);
  end loop;

  return arr;
end;
$$ language plpgsql security definer;
```

And here is a quick schema of the `categories` table:

| id   | title  | parent_id | count |
| ---- | ------ | --------- | ----- |
| int8 | string | int8 (fk) | int2  |

This is actually the 2nd version of the function, I had to rewrite it for performances reasons.

### From SSR to SSG

When I started working on this website, I planned to deploy it using SSR since all its content was user provided data based. But I encountered performances issues when heading to a specific category. Indeed, I had to fetch 3 things:

- The category hierarchy as explained above
- All categories whose parent is the current category
- All resources whose parent is the current category

It was taking too much time to navigate between pages, which is the essence of the website. Instead I decided to go with SSG using cron jobs.

Paul Copplestone, CEO and Co-Founder of [Supabase](https://supabase.com), wrote [an article](https://supabase.com/blog/2021/03/05/postgres-as-a-cron-server) about using Postgres as a CRON server. So every 20 minutes, I redeploy the app using [Vercel deply hooks](https://vercel.com/docs/concepts/git/deploy-hooks).

Here is the code:

```sql:cron_job.sql
select
   cron.schedule(
     'deploy-website-each-20-minutes', -- name of the cron job
     '*/20 * * * *', -- every 20 minutes
     $$
     select *
     from http_post('https://api.vercel.com/v1/integrations/deploy/ID_1/ID_2', '', '')
     $$
   );
```

### Counting

To minimize the amount of requests made for a single category, I had to know the count of sub resources and sub categories of a given category. I took an imperative approach by listening to modifications and updating the right values (snippet below) but I'm sure there is a declarative way of doing it, using views. If you have any tips, feel free to reach out.

First of all, I added a `count` column to my `categories` table.

Here are a few examples of how I made it :

```sql:update_category_count.sql
create or replace function update_category_count(cat_id bigint)
returns void
language plpgsql
as
$$
declare
  categories_count integer;
  resources_count integer;
  total integer;
begin
  select count(*)
  into categories_count
  from categories
  where parent_id = cat_id;

  select count(*)
  into resources_count
  from categories_to_resources
  where category_id = cat_id;

  total = categories_count + resources_count;

  update categories
  set count = total
  where id = cat_id;
end;
$$;

create or replace function on_categories_insert()
  returns trigger
  language plpgsql
  as
$$
begin
  if new.parent_id is not null then perform update_category_count(new.parent_id);
  end if;
  return new;
end;
$$;

create trigger categories_insert
  after insert
  on categories
  for each row
  execute procedure on_categories_insert();

create or replace function on_categories_update()
  returns trigger
  language plpgsql
  as
$$
begin
  if old.parent_id <> new.parent_id then
    if old.parent_id is not null then
      perform update_category_count(old.parent_id);
    end if;

    if new.parent_id is not null then
      perform update_category_count(new.parent_id);
    end if;
  end if;
  return new;
end;
$$;

create trigger categories_update
  after update
  on categories
  for each row
  execute procedure on_categories_update();

create or replace function on_categories_delete()
  returns trigger
  language plpgsql
  as
$$
begin
  if old.parent_id is not null then perform update_category_count(old.parent_id);
  end if;
  return old;
end;
$$;
```

## Wrapping up

This project has taught me a lot of things, especially about performances and recursive usage of relational databases.

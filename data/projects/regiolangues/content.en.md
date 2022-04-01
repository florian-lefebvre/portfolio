- [Motivation](#motivation)
- [Requirements](#requirements)
- [Tech stack](#tech-stack)
- [Challenges](#challenges)
  - [Category hierarchy](#category-hierarchy)
  - [SSR ==> SSG](#ssr--ssg)
  - [Count](#count)
- [Wrapping up](#wrapping-up)

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

This is actually the 2nd version of the version, I had to rewrite for performances reasons.

### SSR ==> SSG

### Count

## Wrapping up

---
title: My portfolio
desc: A detailed explanation of my portfolio, from Jekyll to Nuxt.js
img: my-portfolio-thumb.jpg
alt: Photo by Anete Lūsiņa on Unsplash
status: Finished
variant: success
link: https://florian-lefebvre.dev
tags:
  - jekyll
  - bootstrap
  - git
  - nuxtjs
  - vuejs
  - tailwindcss
  - plesk
  - html5
  - css3
  - js
---

Today, most developers have their portfolio to present their skills and projects. As an original person, that's exactly what I did, 9 months after discovering web development. In this project, I'll show you how I did mine. I will talk about my first version using Jekyll, then about the current version (November 2020) made with Nuxt.js. Enjoy reading!

You can see below a comparison of the two versions.

<image-comparator :folder="dir" leftImage="my-portfolio-old.png" rightImage="my-portfolio-new.png" leftLabel="Old (Bootstrap)" rightLabel="New (Tailwind Css)" leftalt="Old Bootstrap design" rightalt="New Tailwind Css design"></image-comparator>

## v1: Jekyll

<light-box :gallery="[{src:'/img/work/my-portfolio-jekyll.png',alt:'Jekyll logo'}]"></light-box>

When I wanted to make my portfolio, I had to choose a technology. At that time I was very interested in Bootstrap. I read somewhere that their documentation had been made with Jekyll, so I decided to choose this one too (that's some selection criteria!). In addition to making my portfolio, I was able to learn something new. Perfect!

### How it works

[Jekyll](https://jekyllrb.com/) is a static site generator. What does it mean ? It's a compromise between using a hand-coded static site and a full CMS. You generate an HTML-only website using raw data (such as Markdown files) and templates. You must then build your project to generate all the files ready for production.

Jekyll uses [Liquid](https://shopify.github.io/liquid/), a template language created by Shopify. Here is an example:

```yaml[_config.yml]
twitter_username: johndoe
```

```html[footer.html]
{% if site.twitter_username %}
<li class="list-inline-item">
  <a
    href="https://twitter.com/{{ site.twitter_username }}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="fa-stack fa-lg">
      <i class="fas fa-circle fa-stack-2x"></i>
      <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
    </span>
  </a>
</li>
{% endif %}
```

Liquid allows operations such as conditions to be performed directly on the page, and variables to be obtained from a configuration file, for example. It can do a lot more, but this is a basic example.

### Design with Bootstrap

For my portfolio I used a template called "Clean Blog Jekyll" from [Start Bootstrap](https://startbootstrap.com/). As you can guess, it's based on [Boostrap](https://getbootstrap.com/) (4.5.0 for this template), which is a very popular CSS framework developed by the Twitter team. I didn't customize it much, and I must say I was not happy with the design but I didn't want to spend a lot of time on it.

Bootstrap comes out of the box with components (working with js for some of them). So to make an alert, just write :

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```

And that's it!

### Deployment with Github pages and Travis CI

To deploy my website, I didn't want to pay for a domain and hosting at that time, so I decided to use [Github pages](https://pages.github.com/). The way it works is the following: you specify the folder you want to use for your website on push and github pages builds your project automatically! But as I was using a custom plugin with Ruby Gems (Github Pages only supports several of them, listed [here](https://pages.github.com/versions/)), I didn't want to build my project locally and push the build folder. So after some (not so fast) research on the web, I decided to choose [Travis CI](https://travis-ci.com/). Basically, after you have linked your Github repository to Travis CI, it clones your repo on push, does what you told him to do, in my case, he builds and then pushes to a branch of `gh_pages` on Github. And in this case, the Github pages only used my entire branch as the root of my portfolio!

### Why I decided to change

Even though Jekyll's features are great, I've had some problems with it. First of all, the development server was very slow to launch using the `jekyll serve` command. It's not encouraging to write content when you have to wait a minute and a half. Secondly, I was not very comfortable with the Liquid syntax, so most of the time I spent time on little things, just because of my misunderstanding. And I wasn't going to spend hours and hours debugging this just for my portfolio. Finally, I needed to learn Nuxt.js for bigger projects (working with the API, etc...), so this was the opportunity to drop Jekyll and go back to javascript.

## v2: Nuxt.js

<light-box :gallery="[{src:'/img/work/my-portfolio-nuxtjs.png',alt:'Nuxt.js logo'}]"></light-box>

### How it works

[Nuxt.js](https://nuxtjs.org/) is an open-source framework built on top of [Vue.js](https://vuejs.org/). Vue.js is a progressive front-end javascript framework for building user interfaces. You will find below an introductory video to Vue.js from [Vue Mastery](https://www.vuemastery.com/), a Vue learning platform.

<div style="padding:56.25% 0 0 0;" class="relative mb-5"><iframe src="https://player.vimeo.com/video/247494684" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

As said in the video, Vue files are separated in 3 parts: template, script and style.

```vue
<template>
  <div>Your HTML code there</div>
</template>

<script>
export default {
  data() {
    return {
      somedata: []
    };
  },
  methods: {
    yourMethod() {
      alert(this.somedata);
    }
  }
};
</script>

<style>
h1 {
  color: red;
}
</style>
```

The example above show us how much powerful it is for components, because you can add the `scoped` attribute to your `<style>` tag in order to keep you styles applied only to the current component, even if childs are referenced in it. I highly recommand Travery media [Vue.js crash course](https://www.youtube.com/watch?v=Wy9q22isx3U) on Youtube to get started.

I'm not a Vue expert so feel free to check official website for a better understanding.

Coming back to Nuxt.js, he's a higher framework, so he takes all the advantages of Vue.js and solves the main problems you'll encounter with it. Same as before, You will find below an introductory video to Nuxt.js from Vue Mastery.

<div style="padding:56.25% 0 0 0;" class="relative mb-5"><iframe src="https://player.vimeo.com/video/311756540" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

So, for example, Nuxt.js adds the `head` method by default, integrating vue-meta for SEO easy integration.

```vue
<script>
export default {
  head() {
    // Set Meta Tags for this Page
  }
  // ...
};
</script>
```

Nuxt.js also has a huge ecosystem of useful modules, from the Nuxt.js team or the community, such as [@nuxt/google-analytics](https://google-analytics.nuxtjs.org/) or [@nuxt/content](https://content.nuxtjs.org/), which will be discussed in the next section.

### Nuxt content module

[@nuxt/content](https://content.nuxtjs.org/) is an official module acting as a Git-based Headless CMS. You must write content (Markdown, JSON, YAML, XML and CSV) in a `content/` directory and then fetch it through an API. This module is very powerful, it allows you to make a blog really quickly.

I recommand [this article](https://fr.nuxtjs.org/blog/creating-blog-with-nuxt-content/) from [Debbie O'Brien](https://twitter.com/debs_obrien) that is clear and helped me a lot.

In my case, I divided my content into two parts, the projects and the article. The structure of my directory is therefore as follows:

```bash
content/
  work/
    project.md
  articles/
    article.md
```

So my articles page retrieves all the articles and transmits them to the components.

> The following code has been adapted to illustrate what I'm saying, so some things are adapted to be in a component because they come from a component.

```vue[articles.vue]
<template>
  <div>
    <div class="bg-teal-100">
      <div class="container px-5 py-24 mx-auto">
        <div
          v-if="featured"
          class="bg-white rounded-xl -mt-48 shadow-xl -mb-40 relative hover:scale-95 transform transition duration-150 ease-out"
        >
          <ContentFeatured :featured="featured" />
        </div>
      </div>
    </div>
    <div class="bg-teal-100 pt-10">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <!-- Display articles in cards -->
          <ContentCard
            v-for="article of articles"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      featured: null
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    readingTime(time) {
      var milli = time,
        sec = milli / 1000,
        min = sec / 60,
        final = Number(min.toFixed(0)),
        output = "";

      if (milli <= 30000) {
        output = "1 min read";
      } else {
        output = final + " min read";
      }

      return output;
    },
    // Fetch all articles
    async getArticles() {
      const articles = await this.$content("articles")
        .without(["body"])
        .sortBy("createdAt", "desc")
        .fetch();

      articles.forEach(function(e) {
        e.createdAt = this.formatDate(e.createdAt);
        e.readingTime = this.readingTime(e.readingTime);
      }, this);

      this.featured = articles[0];
      articles.splice(0, 1);
      this.articles = articles;
    }
  },
  mounted() {
    this.getArticles();
  }
};
</script>

<style></style>
```

### Hooks

Hooks are really useful and I will give you an example. I needed to change default parameters of the articles before being inserted in the app so I used [content:file:beforeInsert](https://content.nuxtjs.org/advanced#contentfilebeforeinsert).

Following the documentation example, I added the reading time:

```js[nuxt.config.js]
export default {
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        const { time } = require("reading-time")(document.text);
        document.readingTime = time;
      }
    }
  }
};
```

And from there, I modified other variables. I wanted my articles to be sorted by date in the folder by adding the date in the filename, like Jekyll did. The file name now follows the pattern `YYYY-MM-DD-name.md`. And in my config file, what I do is:

```js[nuxt.config.js]
export default {
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        //...
        // I get the date from the file name and set createdAt to this value
        document.createdAt = document.slug.substring(0, 10);
        // I get the name of the article from the file name and set slug to this value
        document.slug = document.slug.substring(11);
        // I redefine the path because slug has been updated
        document.path = document.dir + "/" + document.slug;
        //...
      }
    }
  }
};
```

And finally, I added tags to my articles and I wanted to sort them automatically. Here is the head of my md file:

```yaml[2020-11-13-my-porfolio.md]
---
title: My portfolio
desc: A detailed explanation of my portfolio, from Jekyll to Nuxt.js
img: my-portfolio-thumb.jpg
alt: Photo by Anete Lūsiņa on Unsplash
status: Finished
variant: success
link: https://florian-lefebvre.dev
tags:
  - jekyll
  - bootstrap
  - git
  - nuxtjs
  - vuejs
  - tailwindcss
  - plesk
  - html5
  - css3
  - js
---

```

And now in my hooks, I only sort them:

```js[nuxt.config.js]
export default {
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        //...
        document.tags = document.tags.sort();
      }
    }
  }
};

// output: ["bootstrap", "css3", "git", "html5", "jekyll", "js", "nuxtjs", "plesk", "tailwindcss", "vuejs"]
```

So you can see how powerful it is.

### SEO with vue-meta

Nuxt.js comes with [vue-meta](https://vue-meta.nuxtjs.org/). I don't want to get into details but just to share [this article](https://redfern.dev/articles/adding-social-media-seo-meta-data-using-nuxt-content/) which is really useful.

### Design with Tailwind Css

Since a month, I'm a big fan of [Tailwind Css](https://tailwindcss.com/). It's a utility-first CSS framework which is highly customizable. A Nuxt.js module is available to setup Tailwind quickly, it's [@nuxt/tailwind](https://tailwindcss.nuxtjs.org/). Unlike Bootstrap, there is no predefined component, you have to create yours. So combined with Vue components, it's absolutely perfect. Here is an example from tailwind documentation:

```html
<div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div
    class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
    role="alert"
  >
    <span
      class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
      >New</span
    >
    <span class="font-semibold mr-2 text-left flex-auto"
      >Get the coolest t-shirts from our brand new store</span
    >
    <svg
      class="fill-current opacity-75 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </div>
</div>
```

<div class="bg-indigo-900 text-center py-4 lg:px-4 mb-5">
  <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
    <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>

It looks fantastic very quickly, it's absolutely worth a try.

### Static site generation

When I released the project, I discovered problems with dynamic routes. Basically, if I reloaded a page like `/articles/my article`, there was a 404 error. In order to fix this, you need to specify where the content loaded by your dynamic routes is located. So in my `nuxt.config.js`, here is what I did:

```js[nuxt.config.js]
generate: {
    async routes() {
      // Specify content (from @nuxt/content module) location
      const { $content } = require("@nuxt/content");
      const projects = await $content("work")
        .only(["path", "tags", "dir"])
        .fetch();
      const articles = await $content("articles")
        .only(["path", "tags", "dir"])
        .fetch();
      // Combine all your content
      const files = projects.concat(articles);
      var tags = [];
      // Get tags page
      files.forEach((file) => {
        file.tags.forEach((tag) => {
          var filename = `${file.dir}/tags/${tag}`;
          if (!tags.includes(filename)) {
            tags.push(filename);
          }
        });
      });
      // Combine content and tags to output all routes
      return files
        .map((file) => (file.path === "/index" ? "/" : file.path))
        .concat(tags);
    },
  },
```

I hope this will help, because I had a hard time fixing it.

### Deployment with Travis CI and Plesk

To deploy my portfolio, I use Travis CI. Like with Jekyll, I setup Travis to build my app using `npm run generate` and to upload the generated `dist/` folder to the `plesk` branch on Github. You can find all the informations [here](https://nuxtjs.org/faq/github-pages). Then on [Plesk](https://www.plesk.com/) (an Hosting Control Panel), I link the branch with my folder on the server anf that's it!

## Conclusion

Thanks to this project, I've learned a lot. I learned Jekyll and Liquid syntax as well as Nuxt.js. At the same time, I learned how to use Travis CI, Github Pages and Plesk to deploy automatically my portfolio using Git.

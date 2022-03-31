- [Motivation](#motivation)
- [v1: HTML and CSS](#v1-html-and-css)
- [The musicians space](#the-musicians-space)
- [v2: Bootstrap 5 and PHP](#v2-bootstrap-5-and-php)
- [v3: Nuxt 3 and Tailwind CSS](#v3-nuxt-3-and-tailwind-css)
- [Wrapping up](#wrapping-up)

## Motivation

At the end of 2019, I was getting involved more and more in my orchestra's ([OHF31](/projects/ohf31-website)) online presence. Indeed, I was filming concerts with several cameras and editing videos to publish on social medias (nothing crazy, only fades in and out). But one thing was still not looking great: the website.

Made with an old [Drupal](https://www.drupal.org/) template, I was looking for a solution to make the website look better and more professional. So I thought "Why not learn HTML along the way?" and I got started.

## v1: HTML and CSS

> screenshot of v1

I never really coded before, I mean I coded in Unreal Engine 4 with blueprints but it was a visual editor, not lines of code. So to start I followed [this tutorial](https://www.youtube.com/watch?v=UB1O30fR-EE) from Traversy Media and it taught a lot of thing. I wasn't understanding the half of the CSS I was writing (and I was using `float`...) but still, I managed to get this first website done.

I remember deploying this website over FTP using [FileZilla](https://filezilla-project.org/) on OVH around Christmas.

So definitely a great way to start!

## The musicians space

Like a lot of devs out there, I decided I wanted to build my own CMS instead of using Wordpress. Why would I use a really popular CMS since I know everything to build a full custom one on my own? (Spoiler: _I wasn't ready_)

So I started to learn PHP, I mean not a framework but really procedural PHP. The code was an absolute mess, absolutely not secure, duplications everywhere and so on. To be able to refresh some parts of the Ui without the whole page, I used AJAX with [JQuery](https://jquery.com/) so I a way, I was building some kind of small APIs. **BUT** I was returning HTML, not JSON, stored in a **string**. It was an absolute nightmare to debug.

But still, I learnt a lot along the way, especially about [MySQL](https://www.mysql.com/) and CSS.

_I don't have any screenshot for you as I took the website down because of security issue and I don't have the right setup to make it run locally for now._

## v2: Bootstrap 5 and PHP

> screenshot of v2 (wayback machine ?)

As I was coding the musicians space at the same time, I discovered [Bootstrap 5](https://getbootstrap.com/) and was really enjoying it. So, to train and because the first version of the website wasn't looking that great after all, I decided to rebuild it from scratch. I was still using PHP for imports (html meta tags or stuff like this) but in hindsight it wasn't useful.

## v3: Nuxt 3 and Tailwind CSS

_I think no screenshot is necessary for this one._

The 2nd version had been released for more than a year and then... _"We need to add an announce now that we can do concerts, and the next one is in 1 week and half. Could you add it?"_ Sure I can but... My tech stack has changed a lot since last year, I was only beginning learning web development and I don't have the right setup nor the will to get back to such tech. So guess what... 3rd version!

The deadline was the 10th of November and at the time I was looking for a way to try out Nuxt 3 now that beta was released since October. Well, it was instable and I had quite a lot of issues (of which HMR which is really painful) but eventually I managed to get it working. That was also the opportunity to try [VueUse motion](https://motion.vueuse.org/) for animations.

I used Tailwind CSS for styling, Github for versioning (after all that time!), [Cloudinary](https://cloudinary.com/) as a CDN for my images and [Vercel](https://vercel.com) for deployments.

Apart from the technical side, I didn't really change the whole layouts or content.

## Wrapping up

As you can see, this webite had a decisive role in my life by getting me started in web development. I'll probably revisit it in the future to really work on content, layouts but also to improve the Nuxt implementation when it's released and who knows, I might add a CMS for news and stuff.

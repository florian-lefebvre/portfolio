- [Motivation](#motivation)
- [V1: HTML and CSS](#v1-html-and-css)
- [The musicians space](#the-musicians-space)
- [v2: Bootstrap 5 and PHP](#v2-bootstrap-5-and-php)
- [v3: Nuxt 3 + Tailwind CSS](#v3-nuxt-3--tailwind-css)
- [Wrapping up](#wrapping-up)

## Motivation

At the end of 2019, I was getting involved more and more in my orchestra's ([OHF31](/projects/ohf31-website)) online presence. Indeed, I was filming concerts with several cameras and editing videos to publish on social medias (nothing crazy, only fades in and out). But one thing was still not looking great: the website.

Made with an old [Drupal](https://www.drupal.org/) template, I was looking for a solution to make the website look better and more professional. So I thought "Why not learn HTML along the way?" and I got started.

## V1: HTML and CSS

I never really coded before, I mean I coded in Unreal Engine 4 with blueprints but it was a visual editor, not lines of code. So to start I followed [this tutorial](https://www.youtube.com/watch?v=UB1O30fR-EE) from Traversy Media and it taught a lot of thing. I wasn't understanding the half of the CSS I was writing (and I was using `float`...) but still, I managed to get this first website done.

I remember deploying this website over FTP using [FileZilla](https://filezilla-project.org/) on OVH around Christmas.

So definitely a great way to start!

## The musicians space

Like a lot of devs out there, I decided I wanted to build my own CMS instead of using Wordpress. Why would I use a really popular CMS since I know everything to build a full custom one on my own? (Spoiler: _I wasn't ready_)

So I started to learn PHP, I mean not a framework but really procedural PHP. The code was an absolute mess, absolutely not secure, duplications everywhere and so on. To be able to refresh some parts of the Ui without the whole page, I used AJAX with [JQuery](https://jquery.com/) so I a way, I was building some kind of small APIs. **BUT** I was returning HTML, not JSON, stored in a **string**. It was an absolute nightmare to debug.

But still, I learnt a lot along the way, espcially about [MySQL](https://www.mysql.com/) and CSS.

## v2: Bootstrap 5 and PHP

- PHP useless (only for imports)
- same deployment

## v3: Nuxt 3 + Tailwind CSS

- nuxt3: beta = instable
- images: cdn (cloudinary)
- deployment: vercel

## Wrapping up

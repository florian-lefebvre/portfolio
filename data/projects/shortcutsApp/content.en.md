## Motivation

As explained in the project descripio, the goal was to dedicate an app to this Opera GX feature of shortcuts right in the browser. I'm now realizing that the goal of this app was to get rid of many desktop apps and keep everything in one single place.

## Tech + challenges

As I started to work on the app, I chose [Electron](https://electronjs.org/) to create the desktop app. I wanted to try out [Alpine.js](https://alpinejs.dev/) but I couldn't get it to work. So I fell back on a safe bet: Vue 2 and Tailwind CSS.

There is not really a lot of things worth mentionning, except the auto-updater which used Github Actions and releases to update the app.

Also, obtaining a free signing certificate to get rid of warnings durinf the installation was not possible anymore, it cost at least $200.

## Wrapping up

That was an interesting project that I may revisit in the future.

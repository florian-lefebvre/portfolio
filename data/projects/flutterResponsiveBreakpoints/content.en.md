## Motivation

As I started working on yNotes, I had to develop the app in a responsive way. We wanted to make it cross-platform (not only on mobile but also on desktop) but I felt Flutter didn't really have anything great to handle it.

As a web developer, I'm a big fan of using breakpoints so I decided to make my own package following Tailwind CSS breakpoints.

## How to use it

The `Responsive` widget provided by the package must be at the top level of the widget tree. For example:

```dart
Responsive(builder: (context) => MaterialApp())
```

Then, the `responsive` (or `r` shorthand) can be used anywhere like so:

```dart
responsive<Color>(def: Colors.red, sm: Colors.blue, xl: Colors.green)
```

Here are the available breakpoints:

| Breakpoint | Minimum width |
| ---------- | ------------- |
| sm         | 640px         |
| md         | 768px         |
| lg         | 1024px        |
| xl         | 1280px        |
| xxl        | 1536px        |

## Wrapping up

Building this little package was quite easy but taught me how to publish packages on Pub.dev.

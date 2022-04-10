## Motivation

As I started to get involved in yNotes' development, I noticed plenty of inconsistencies concerning the ui. The fonts were not the same everywhere, as well as colors and so on. So I decided to create a package that would actually keep all of this kind of stuff consistent and independent from the app in itself.

## Categories

Little by little, the library evolved into a collection of small packages.

### Components

First of all, it contains components that are used absolutely everywhere in the app. When starting the library, I was tempted to code every component and then use them in the app. But I quickly realized it didn't really make sense so instead, I decided to list any components that would be useful to build, and actually build them as I needed.

### Config

I personally don't like to use the context to access the theme, it feels too verbose and means it can only be used in widgets. An example of the default way of accessing the theme is:

```dart
Theme.of(context).colorScheme.secondary
```

My approach is to have a global `theme` variable and when updated, refresh the whole widget tree. It might not be the best for performance reasons but so far it was working quite well in yNotes.

In order to refresh the whole widget tree, I needed to provide a widget that would handle that by listening to the theme changes. This is the `YApp` widget. I couldn't find why but it needs to be wrapped in `Responsive` (exported from [another library you can learn more about](/projects/flutter-responsive-breakpoints)).

Here is how to use it:

```dart:main.dart
import 'package:flutter/material.dart';
import 'package:ynotes_packages/config.dart';

void main() {
    WidgetsFlutterBinding.ensureInitialized();
    runApp(MyApp());
}

// It could be a statful widget but it's not needed
// for this example
class MyApp extends StatelessWidget {
    const MyApp({Key? key}) : super(key: key);

    @override
    Widget build(BuildContext context) {
        // The widget
        return Responsive(builder: (context) => YApp(
            initialTheme: 0,
            themes: themes // See the theme documentation to know more
            builder: (context) => MaterialApp(...);
        ));
    }
}
```

Under the hood, it listen to changes thanks to the `ChangeNotifierProvider` and `Consumer` widgets from [provider](https://pub.dev/packages/provider). Its child is then rebuilt by generating a unique key. Here is the source code:

```dart:lib/src/config/widget.dart
part of config;

typedef _YAppBuild = Widget Function(BuildContext context);

/// A widget that setups the flutter_responsive_breakpoints and theme packages.
///
/// Usage: Wrap MaterialApp with this widget.
class YApp extends StatefulWidget {
  final _YAppBuild builder;
  final List<YTheme> themes;
  final int initialTheme;
  const YApp({Key? key, required this.builder, required this.themes, required this.initialTheme}) : super(key: key);

  @override
  State<YApp> createState() => _YAppState();
}

class _YAppState extends State<YApp> {
  @override
  Widget build(BuildContext context) {
    theme = YCurrentTheme(currentTheme: widget.initialTheme, themes: widget.themes);
    return ChangeNotifierProvider.value(
      value: theme,
      child: Consumer<YCurrentTheme>(builder: (context, _, __) {
        final Key key = UniqueKey();
        return Responsive(
          key: key,
          builder: (context) => widget.builder(context),
        );
      }),
    );
  }
}
```

### Theme

This part of the library exposes a `theme` global variable that can be used to access the current theme. Themes must be provided to the `YApp` widget.

Source code available [here](https://github.com/EduWireApps/ynotes-packages/tree/main/lib/src/theme).

### Utilities

As a web developer, I really enjoy the way [Tailwind CSS](https://tailwindcss.com/) works. It allows to work within a set of values, which is improves consistency. So I made my own quickly in Dart with border radius, font size, font weight, letter spacing and scale.

### Settings

Until then, we were relying on a fork of [settings_ui](https://pub.dev/packages/settings_ui) which provides great settings ui for each OS. But I felt it didn't fit well in yNotes since we didn't use native styling depending on the OS. So like for the components, I created the lib to have consistent settings across platforms.

## Wrapping up

Developing a components library as well as a design system was definitely a great experience. I learned a lot and will inspired by this work in the future.

To learn more about using the library, Head over to [the documentation](https://github.com/EduWireApps/ynotes-packages).

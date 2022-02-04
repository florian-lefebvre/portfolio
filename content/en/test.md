---
title: test title
desc: test desc
---

# A header

this is some markdown wow

```ts
import data from "~/data";
import { SwiperSlide } from "swiper/vue";
import { ArrowCircleDownIcon, ArrowUpIcon } from "@heroicons/vue/outline";
import { Project } from "~/types";
const { fullName } = useMe();
useSeo({
  title: "Home",
});

// An awesome comment
const projects: Project[] = [
  {
    title: "yNotes app",
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    description:
      "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features. I'm involved in the development and the design of the app.",
    slug: "ynotes-app",
  },
  {
    title: "RégioLangues",
    imageUrl:
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale/v1641930868/Regiolangues/og_sup891.jpg",
    description:
      "RégioLangues is a website I made for my brother. I was only involved in the coding, not the data. Its goal: gather resources around the web on the topic of French regional languages. It uses Supabase for the backend.",
    slug: "regiolangues",
  },
  {
    title: "Portfolio",
    imageUrl: "https://picsum.photos/id/3/400/300",
    description:
      "Not much to say except that I am quite satisfied with the result.",
    slug: "portfolio",
  },
  {
    title: "OHF31 website",
    imageUrl:
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,w_1000/v1636657520/OHF31/ohf31-public-website/images/shared/og_image_bsrjhr.png",
    description:
      "I finally finished v3 of the 1st site I made! That's a basic showcase site but I think it looks really great. And it runs on Nuxt 3 🎉",
    slug: "ohf31-website",
  },
  {
    title: "yNotes website",
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    description:
      "At yNotes, we needed a support center and a more consistent website, so I remade everything. This allowed me to discover animation with AnimXYZ and learn how to make a more modern design.",
    slug: "ynotes-website",
  },
];
```

```dart
import 'package:flutter/material.dart';

const Color primaryColor = Color(0xfffed7aa);

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(
              seedColor: primaryColor, brightness: Brightness.dark)),
      debugShowCheckedModeBanner: false,
      home: Builder(
          builder: (context) => Scaffold(
                backgroundColor: Theme.of(context).colorScheme.tertiary,
                appBar: AppBar(title: const Text("Title")),
                body: Center(
                  child: MyWidget(),
                ),
              )),
    );
  }
}

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text(
      'Hello, World!',
      style: Theme.of(context).textTheme.headline4,
    );
  }
}
```

```html
<div class="bg-red-500">A test element</div>
```

```py
x = False
```

### A sub title

Does HMR work? **looks like it**.

---

_incredible_

- test
- 2
- 3
- 4

---

1. a
2. b
3. c
4. d

## Concept and story

In France, secondary, high schools and colleges must have an _ENT_ (digital workspace) for their students and teachers to communicate and have access to informations. For example, grades, homeworks, schedule, documents and more.

There are 2 types of schools: public and private. The Ministry of National Education has a contract with [Index Education](https://www.index-education.com/) to provide ENT (Pronote) for public schools. As for the private schools, they can choose whatever service they want but most of them actually use [Ecole Directe](https://ecoledirecte.com).

Those services provide web interfaces as well as mobile apps. But they kind of suck and are not thought for the users. So here enters [yNotes](https://ynotes.fr/). At the origin back in 2020, it was meant to add a dark mode to Ecole Directe but quickly grew up. Supporting gradually grades, homework, and already service provided features, it added a lot of features such as notifications for grades, grade simulator, offline support, a download center... Mid July 2020, [Josselin](https://github.com/JsonLinesCode), author of yNotes, started adding support for Pronote.

So yNotes acts as an official replacement for the official ENT mobile apps, by providing already present features and adding new ones.

What's my role in this project you may ask. I joined in October 2020 as a front-end developer and reworked the website, as well as working on mockups and designs using [Figma](https://www.figma.com/). I was also giving advices on project architecture and management. At this time, I didn't want to get involved in coding the app itself as I didn't now [Dart](https://dart.dev) nor [Flutter](https://flutter.dev). In July, I started to learn those technologies and wrote a component library ([see related project](/projects/ynotes-packages)). In September, I became the maintainer.

## Challenges and technical details

The development of yNotes has been challenging for several reasons. Here are a few of them.

### Unknown APIS

Since yNotes is an unofficial ENT app, it relies on APIs that are not documented. The only way to know how to interact with them is by looking at the requests made in the `Network` tab of the browser. Definitely not the easiest way to build an app that is already complex in itself.

### Flutter and cross-platform

Flutter had been chosen to develop the app with cross-platorm deployment in mind. Indeed, it was originally developed for Android but it was later decided (and possible) to deploy on iOS. We even prepared it for desktop targets (Windows, Linux, MacOS).

Not only it's not that easy to develop for a single platform, but supporting 2 or 5 is not easy either. It means some features have to be platform specific and it makes it harder to debug in development, but also when receiving bug reports.

### Storing data

Because of its unofficial nature, data had to be stored locally. For configuration and authentication data, we used [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage). For the rest of the data, we used [Hive](https://pub.dev/packages/hive) (NoSQL database) since we didn't really needed relationships. Unfortunately, Hive doesn't support multi isolates access (multi threading in dart) for foreground and background concurrent access which was leading to database corruptions. We made some dirty fixes like reset the database, but ultimately we wish we could use [Isar](https://pub.dev/packages/isar) but we had to many issues with it (for instance it doesn't support 32bit devices).

### Deploying via fastlane

At the beggining, APKs were built locally and manually uploaded to the Google Play Console. It wasn't that great so we (well Josselin did it) automated deployments to stores using GitHub Actions and [fastlane](https://fastlane.tools/). As far as I know, it was hard to setup because of certificate, keys and App Store way of doing things.

## Wrapping up

yNotes is an unofficial client for French digital workspaces. It adds many more features and is really interesting technically speaking, I actually learned **a lot** with it, on both development and project management.

import { MessageSchema } from "~/types/i18n";

const { age } = useMe();

const message: MessageSchema = {
  test: "a test in english",
  global: {
    name: "Florian LEFEBVRE",
    meta: {
      description: `A ${age} year old self-taught fullstack developer from France.`,
    },
    links: {
      navigation: [
        { name: "Home", url: "/" },
        { name: "About me", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Blog", url: "/blog" },
        {
          name: "Github",
          url: "https://github.com/florian-lefebvre",
          external: true,
        },
      ],
      legal: [
        {
          name: "Terms",
          url: "/legal/terms",
        },
        {
          name: "Privacy",
          url: "/legal/privacy",
        },
        {
          name: "Credits",
          url: "/legal/credits",
        },
      ],
    },
    footer: {
      rights: "&copy {date} @:global.name{'.'} All rights reserved.",
      categories: { navigation: "Navigation", legal: "Legal" },
    },
  },
  pages: {
    home: {
      introduction: {
        title: "Hi, I'm",
        short: "@:global.meta.description",
        description:
          "I enjoy creating beautiful and functional websites as well as mobile apps. I'm currently working on {0}, a school life mobile application that connects French students to their school services.",
        descriptionLink: "yNotes",
        learnMore: "Learn more",
        scrollDown: "Scroll down",
      },
      about: {
        title1: "About",
        title2: "me",
        description:
          "I am a French student in my last year of high school. I've been coding since 2019 on my free time and I've already accomplished several things.",
        learnMore: "Learn more",
        cardsTitle: "At {0}...",
        cards: [
          {
            age: 13,
            description:
              "I started to learn how to code with Unreal Engine 4 using blueprints.",
          },
          {
            age: 15,
            description: "I started to learn web development.",
          },
          {
            age: 16,
            description:
              "I started working on yNotes, a mobile app made with Flutter with already more than 4k users.",
          },
          {
            age: 17,
            description:
              "I know all the tools needed to build apps: frontend, backend and mobile.",
          },
        ],
      },
      projects: {
        title1: "A few",
        title2: "projects",
        description:
          "Since I started to learn web development, I've already built several websites and mobile apps using modern technologies. Here is an overview.",
        viewAll: "View all",
      },
    },
    about: {
      introduction: {
        title1: "About",
        title2: "me",
        shortDescription:
          "I am a French student in my last year of high school. I've been coding since 2019 on my free time and I've already accomplished several things.",
        longDescription: Object.values(
          import.meta.globEager("../content/en/about.md")
        )[0].default,
      },
    },
    projects: {},
    blog: {},
    contact: {},
  },
};

console.log(
  Object.values(import.meta.globEager("../content/en/about.md"))[0].default
);

export default message;

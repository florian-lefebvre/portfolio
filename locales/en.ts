import { MessageSchema } from "~/types";

const { age } = useMe();

const message: MessageSchema = {
  test: "a test in english",
  global: {
    name: "Florian LEFEBVRE",
    meta: {
      description: `A ${age} year old self-taught fullstack developer from France.`,
    },
    navigation: [],
    legal: [],
    footer: "&copy {date} @:global.name{'.'} All rights reserved.",
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
    },
    about: {},
    projects: {},
    blog: {},
    contact: {},
  },
};

export default message;

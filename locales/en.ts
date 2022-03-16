import { MessageSchema } from "~/types/i18n";

const { fullName } = useMe();

const message: MessageSchema = {
  global: {
    name: fullName,
    meta: {
      description: `French self-taught fullstack developer.`,
    },
    seo: {
      titleTemplate:
        "{title} - @:global.name{','} @.lower:global.meta.description",
    },
    links: {
      navigation: [
        { name: "Home", url: "/" },
        { name: "About me", url: "/about" },
        { name: "Projects", url: "/projects" },
        {
          name: "GitHub",
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
      rights: `&copy ${new Date().getFullYear()} @:global.name{'.'} All rights reserved.`,
      categories: { navigation: "Navigation", legal: "Legal" },
    },
  },
  pages: {
    home: {
      seo: {
        title: "Home",
        description:
          "@:pages.home.introduction.title @:global.name{'.'} @:pages.home.introduction.description",
      },
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
      seo: {
        title: "About me",
        description:
          "Learn more about me. @:pages.about.introduction.shortDescription",
      },
      introduction: {
        title1: "About",
        title2: "me",
        shortDescription:
          "I am a French student in my last year of high school. I've been coding since 2019 on my free time and I've already accomplished several things.",
        longDescription:
          "I've always been interested in technology. In secondary school, I was already in charge of the school's computers. I started learning to code with Unreal Engine 4 using blueprints in 2018. I did that for about a year, then decided to learn web development. I started with a simple HTML + CSS website (which looked horrible), then I tried PHP, then Bootstrap and so on.... I am now a fullstack developer with a modern technology stack that you can see below.",
      },
      stack: {
        title1: "Tech",
        title2: "stack",
        description:
          "I know all the tools needed to build apps: frontend, backend and mobile...",
        otherTechnologies: "...but I also know...",
        tools: "...and use those tools:",
      },
      education: {
        title: "Education",
        courses: [
          {
            dates: "2015 - 2019",
            name: "Secondary school Sainte Geneviève",
            topic: "GCSE equivalent with honourable mention",
          },
          {
            dates: "2019 - 2022",
            name: "High school Le Ferradou",
            topic: "Computer science and mathematics",
          },
        ],
      },
    },
    projects: {
      seo: {
        title: "Projects",
        description: "@:pages.projects.description",
      },
      title: "Projects",
      description: "@:pages.home.projects.description",
    },
    contact: {},
    legal: {
      credits: {
        seo: {
          title: "TODO",
          description: "TODO",
        },
      },
      privacy: {
        seo: {
          title: "TODO",
          description: "TODO",
        },
      },
      terms: {
        seo: {
          title: "TODO",
          description: "TODO",
        },
      },
    },
  },
};

export default message;

import { MessageSchema } from "~/types/i18n";
import projects from "~/data/projects";

const { fullName } = useMe();
const currentYear: number = new Date().getFullYear();

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
          name: "Notices",
          url: "/legal/notices",
        },
        {
          name: "Privacy",
          url: "/legal/privacy",
        },
      ],
    },
    footer: {
      rights: `&copy ${currentYear} @:global.name{'.'} All rights reserved.`,
      categories: { navigation: "Navigation", legal: "Legal" },
    },
    accessibility: {
      previousSlide: "Previous slide",
      nextSlide: "Next slide",
      backToTop: "Back to top",
    },
    loading: {
      loading: "Loading...",
      notLoading: "Not loading properly?",
      openAnIssue: "Open an issue on GitHub",
    },
    projects: {
      view: "View",
      toc: "Table of contents",
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
        description: `I'm a @:global.meta.description I enjoy designing and creating beautiful, functional websites as well as mobile apps. I've been coding for more than ${
          currentYear - 2020
        } years now. I've been working on {0} lately, a French open-source school management system.`,
        descriptionLinks: [
          {
            name: "op-ent",
            url: "https://github.com/op-ent",
          },
        ],
        learnMore: "Learn more",
        scrollDown: "Scroll down",
      },
      about: {
        title1: "About",
        title2: "me",
        description: `I am a French student in my first year of university, studying web development, design and communication. I've been coding since late 2019 on my own time and have already completed ${projects.length} projects. One of my hobbies is playing drums and percussions in several bands.`,
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
            description:
              "I got into web development by making my first website using simple HTML and CSS.",
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
          "Since I started to learn web development, I've already built several websites and mobile apps using modern technologies. Here is an overview:",
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
        shortDescription: "@:pages.home.about.description",
        longDescription:
          "I've always been interested in technology. In secondary school, I was already in charge of the school's computers. I started learning to code with Unreal Engine 4 using blueprints in 2018. I did that for about a year, then decided to learn web development. I started with a simple HTML and CSS website , then I tried PHP, then Bootstrap and so on.... I am now a fullstack developer with a modern technology stack that you can see below.",
        music: {
          description: `I also enjoy playing music. I have been playing drums for ${
            currentYear - 2010
          } years, percussion for ${
            currentYear - 2018
          } years and bass guitar for ${
            currentYear - 2019
          } years in several orchestras and bands: {ohf}, the symphonic orchestra of the intermunicipal music school of Fronton and {rockBand}.`,
          ohf: {
            name: "l'Orchestre d'Harmonie du Frontonnais",
            url: "https://ohf31.fr",
          },
          rockBand: {
            name: "le groupe rock",
            url: "https://www.instagram.com/legrouperock/",
          },
        },
      },
      stack: {
        title1: "Tech",
        title2: "stack",
        description:
          "I know all the tools needed to build apps: frontend, backend and mobile. Here is my current teck stack:",
        otherTechnologies:
          "But I also know the languages they use, as well as other technologies:",
        tools: "And I use the following tools to boost my productivity:",
      },
      sections: [
        {
          title: "Education",
          cards: [
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
            {
              dates: "2022 - 2025",
              name: "BUT MMI",
              topic:
                '"University Bachelor of Technology in Multimedia and Internet Professions"',
            },
          ],
        },
        {
          title: "Certifications",
          cards: [
            {
              dates: "2022",
              name: "Cambridge B2",
              topic: "Awaiting results",
            },
            {
              dates: "March 10th 2022",
              name: "Reply Code Challenge - Teen Edition",
              topic: "Team WhyNot ranked 156th out of 1150",
            },
            {
              dates: "July 5th 2022",
              name: "High school diploma",
              topic: "Honourable mention, European section (english)",
            },
          ],
        },
      ],
    },
    projects: {
      seo: {
        title: "@:pages.projects.title",
        description: "@:pages.projects.description",
      },
      title: "Projects",
      description: "@:pages.home.projects.description",
    },
    contact: {
      title1: "Get in",
      title2: "touch",
      description:
        "If you wish to talk, or chat about an existing / upcoming project, feel free to reach out with any of the below methods.",
      warning: "I'm not open for work right now.",
    },
    legal: {
      privacy: {
        seo: {
          title: "Privacy policy",
          description:
            "The purpose of the privacy policy is to explain in a transparent manner how data, especially personal data, is collected and processed. This includes the reasons for the collection, the legal basis and the purposes for the processing of personal data, as well as the rights and requests you can make.",
        },
        title1: "Privacy",
        title2: "policy",
      },
      notices: {
        seo: {
          title: "Legal notices",
          description:
            "Please read these terms carefully before using this site. By accessing this site, you accept these terms and conditions without reservation.",
        },
        title1: "Legal",
        title2: "notices",
      },
    },
  },
};

export default message;

import { MessageSchema } from "~/types/i18n";

const { age } = useMe();

const message: MessageSchema = {
  test: "un test en français",
  // introduction: {
  //   quick: `A ${age} year old self-taught fullstack developer from France.`,
  // },
  global: {
    name: "Florian LEFEBVRE",
    meta: {
      description: `Un développeur fullstack autodidacte de ${age} ans, originaire de France.`,
    },
    links: {
      navigation: [
        { name: "Accueil", url: "/" },
        { name: "A propos", url: "/about" },
        { name: "Projets", url: "/projects" },
        { name: "Blog", url: "/blog" },
        {
          name: "GitHub",
          url: "https://github.com/florian-lefebvre",
          external: true,
        },
      ],
      legal: [
        {
          name: "Conditions",
          url: "/legal/notices",
        },
        {
          name: "Confidentialité",
          url: "/legal/privacy",
        },
        {
          name: "Crédits",
          url: "/legal/credits",
        },
      ],
    },
    footer: {
      rights: "&copy; {date} @:global.name{'.'} Tous droits réservés.",
      categories: { navigation: "Navigation", legal: "Légal" },
    },
  },
  pages: {
    home: {
      introduction: {
        title: "Hey, moi c'est",
        short: "@:global.meta.description",
        description:
          "J'aime créer des sites web beaux et fonctionnels ainsi que des applications mobiles. Je travaille actuellement sur {0}, une application mobile de vie scolaire qui connecte les élèves français à leurs services scolaires.",
        descriptionLink: "yNotes",
        learnMore: "En savoir plus",
        scrollDown: "Faites défiler vers le bas",
      },
      about: {
        title1: "À propos de",
        title2: "moi",
        description:
          "Je suis un étudiant français en Terminale. Je code depuis 2019 sur mon temps libre et j'ai déjà accompli plusieurs choses.",
        learnMore: "En savoir plus",
        cardsTitle: "À {0} ans...",
        cards: [
          {
            age: 13,
            description:
              "J'ai commencé à apprendre à coder avec Unreal Engine 4 en utilisant les blueprints.",
          },
          {
            age: 15,
            description: "J'ai commencé à apprendre le développement web.",
          },
          {
            age: 16,
            description:
              "J'ai commencé à travailler sur yNotes, une application mobile réalisée avec Flutter qui compte déjà plus de 4 000 utilisateurs.",
          },
          {
            age: 17,
            description:
              "Je connais tous les outils nécessaires à la création d'applications : front-end, back-end et mobile.",
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

import { MessageSchema } from "~/types";

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
    navigation: [],
    legal: [],
    footer: "&copy; {date} @:global.name{'.'} Tous droits réservés.",
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
        title1: "A propos de",
        title2: "moi",
        learnMore: "En savoir plus",
        cardsTitle: "À {0}...",
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

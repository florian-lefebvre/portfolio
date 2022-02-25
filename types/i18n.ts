import { Link } from ".";

export interface MessageSchema {
  test: string;
  global: {
    name: string;
    meta: {
      description: string;
    };
    links: {
      navigation: Link[];
      legal: Link[];
    };
    footer: {
      rights: string;
      categories: {
        navigation: string;
        legal: string;
      };
    };
  };
  pages: {
    home: {
      introduction: {
        title: string;
        short: string;
        description: string;
        descriptionLink: string;
        learnMore: string;
        scrollDown: string;
      };
      about: {
        title1: string;
        title2: string;
        description: string;
        learnMore: string;
        cardsTitle: string;
        cards: Array<{
          age: number;
          description: string;
        }>;
      };
      projects: {
        title1: string;
        title2: string;
        description: string;
        viewAll: string;
      };
    };
    about: {
      introduction: {
        title1: string;
        title2: string;
        shortDescription: string;
        longDescription: string;
      };
    };
    projects: {};
    blog: {};
    contact: {};
  };
}

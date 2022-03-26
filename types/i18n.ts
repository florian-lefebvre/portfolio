import { Link } from ".";

interface _Card {
  age: number;
  description: string;
}

export interface AboutCard {
  dates: string;
  name: string;
  topic: string;
}

export type AvailableLocales = "en" | "fr";

type _Page = {
  seo: {
    title: string;
    description: string;
  };
};

export type MessageSchema = {
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
    seo: {
      titleTemplate: string;
    };
    accessibility: {
      previousSlide: string;
      nextSlide: string;
      backToTop: string;
    };
  };
  pages: {
    home: _Page & {
      introduction: {
        title: string;
        description: string;
        descriptionLink: Link;
        learnMore: string;
        scrollDown: string;
      };
      about: {
        title1: string;
        title2: string;
        description: string;
        learnMore: string;
        cardsTitle: string;
        cards: _Card[];
      };
      projects: {
        title1: string;
        title2: string;
        description: string;
        viewAll: string;
      };
    };
    about: _Page & {
      introduction: {
        title1: string;
        title2: string;
        shortDescription: string;
        longDescription: string;
        music: {
          description: string;
          ohf: Link;
          rockBand: Link;
        };
      };
      stack: {
        title1: string;
        title2: string;
        description: string;
        otherTechnologies: string;
        tools: string;
      };
      sections: Array<{
        title: string;
        cards: AboutCard[];
      }>;
    };
    projects: _Page & {
      title: string;
      description: string;
    };
    contact: {
      title1: string;
      title2: string;
      description: string;
      warning: string;
    };
    legal: {
      privacy: _Page & {};
      terms: _Page & {};
    };
  };
};

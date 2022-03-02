import { Link } from ".";

interface _Card {
  age: number;
  description: string;
}

export interface TrainingCourse {
  dates: string;
  name: string;
  topic: string;
}

export interface MessageSchema {
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
        cards: _Card[];
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
      stack: {
        title1: string;
        title2: string;
        description: string;
        otherTechnologies: string;
        tools: string;
      };
      education: {
        title: string;
        courses: TrainingCourse[];
      };
    };
    projects: {};
    contact: {};
  };
}

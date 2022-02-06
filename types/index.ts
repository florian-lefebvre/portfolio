import { ComputedRef } from "nuxt3/dist/app/compat/vue-demi";

export interface Link {
  name: string;
  url: string;
  external?: boolean;
}

export interface FooterCategory {
  name: string;
  links: Link[];
}

export interface Project {
  title: string;
  imageUrl: string;
  description: string | ComputedRef<string>;
  slug: string;
}

export interface MessageSchema {
  test: string;
  global: {
    name: string;
    meta: {
      description: string;
    };
    navigation: Link[];
    legal: Link[];
    footer: string;
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
    };
    about: {};
    projects: {};
    blog: {};
    contact: {};
  };
}

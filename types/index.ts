import { ComputedRef } from "nuxt3/dist/app/compat/vue-demi";
import { AvailableLocales } from "./i18n";

export interface Link {
  name: string;
  url: string;
  external?: boolean;
}

export interface FooterCategory {
  name: string;
  links: Link[];
}

export interface Icon {
  color: string;
  title: string;
  path: string;
}

export interface Project {
  global: {
    technologies: string[];
    imageUrl: string;
    links: Link[];
  };
  locales: {
    [locale in AvailableLocales]: ProjectLocale;
  };
}

export interface ProjectLocale {
  name: string;
  description: string;
  links: Link[];
  slug: string;
  content: string;
  type: string;
  readingTime?: number;
}

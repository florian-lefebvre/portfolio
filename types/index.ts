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

export interface Icon {
  color: string;
  title: string;
  path: string;
}

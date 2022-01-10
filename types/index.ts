export interface Link {
  name: string;
  url: string;
  external?: boolean;
}

export interface FooterCategory {
    name: string;
    links: Link[];
}
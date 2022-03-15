declare module "*.md?raw" {
  const content: string;
  export default content;
}

declare module "@nuxt/schema" {
  interface PublicRuntimeConfig {
    domain: string;
  }
}

export {};

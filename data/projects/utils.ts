import { render } from "~/utils/mdit";
import { Project } from "~/types";

export const defineProject = (project: Project): Project => {
  project.global.technologies.sort();
  project.global.links.sort((a, b) => a.name.localeCompare(b.name));
  for (const locale of Object.values(project.locales)) {
    locale.content = render(locale.content);
    locale.links.sort((a, b) => a.name.localeCompare(b.name));
  }
  return project;
};

export const generateHash = (length: number = 64): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * length));
  }
  return result;
};

export const githubOgImage = (owner: string, repo: string): string =>
  `https://opengraph.githubassets.com/${generateHash()}/${owner}/${repo}`;

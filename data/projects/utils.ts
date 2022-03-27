import { render } from "~/utils/mdit";
import { Project } from "~~/types";

export const defineProject = (project: Project): Project => {
  project.global.technologies.sort();
  for (const locale of Object.values(project.locales)) {
    locale.content = render(locale.content);
  }
  return project;
};

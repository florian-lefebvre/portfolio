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

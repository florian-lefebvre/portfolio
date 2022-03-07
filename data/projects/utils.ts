import mdit from "~/utils/mdit";
import { useCloudinary } from "~/composables/useCloudinary";

export const render = (page: string) => {
  const regex = /{{.*}}/gm;
  const matches: RegExpMatchArray | null = page.match(regex);
  if (matches != null) {
    for (const match of matches) {
      try {
        if (match.includes("useCloudinary")) {
          const props = eval("(" + match.slice(17, -4) + ")");
          page = page.replace(match, useCloudinary(props));
        } else {
          page = page.replace(match, eval(match.slice(2, -2)));
        }
      } catch (e) {}
    }
  }
  return mdit.render(page);
};

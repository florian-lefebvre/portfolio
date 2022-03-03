import mdit from "~/utils/mdit";

export const render = (page: string) => {
  return mdit.render(page);
};

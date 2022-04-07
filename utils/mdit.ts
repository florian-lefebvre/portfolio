import MarkdownIt from "markdown-it";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import fn from "markdown-it-footnote";
import emo from "markdown-it-emoji";
import mdnh from "markdown-it-named-headers";
import mila from "markdown-it-link-attributes";
import ncb from "markdown-it-named-code-blocks";
import toc from "markdown-it-table-of-contents";
import { HLJSApi } from "highlight.js";
import consola from "consola";
import string from "string";
import { useCloudinary } from "~/composables/useCloudinary";
// @ts-ignore
const hljs: HLJSApi = await import("highlight.js").then(
  (lib) => lib.default || lib
);

const options: MarkdownIt.Options = {
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return "";
  },
};

const mdit: MarkdownIt = new MarkdownIt(options)
  .use(sub)
  .use(sup)
  .use(fn)
  .use(emo)
  .use(mdnh)
  .use(mila, {
    matcher(href: string, config) {
      return !href.startsWith("/") && !href.startsWith("#");
    },
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  })
  .use(ncb)
  .use(toc, {
    includeLevel: [1, 2, 3, 4, 5, 6],
    slugify(str: string) {
      return string(str).slugify().toString();
    },
  });

mdit.linkify.set({ fuzzyEmail: false });

export default mdit;

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
      } catch (e) {
        consola.error(e);
      }
    }
  }
  page = "[[toc]]\n\n<hr />\n\n" + page;
  return mdit.render(page);
};

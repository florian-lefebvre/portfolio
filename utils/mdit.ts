import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import fn from "markdown-it-footnote";
import emo from "markdown-it-emoji";
import mdnh from "markdown-it-named-headers";
import mila from "markdown-it-link-attributes";

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
  });

mdit.linkify.set({ fuzzyEmail: false });

export default mdit;

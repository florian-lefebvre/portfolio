import hljs from "~/utils/hljs";
import MarkdownIt from "markdown-it";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import fn from "markdown-it-footnote";
import emo from "markdown-it-emoji";

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
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return (
  //         '<pre class="hljs"><code>' +
  //         hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
  //         "</code></pre>"
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   return (
  //     '<pre class="hljs"><code>' +
  //     MarkdownIt().utils.escapeHtml(str) +
  //     "</code></pre>"
  //   );
  // },
};

const mdit: MarkdownIt = new MarkdownIt(options)
  .use(sub)
  .use(sup)
  .use(fn)
  .use(emo);

mdit.linkify.set({ fuzzyEmail: false });

export default mdit;

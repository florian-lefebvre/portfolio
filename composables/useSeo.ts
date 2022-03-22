import { useI18n } from "vue-i18n";
import { useCloudinary } from "./useCloudinary";

interface Props {
  title: string;
  description: string;
}

export default function ({ title, description }: Props) {
  const { t, locale } = useI18n();
  const config = useRuntimeConfig();
  const url = (path: string): string => config.url + path;
  const getTitle = (title: string): string =>
    t("global.seo.titleTemplate", { title });
  const imagePath = useCloudinary({
    path: "global/og.jpg",
    id: "ekzloe",
  });

  const { currentRoute: route } = useRouter();
  const facebookMetaTags = [
    {
      hid: "og:url",
      name: "og:url",
      content: url(route.value.fullPath),
    },
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:title",
      name: "og:title",
      content: getTitle(title),
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: imagePath,
    },
  ];

  const twitterMetaTags = [
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      hid: "twitter:domain",
      name: "twitter:domain",
      content: "ohf31.fr",
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: url(route.value.fullPath),
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: getTitle(title),
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: imagePath,
    },
  ];

  useMeta({
    title: getTitle(title),
    htmlAttrs: {
      lang: locale,
    },
    meta: [
      {
        hid: "description",
        name: "description",
        content: description,
      },

      ...facebookMetaTags,
      ...twitterMetaTags,
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: useCloudinary({
          path: "global/favicon.png",
          id: "alleti",
        }),
      },
    ],
  });
}

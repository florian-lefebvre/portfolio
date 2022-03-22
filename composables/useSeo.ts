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
      name: "og:url",
      content: url(route.value.fullPath),
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:title",
      content: getTitle(title),
    },
    {
      name: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: imagePath,
    },
  ];

  const twitterMetaTags = [
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:domain",
      content: "ohf31.fr",
    },
    {
      name: "twitter:url",
      content: url(route.value.fullPath),
    },
    {
      name: "twitter:title",
      content: getTitle(title),
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
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

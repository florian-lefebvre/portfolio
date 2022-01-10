const getTitle = (title: string): string =>
  `${title} - Florian LEFEBVRE`;

const description =
  "TBD";

const url = (path: string): string => `https://florian-lefebvre${path}`;

interface Props {
  title: string;
}

const imagePath = url("/og.png");

export default function ({ title }: Props) {
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
    meta: [
      {
        hid: "description",
        name: "description",
        content: description,
      },
      ...facebookMetaTags,
      ...twitterMetaTags,
    ],
  });
}

import global from './global';

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || global.siteDesc,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || global.siteType,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || global.siteUrl,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || global.siteTitle,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || global.siteDesc,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || global.mainImage,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: (meta && meta.siteName) || `${global.siteTitle} - ${global.author}`,
    },
    {
      hid: 'apple-mobile-web-app-title',
      property: 'apple-mobile-web-app-title',
      content: (meta && meta.siteName) || `${global.siteTitle} - ${global.author}`,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || global.siteUrl,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || global.siteTitle,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || global.siteDesc,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || global.mainImage,
    },
  ];
};
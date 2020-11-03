import global from "@/utils/global";

export const state = () => ({
  firstName: global.firstName,
  lastName: global.lastName,
  job: global.job,
  city: global.city,
  country: global.country,
  email: global.email,
  linkedin: global.linkedin,
  siteUrl: global.url,
  siteName: global.siteName,
  author: global.author,
  gihtub: global.github,
  githubURL: global.githubURL,
  siteTitle: global.siteTitle,
  siteDesc: global.siteDesc,
  mainImage: global.mainImage,
  siteType: global.siteType,
  siteBaseTitle: global.siteBaseTitle
});

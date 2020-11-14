import global from "@/utils/global";

export const state = () => ({
  firstName: global.firstName,
  lastName: global.lastName,
  job: global.job,
  city: global.city,
  country: global.country,
  email: global.email,
  linkedin: global.linkedin,
  siteUrl: global.siteUrl,
  author: global.author,
  github: global.github,
  siteTitle: global.siteTitle,
  siteDesc: global.siteDesc,
  mainImage: global.mainImage,
});

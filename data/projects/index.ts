import { Project } from "~/types";
import * as p from "./projects";
import nuxt3StarterMedusa from "./nuxt3StarterMedusa";

export const featured = computed(() => nuxt3StarterMedusa);

const projects: Project[] = Object.values(p);
export default projects;

// const projects = ref<ProjectTMP[]>([

//   {
//     title: "RégioLangues",
//     imageUrl:
//       "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale/v1641930868/Regiolangues/og_sup891.jpg",
//     description:
//       "RégioLangues is a website I made for my brother. I was only involved in the coding, not the data. Its goal: gather resources around the web on the topic of French regional languages. It uses Supabase for the backend.",
//     slug: "regiolangues",
//   },
//   {
//     title: "OHF31 website",
//     imageUrl:
//       "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,w_1000/v1636657520/OHF31/ohf31-public-website/images/shared/og_image_bsrjhr.png",
//     description:
//       "I finally finished v3 of the 1st site I made! That's a basic showcase site but I think it looks really great. And it runs on Nuxt 3 🎉",
//     slug: "ohf31-website",
//   },
//   {
//     title: "yNotes website",
//     imageUrl:
//       "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
//     description:
//       "At yNotes, we needed a support center and a more consistent website, so I remade everything. This allowed me to discover animation with AnimXYZ and learn how to make a more modern design.",
//     slug: "ynotes-website",
//   },
// ]);

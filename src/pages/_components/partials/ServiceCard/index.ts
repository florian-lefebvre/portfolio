import { default as _ServiceCard } from "./ServiceCard.astro";
import { default as Title } from "./Title.astro";
import { default as Description } from "./Description.astro";
import { default as Techs } from "./Techs.astro";

export const ServiceCard = Object.assign(_ServiceCard, { Title, Description, Techs });

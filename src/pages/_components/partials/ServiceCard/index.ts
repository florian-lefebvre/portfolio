import { default as ServiceCard } from "./ServiceCard.astro";
import { default as Title } from "./Title.astro";
import { default as Description } from "./Description.astro";
import { default as Techs } from "./Techs.astro";

export default Object.assign(ServiceCard, { Title, Description, Techs });

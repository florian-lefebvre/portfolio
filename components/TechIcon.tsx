import { Technology } from "~/types";

const TechIcon = (props: { technology: Technology }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill={props.technology.color}
  >
    <title>{props.technology.title}</title>
    <path d={props.technology.path} />
  </svg>
);

export default TechIcon;

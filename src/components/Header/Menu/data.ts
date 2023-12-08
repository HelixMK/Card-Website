import GitlabIcon from "@/src/components/Icons/GitlabIcon";
import GithubIcon from "@/src/components/Icons/GithubIcon";

export const PUBLIC_MENU = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const LINK_LIST = [
  {
    name: "Github",
    img: GithubIcon(),
    path: "https://github.com/HelixMK",
  },
  {
    name: "Gitlab",
    img: GitlabIcon(),
    path: "https://gitlab.com/HelixMK",
  },
];

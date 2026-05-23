import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@soufian-elouazzani",
    icon: Icons.gitHub,
    link: "https://github.com/soufian-elouazzani",
  },
  {
    name: "LinkedIn",
    username: "Soufian Elouazzani",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/soufian-elouazzani",
  },
  {
    name: "Twitter",
    username: "@soufian-elouazzani",
    icon: Icons.twitter,
    link: "https://twitter.com/soufian-elouazzani",
  },
  {
    name: "Gmail",
    username: "soufian.elouazzani",
    icon: Icons.gmail,
    link: "mailto:soufian.elouazzani@gmail.com",
  },
];

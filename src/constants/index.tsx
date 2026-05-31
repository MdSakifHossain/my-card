import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react"

const stroke = 1.3

export const config = {
  title: "MD. Sakif Hossain",
  description: "Im a Student who is Tired and Almost Dead.",
  socials: [
    {
      id: 0,
      name: "Facebook",
      icon: <IconBrandFacebook stroke={stroke} />,
      url: "https://www.facebook.com/sakif.hossain.583",
    },
    {
      id: 1,
      name: "Instagram",
      icon: <IconBrandInstagram stroke={stroke} />,
      url: "https://www.instagram.com/sakifhoossain/",
    },
    {
      id: 2,
      name: "YouTube",
      icon: <IconBrandYoutube stroke={stroke} />,
      url: "https://m.youtube.com/@playingwithSAKIF",
    },
    {
      id: 3,
      name: "Github",
      icon: <IconBrandGithub stroke={stroke} />,
      url: "https://github.com/MdSakifHossain",
    },
  ],
}

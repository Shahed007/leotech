import cloudHostingHostingIcon from "@/assets/icons/cloud__hosting.png";
import wordpressHosingIcon from "@/assets/icons/web__hosting.png";
import resellerHostingIcon from "@/assets/icons/reseller__hosting.png";
import { StaticImageData } from "next/image";

export const hostingSolutions : {title: string, description: string, icon: StaticImageData, link: string}[] = [
  {
    title: "Cloud Hosting",
    description: "Cloud hosting is a way to store and access data and applications over the internet, providing scalable and flexible solutions for website hosting.",
    icon: cloudHostingHostingIcon,
    link: "cloud-hosting",
  },
  {
    title: "Wordpress Hosting",
    description: "WordPress hosting is specialized hosting optimized for WordPress websites, offering easy setup, enhanced performance, and dedicated support for managing WordPress-specific needs.",
    icon: wordpressHosingIcon,
    link: "wordpress-hosting",
  },
  {
    title: "Reseller Hosing",
    description: "Reseller hosting allows you to sell web hosting services to others, leveraging resources from a hosting provider while offering your clients customized plans and support.",
    icon: resellerHostingIcon,
    link: "reseller-hosting",
  }
]
import cloudHostingHostingIcon from "@/assets/icons/cloud__hosting.png";
import wordpressHosingIcon from "@/assets/icons/web__hosting.png";
import resellerHostingIcon from "@/assets/icons/reseller__hosting.png";
import sharedHostingIcon from "@/assets/hostingDropDown/22.svg";
import dedicatedHostingIcon from "@/assets/hostingDropDown/23.svg"

import { StaticImageData } from "next/image";

export const hostingSolutions: {
  title: string;
  description: string;
  icon: StaticImageData;
  link: string;
}[] = [
  {
    title: "Cloud Hosting",
    description:
      "Cloud hosting is a way to store and access data and applications over the internet, providing scalable and flexible solutions for website hosting.",
    icon: cloudHostingHostingIcon,
    link: "cloud-hosting",
  },
  {
    title: "Wordpress Hosting",
    description:
      "WordPress hosting is specialized hosting optimized for WordPress websites, offering easy setup, enhanced performance, and dedicated support for managing WordPress-specific needs.",
    icon: wordpressHosingIcon,
    link: "wordpress-hosting",
  },
  {
    title: "Reseller Hosing",
    description:
      "Reseller hosting allows you to sell web hosting services to others, leveraging resources from a hosting provider while offering your clients customized plans and support.",
    icon: resellerHostingIcon,
    link: "reseller-hosting",
  },
  {
    title: "Shared Hosting",
    description:
      "Opt for shared hosting for cost-effective, reliable website performance. Benefit from shared server resources and hassle-free management. Focus on growth while providers handle maintenance and security.",
    icon: sharedHostingIcon,
    link: "shared-hosting",
  },
  {
    title: "Dedicated Hosting",
    description:
      "Unlock unparalleled performance with dedicated hosting solutions tailored to your website's needs. Enjoy full control over server resources and configurations for optimal performance. Elevate your online presence with dedicated hosting, ensuring reliability and scalability.",
    icon: dedicatedHostingIcon,
    link: "dedicated-hosting",
  },
  {
    title: "Reseller Hosting",
    description:
    "Drive profitability with reseller hosting, offering scalable solutions tailored to client needs. Enjoy flexibility and control over hosting resources, maximizing business potential. Expand your services and revenue streams with reseller hosting, delivering reliable solutions to your clients.",
    icon: dedicatedHostingIcon,
    link: "reseller-hosting",
  },
];

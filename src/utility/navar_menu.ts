import hostingIcon1 from "@/assets/hostingDropDown/22.svg";
import hostingIcon2 from "@/assets/hostingDropDown/23.svg";
import hostingIcon3 from "@/assets/hostingDropDown/24.svg";
import hostingIcon4 from "@/assets/hostingDropDown/26.svg";
import hostingIcon5 from "@/assets/hostingDropDown/25.svg";
import hostingIcon6 from "@/assets/hostingDropDown/27.svg";
import hostingIcon7 from "@/assets/icons/cloud-data.png";
import hostingIcon8 from "@/assets/icons/vr.png";
import other1 from "@/assets/outherMegaMenu/01-1.svg";
import other2 from "@/assets/outherMegaMenu/08.svg";
import other3 from "@/assets/outherMegaMenu/16.svg";
import other4 from "@/assets/outherMegaMenu/21.svg";

const hostingMegaMenu: {
  name: string;
  tag: string;
  path: string;
  icon: string;
}[] = [
  {
    name: "Shared Hosting",
    tag: "Manage Shared Hosting",
    path: "shared-hosting",
    icon: hostingIcon1,
  },
  {
    name: "Dedicated Hosting",
    tag: "Hosting that gives you tools",
    path: "dedicated-hosting",
    icon: hostingIcon5,
  },
  {
    name: "Reseller Hosting",
    tag: "Manage Shared Hosting",
    path: "reseller-hosting",
    icon: hostingIcon3,
  },
  {
    name: "Vps Hosting",
    tag: "Dedicated resources",
    path: "vps-hosting",
    icon: hostingIcon4,
  },
  {
    name: "WordPress Hosting",
    tag: "WordPress Hosting speed",
    path: "wordPress-hosting",
    icon: hostingIcon2,
  },
  {
    name: "Cloud Hosting",
    tag: "Manage Cloud Hosting",
    path: "cloud-hosting",
    icon: hostingIcon6,
  },
  {
    name: "Dedicated Server",
    tag: "Your site, our dedication",
    path: "dedicated-hosting",
    icon: hostingIcon7,
  },
  {
    name: "Virtual Server",
    tag: "Dedicated. Virtual. Scalable Solutions",
    path: "virtual-server",
    icon: hostingIcon8,
  },
];
const othersMegaMenu: {
  name: string;
  tag: string;
  path: string;
  icon: string;
}[] = [
  {
    name: "About Us",
    tag: "Get Know About Leo Technology",
    path: "about-us",
    icon: other1,
  },
  {
    name: "Support",
    tag: "Provide detailed explain",
    path: "support",
    icon: other2,
  },
  {
    name: "Contact",
    tag: "Contact with Leo Technology",
    path: "contact",
    icon: other3,
  },
  {
    name: "Maintenance",
    tag: "We will be soon",
    path: "maintenance",
    icon: other4,
  },
];

const domainDropDown: { name: string; path: string }[] = [
  {
    name: "Domain Checker",
    path: "domain-checker",
  },
  {
    name: "Domain Transfer",
    path: "domain-transfer",
  },
  {
    name: "Domain Register",
    path: "domain-register",
  },
  {
    name: "Free Domain",
    path: "free-domain",
  },
  {
    name: "XYZ Domain",
    path: "xyz-domain",
  },
  {
    name: "WHOIS Lookup",
    path: "whoIs-lookup",
  },
];

const technologyDropDown: { name: string; path: string }[] = [
  {
    name: "Technology",
    path: "technology",
  },
  {
    name: "Data Center",
    path: "data-center",
  },
];
const HelpCenter: { name: string; path: string }[] = [
  {
    name: "FAQ",
    path: "faq",
  },
  {
    name: "Support",
    path: "support",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "Tutorials",
    path: "tutorials",
  },
  {
    name: "Knowledgebase",
    path: "Knowledgebase",
  },
];

export {
  hostingMegaMenu,
  othersMegaMenu,
  domainDropDown,
  technologyDropDown,
  HelpCenter,
};

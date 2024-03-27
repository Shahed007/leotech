import { StaticImageData } from "next/image";

export type HostingPlanData = {
  category: string;
  description: string;
  price: number;
  main_features: string[];
  isClicked?: boolean;
};

export type bannerSection = {
  list: string;
  tolTip?: string;
  tolTipId?: string;
};

export type timeLineDataType = {
  title: string;
  description: string;
  icon: StaticImageData;
};

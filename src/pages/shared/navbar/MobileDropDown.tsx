import Link from "next/link";
import React from "react";
import NavLinkIcon from "./NavLinkIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";

type DropDownProps = {
  title: string;
  menuNumber: number;
  handleDropDown?: any;
  open?: null | number;
  item: {
    name: string;
    path: string;
    tag: string | undefined;
    icon: any;
  }[];
};

const MobileDropDown: React.FC<DropDownProps> = ({
  title,
  menuNumber,
  item,
  handleDropDown,
  open,
}) => {
  const pathName = usePathname();
  const maxHeight = open === menuNumber ? `${item.length * 70}px` : "0px";
  return (
    <li className=" ">
      <div
        onClick={() => handleDropDown(menuNumber)}
        className="flex cursor-pointer justify-between items-center border-b border-gray-400 pb-1"
      >
        <Link href="#">{title}</Link>
        <NavLinkIcon />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{ maxHeight }}
      >
        <ul className="flex flex-col gap-3 py-4">
          {item.map((subItem, idx) => (
            <li key={idx}>
              <Link
                href={subItem.path}
                className={`flex items-center gap-2 ${
                  `/${subItem.path}` === pathName
                } ? 'border border-secondary_color shadow-sm p-1 rounded':''`}
              >
                <div className={`${subItem.icon ? "block" : "hidden"}`}>
                  <Image src={subItem.icon} alt={subItem.name} />
                </div>
                <div>
                  <h3 className="text-base font-medium">{subItem.name}</h3>
                  <p
                    className={`text-sm text-gray-200 ${
                      subItem.tag ? "block" : "hidden"
                    }`}
                  >
                    {subItem.tag}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MobileDropDown;

import Link from "next/link";
import React from "react";
import NavLinkIcon from "./NavLinkIcon";

type DropDownProps = {
  title: string;
  menuNumber: number;
  handleDropDown?: any;
  open?: null | number;
  item: {
    name: string;
    path: string;
  }[];
};

const MobileDropDown2: React.FC<DropDownProps> = ({
  title,
  menuNumber,
  item,
  handleDropDown,
  open,
}) => {
  const maxHeight = open === menuNumber ? `${item.length * 48}px` : "0px";
  return (
    <li className=" ">
      <div
        onClick={() => handleDropDown(menuNumber)}
        className="flex cursor-pointer justify-between items-center border-b border-gray-400 pb-1"
      >
        <button>{title}</button>
        <NavLinkIcon />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{ maxHeight }}
      >
        <ul className="flex flex-col gap-3 py-4">
          {item.map((subItem, idx) => (
            <li key={idx}>
              <Link href={subItem.path} className="flex items-center gap-2">
                <div>
                  <h3 className="text-base font-medium">{subItem.name}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default MobileDropDown2;

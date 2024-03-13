"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ text, path }: { text: string; path: string }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${pathName === path ? "active-link" : "nav-link"}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default NavLink;

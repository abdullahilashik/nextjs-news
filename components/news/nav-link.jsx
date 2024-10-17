"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, label }) => {
  const pathname = usePathname();

  const isActive = () => {
    if (href == pathname) return true;
    return pathname != "/" && href.startsWith(pathname);
  };
  
  return (
    <li>
      <Link href={href} className={isActive() ? "active" : undefined}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;

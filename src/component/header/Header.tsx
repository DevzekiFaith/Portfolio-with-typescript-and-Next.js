"use client";

import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

type NavLink = {
  name: string;
  path: string;
};

const Header: FC = () => {
  const pathname: string = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Project", path: "/project" },
  ];

  const isActive = (path: string): boolean => path === pathname;

  return (
    <div className={styles.mainBg}>
      <div className={styles.mainBg01}>
        <div>
          <Link href="/">
            <h1 className="uppercase text-slate-700 font-bold ml-[2rem]">
              Robert Garcia
            </h1>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-[1rem] p-[1rem] font-semibold mr-[2rem]">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={isActive(link.path) ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

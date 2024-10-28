import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Home,
  LucideIcon,
  BookOpen,
  Contact,
  CircleHelp,
  Moon,
} from "lucide-react";

interface NavListInterface {
  id: number;
  href: string;
  text: string;
  Icon?: LucideIcon;
}

const navList: NavListInterface[] = [
  { id: 0, href: "/home", text: "Home", Icon: Home },
  { id: 1, href: "/about", text: "About", Icon: BookOpen },
  { id: 2, href: "/contact", text: "Contact", Icon: Contact },
  { id: 3, href: "/faq", text: "FAQ", Icon: CircleHelp },
];
import { images } from "@/constants";
const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center text-3xl text-white font-bold bg-[rgba(0,0,0,0.2)] rounded px-2">
        <div>
          <Link href="/">
            <Image src={images.logo} alt="logo" width={40} />
          </Link>
        </div>
        <ul className="flex gap-20">
          {navList?.map((item) => {
            const { id, href, text, Icon } = item;
            return (
              <li
                key={id}
                className="flex justify-center items-center gap-2 group"
              >
                {Icon && <Icon className="group-hover:animate-bounce" />}
                <Link href={href} className="">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Moon />
        </div>
      </nav>
    </>
  );
};

export default Nav;
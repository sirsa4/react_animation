import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Home, LucideIcon, BookOpen, Contact, CircleHelp } from "lucide-react";

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
import { ModeToggle } from "./ModeToggle";
const Nav = () => {
  return (
    <>
      <nav className="sticky top-0 flex justify-between items-center text-3xl font-bold dark:bg-[rgba(0,0,0,0.2)] bg-white/70  rounded px-2">
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
                className="flex justify-center items-center gap-2 group bg-black:text-white"
              >
                {Icon && <Icon className="group-hover:animate-bounce" />}
                <Link href={href} className="">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center gap-2">
          <span className="text-sm">Light-dark</span>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
};

export default Nav;

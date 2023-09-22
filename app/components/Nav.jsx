import React from "react";
import Logo from "@/assets/getlinked.png";
import Image from "next/image";
import Link from "next/link";
function Nav() {
  return (
    <>
      <nav className="flex w-full justify-between items-center p-8 text-white">
        <div className="w-1/3">
          <Image src={Logo} placeholder="blur" className="w-[100px]" />
        </div>
        <div className="hidden gap-5  md:flex items-center justify-between p-2">
          <div className="text-white flex items-center justify-evenly p-2 gap-6">
            <Link href={"/"}>
              <p>Timelines</p>
            </Link>
            <Link href={"/"}>
              <p>Overview</p>
            </Link>
            <Link href={"/"}>
              <p>FAQs</p>
            </Link>
            <Link href={"/"}>
              <p>Contact</p>
            </Link>
          </div>
          <div className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <Link href={"/pages/register"}>
              <p>Register</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

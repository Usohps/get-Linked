"use client"
import React, { useState } from "react";
import Logo from "@/assets/getlinked.png";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
function Nav(props) {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav 
      style={{
        backgroundColor: props.backgroundColor
      }} className=" flex w-full fixed top-0 left-0 shadow-2xl z-[20] justify-between items-center p-8 text-white">
        <div className="w-1/3">
          <Image src={Logo} alt="logo" placeholder="blur" className="w-[100px]" />
        </div>

        <div
          className={" hidden gap-5  md:flex items-center justify-between p-2"}
        >
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
            <Link href={"/pages/contact"}>
              <p>Contact</p>
            </Link>
          </div>
          <div className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <Link href={"/pages/register"}>
              <p>Register</p>
            </Link>
          </div>
        </div>
        <div className="md:hidden z-10">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <AiOutlineClose size={24} className="text-white" />
            ) : (
              <RxHamburgerMenu size={24} className="text-white" />
            )}
          </button>
        </div>
        {navbar && (
          <div
            className={
              navbar
                ? " w-full h-full md:hidden flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm animation right-0 "
                : "md:hidden w-full h-full flex justify-center text-sm items-center fixed top-[0] backdrop-blur-sm  animation right-[100%] "
            }
          >
            <div className=" flex w-[300px] flex-col ease-in-out  justify-center items-center rounded-xl m-auto  shadow-2xl shadow-slate-900 bg-gradient-to-r from-blue-950 to-purple-900  font-bold">
              <ul className=" w-full  md:max-w-[300px] text-white h-[300px] flex flex-col justify-center items-center text-sm space-y-4">
                <li>
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    Timelines
                  </Link>
                </li>
                <li>
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setNavbar(!navbar)} href={"/pages/contact"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="w-[102px] text-sm text-center rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
                    <Link
                      onClick={() => setNavbar(!navbar)}
                      href={"/pages/register"}
                    >
                      <p>Register</p> 
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;

import React from "react";
import Image from "next/image";
import Logo from "@/assets/getlinked.png";
import Star from "@/assets/star (1).png"
import Star2 from "@/assets/sata gra.png"
import Star3 from "@/assets/star.png"
// import Link from "next/link";
import {FaXTwitter} from "react-icons/fa6"
import {TiSocialFacebook} from "react-icons/ti"
import {CiLocationOn} from "react-icons/ci";
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai"
function Footer() {
  return (
    <div className="bg-[#100B20] relative p-6 flex flex-col items-center justify-between">
      <div className="w-full space-y-6 gap-2 flex flex-col items-center justify-between md:flex-row">
        <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center p-4 w-full">
          <div className="">
            <Image src={Logo} alt="logo" className="p-4" />
            <Image src={Star} alt="star" className="absolute top-10 left-5 " />
            <p className="text-sm">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center p-4 gap-2">
            <div> Terms of Use</div>
            <div className=" md:border-l-2 pl-2"> Private Policy</div>
          </div>
        </div>
        <div className="md:w-1/3 text-center w-full text-sm">
          <p>Useful links</p>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="flex md:w-[70%]  md:pl-24 pl-32 m-auto text-center items-center justify-center">
            <p>Follow Us</p>
            <div className="flex gap-4 p-2 text-center  pl-2">
              <AiOutlineInstagram className="w-[20px]"/>
              <FaXTwitter/>
              <TiSocialFacebook/>
              <AiOutlineLinkedin/>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 space-y-4 text-center text-sm w-full">
          <p>Contact Us</p>
          <div className="flex gap-2 items-center justify-center">
          <FiPhoneCall />
            <p>+234 679 81819</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
          <CiLocationOn />
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className="w-full p-8 text-center">
      <Image src={Star2} alt="star" className="absolute w-[15px] md:bottom-28 bottom-[15%] left-[50%] " />
        <p>
          All right reserved @ getLinked Ltd. Designed and Developed by CozyDev
        </p>
      </div>
      <Image src={Star} alt="star" className="absolute bottom-28 right-[10%] " />
      <Image src={Star3} alt="star" className="absolute w-[10px] md:top-28 top-[52%] right-[30%] " />
    </div>
  );
}

export default Footer;

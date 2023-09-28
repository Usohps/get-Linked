import React from "react";
import Star from "@/assets/star pu.png";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
function ContactPage() {
  return (
    <div className="container  m-auto my-32">
      <div className=" flex items-center  p-6 justify-between">
        <Image src={Star} alt="star" />
        <Image src={Star} alt="star" />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="text-center">
          <div className="hidden p-4 md:block">
            <h1>Get In Touch</h1>
            <p>Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
            <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          </div>
          <div className="block ">
            <p>Share on</p>
            <div className="flex items-center justify-center gap-4 p-2 text-center  pl-2">
              <AiOutlineInstagram className="w-[20px]" />
              <FaXTwitter />
              <TiSocialFacebook />
              <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 ">
          <div className="md:hidden ">
            <h1>Questions or need assistance? Let us know about it</h1>
            <p>Email us below to any question related to our event</p>
          </div>
          <form className="p-4 ">
            <div className="w-full space-y-8 p-4">
              <div className="w-full space-y-8">
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className="rounded w-full p-2 bg-transparent border  text-black outline-none "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="rounded p-2 w-full bg-transparent border text-black outline-none "
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea className="outline-none rounded w-full h-[200px] bg-transparent border text-black"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
              Submit
            </button></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

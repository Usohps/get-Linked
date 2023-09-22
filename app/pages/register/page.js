import React from "react";
import Image from "next/image";
import Register_hero from "@/assets/register_hero.png";
import Boy_icon from "@/assets/boy.png";
import Girl_icon from "@/assets/girl.png";
function RegisterPage() {
  return (
    <div className="container m-auto flex md:flex-row flex-col text-white  justify-between">
      <div className=" md:w-1/2 w-full flex flex-col items-center justify-center">
        <Image src={Register_hero} className="w-[250px] md:w-[350px]" />
      </div>
      <div className="shadow-3xl ">
        <h1 className="text-4xl text-[#D434FE] font-semibold p-4">Register</h1>
        <div className="flex items-center p-6 border">
          <span className="">Be part of this movement</span>
          <div className=" border-b-[1.5px] border-[#D434FE] border-dashed flex items-center justify-center">
            <Image src={Girl_icon} />
            <Image src={Boy_icon} />
          </div>
        </div>
        <div>
          <h1>CREATE YOUR ACCOUNT</h1>
        </div>
        <form className="p-4  ">
          <div className="w-full border gap-3 p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Teams Name</label>
              </div>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className="rounded p-2 w-full lg:w-[250px] outline-none text-gray-900 "
              />
            </div>
            <div className="w-full">
              <div>
                <label>Phone</label>
              </div>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="rounded p-2 w-full lg:w-[250px] "
              />
            </div>
          </div>

          <div className="w-full border gap-3 p-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Teams Name</label>
              </div>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className="rounded p-2 w-full lg:w-[250px] "
              />
            </div>
            <div className="w-full">
              <div>
                <label>Phone</label>
              </div>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="rounded p-2 w-full lg:w-[250px] "
              />
            </div>
          </div>

          <div className="w-full border gap-3 p-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full">
              <div>
                <label>Teams Name</label>
              </div>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className="rounded p-2 w-full lg:w-[250px] "
              />
            </div>
            <div className="w-full">
              <div>
                <label>Phone</label>
              </div>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="rounded p-2 w-full lg:w-[250px] "
              />
            </div>
          </div>

          <p>Please review your registration details before submitting</p>
          <div className="flex items-center">
            <input type="checkbox" />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

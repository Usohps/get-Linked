import React from "react";
import Image from "next/image";
import Star from "@/assets/star (1).png";
import Trophy from "@/assets/trophy.png";
import Rewards from "@/assets/Rewards.png";
import SponsorsImg from "@/assets/Partner and sponsors section.png";
import Vector from "@/assets/Vectorbg.png";
import Padlockboy from "@/assets/padlockBoy.png";
function Reward() {
  return (
    <>
      <div>
        <div className=" container m-auto p-4 flex md:justify-between flex-col md:flex-row ">
          <div>
            <Image src={Star} alt="star" className="" />
          </div>
          <div className=" w-full text-center   relative md:max-w-[500px] md:m-auto p-4 ">
            <p>Prices and</p>
            <h1>Rewards</h1>
            <p>
              Highlight for the prices and rewards for the winners and
              participants
            </p>
          </div>
          {/* <Image src={Star} className="" /> */}
        </div>
        <div className=" w-full m-auto space-y-7 flex flex-col md:flex-row  justify-center items-center p-4">
          <Image
            src={Trophy}
            className="md:w-[370px] p-4 md:p-0 container z-30"
            placeholder="blur"
            alt="trophy"
          />
          <Image
            src={Rewards}
            className="md:w-[370px] container z-30"
            placeholder="blur"
            alt="rewards"
          />
        </div>
      </div>
      <section className="container m-auto relative text-center p-4 max-h-screen">
        <div className="max-w-[400px] m-auto">
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="container m-auto flex flex-col p-6 justify-center items-center">
          <Image
            src={SponsorsImg}
            className="md:w-[500px] container"
            placeholder="blur"
            alt="sponsor"
          />
        </div>
      </section>
      <section className=" flex items-center  space-y-9 gap-7 justify-between container m-auto flex-col-reverse md:flex-row">
        <div className="max-w-[500px]  m-auto space-y-6">
          <div className="p-4">
            <div className=" container my-5 m-auto">
              <h1>Privacy Policy and</h1>
              <h2>Terms</h2>
              <p>Last updated on September 12, 2023</p>
              <p>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div className="border-[4px] p-4 rounded-2xl border-purple-700">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[500px] relative p-4 flex items-center justify-center">
          <Image src={Vector} className="w-[400px]" alt="vector" />
          <Image
            src={Padlockboy}
            className="w-[300px] absolute top-[30%] left-[5%]"
            alt="padlockboy"
          />
        </div>
      </section>
    </>
  );
}

export default Reward;

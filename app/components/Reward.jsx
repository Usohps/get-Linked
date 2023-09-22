import React from "react";
import Image from "next/image";
import Star from "@/assets/star (1).png";
import Trophy from "@/assets/trophy.png";
import Rewards from "@/assets/Rewards.png";
import SponsorsImg from "@/assets/Partner and sponsors section.png"
function Reward() {
  return (
    <>
      <div>
        <div className=" container m-auto p-4 flex md:justify-center flex-col md:flex-row border">
          <div>
            <Image src={Star} className="" />
          </div>
          <div className=" md:max-w-[300px] m-auto text-center md:text-start border">
            <p>Prices and</p>
            <h1>Rewards</h1>
            <p>
              Highlight for the prices and rewards for the winners and
              participants
            </p>
          </div>
          {/* <Image src={Star} className="" /> */}
        </div>
        <div className=" w-full m-auto space-y-7 flex flex-col md:flex-row  justify-center items-center">
          <Image src={Trophy} className="w-[370px] z-50" placeholder="blur" />
          <Image src={Rewards} className="w-[370px] z-50" placeholder="blur" />
        </div>
      </div>
      <section className="container m-auto relative border max-h-screen">
        <div>
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        </div>
        <div className="container m-auto border flex flex-col p-6 justify-center items-center">
            <Image src={SponsorsImg} className="md:w-[500px] container" placeholder="blur"/>
        </div>
      </section>
    </>
  );
}

export default Reward;

import React from "react";
import Image from "next/image";
import Star from "@/assets/star pu.png"
function Timeline() {
  return (
    <div className=" container m-auto  space-y-1 py-12 pl-4 md:pl-0">
      <div className=" max-w-[500px] space-y-4 px-2 m-auto text-center my-12">
        <h2 className="text-white text-6xl font-extrabold">Timeline</h2>
        <p className="font-bold">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="relative  flex md:container flex-col md:flex-row md:items-center justify-center">
        <div className="flex">
          <div className="flex flex-row-reverse md:flex-row md:w-[400px] m-auto">
            <div className="space-y-4 p-8 relative">
            <Image src={Star} className="absolute top-0 left-[0] " />
              <h1>Hackathon Announcement</h1>
              <p className="py-4 ">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[4px] h-full"></div>
              <div className="text-center text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center justify-center">
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="  max-w-[400px] pl-6  md:p-8 absolute left-10 bottom-0 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
        </div>
      </div>

      <div className="relative space-y-5 flex md:container flex-col md:flex-row-reverse md:items-center justify-center">
        <div className="flex">
          <div className="flex  flex-row-reverse  md:w-[400px] lg:w-[470px] m-auto">
            <div className="space-y-4 p-8">
              <h1>Teams Registration begins</h1>
              <p className="py-4 ">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[4px] h-full"></div>
              <div className="text-center text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center justify-center">
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[400px] pl-6 md:p-8 absolute left-10 bottom-2 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
        </div>
      </div>

      <div className="relative space-y-5 flex md:container flex-col md:flex-row-reverse md:items-center justify-center">
        <div className="flex">
          <div className="flex  flex-row-reverse  md:w-[400px] lg:w-[470px] m-auto">
            <div className="space-y-4 p-8">
              <h1>Teams Registration Ends</h1>
              <p className="py-4 ">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[4px] h-full"></div>
              <div className="text-center text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center justify-center">
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[400px] pl-6 md:p-8 absolute left-10 bottom-2 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
          <Image src={Star} alt="star" className="absolute top-0 right-[0] md:left-0 " />
        </div>
      </div>

      <div className="relative space-y-5 flex md:container flex-col md:flex-row-reverse md:items-center justify-center">
        <div className="flex">
          <div className="flex  flex-row-reverse  md:w-[400px] lg:w-[470px] m-auto">
            <div className="space-y-4 p-8">
              <h1>Announcement of the accepted teams and ideas</h1>
              <p className="py-4 ">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[4px] h-full"></div>
              <div className="text-center text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center justify-center">
                <p>4</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[400px] pl-6 md:p-8 absolute left-10 bottom-2 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
        </div>
      </div>

      <div className="relative flex md:container flex-col md:flex-row md:items-center justify-center">
        <div className="flex">
          <div className="flex flex-row-reverse md:flex-row md:w-[400px] m-auto">
            <div className=" p-8">
              <h1>Getlinked Hackathon 1.0 Offically Begins</h1>
              <p className="py-4 ">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" w-[4px] bg-gradient-to-r from-[#D434FE] to-[#903AFF] h-full"></div>
              <div className="text-center text-white w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center justify-center">
                <p>5</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[400px] pl-6 md:p-8 absolute left-10 bottom-2 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
        </div>
      </div>

      <div className="relative space-y-5 flex md:container flex-col md:flex-row-reverse md:items-center justify-center">
        <div className="flex">
          <div className="flex  flex-row-reverse  md:w-[400px] lg:w-[470px] m-auto">
            <div className=" space-y-4 p-8">
              <h1>Demo Day</h1>
              <p className="py-4 ">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <div className=" w-[4px] h-full bg-gradient-to-r from-[#D434FE] to-[#903AFF]"></div>
              <div className="text-center w-8 h-8 rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex items-center text-white justify-center">
                <p>6</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[400px] pl-6 md:p-8 absolute  left-10 bottom-2 md:bottom-0 md:left-0 md:relative">
          <h1>November 18, 2023</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Timeline;

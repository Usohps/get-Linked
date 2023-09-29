import React from "react";
import QuestionHero from "@/assets/question_man.png";
import QuestionImg2 from "@/assets/questionImg2.png";
import Questionmark1 from "@/assets/_.png";
import HeroImg from "@/assets/man-wearing-smart-glasses.png";
import Lady from "@/assets/ladysitting.png";
import Image from "next/image";
import Lightbulb from "@/assets/The big idea.png";
import Image1 from "@/assets/Image 1.png";
import Vector1 from "@/assets/Vector 4.png";
import Title from "@/assets/Title.png";
import Countdown from "@/assets/Countdown time.png";
import Star from "@/assets/star pu.png"
function QuestionSection() {
  return (
    <>
      <div className="w-full z-10 md:text-end text-center py-32 italic p-12 text-xl  relative">
        <p className="py-2">Igniting a Revolution in HR Innovation</p>
        <Image
          src={Vector1}
          placeholder="blur"
          className="absolute right-[100px] md:right-12 bottom-[32]"
          alt="vector"
        />
        <Image src={Star} alt="star" className=" absolute md:top-50 md:left-10 left-52 bottom-20 " />
      </div>
      <section className=" flex items-center relative space-y-9 gap-7 justify-between container m-auto flex-col md:flex-row">
        <div className="max-w-[500px] m-auto flex-col flex items-center md:block space-y-6">
          <div className="p-4">
            <Image src={Title} alt="title" placeholder="blur" />
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            {/* <Link href={"/pages/register"}> */}
            <p>Read More</p>
            {/* </Link> */}
          </div>
          <div className="w-[200px] md:w-full m-auto">
            <Image src={Countdown} alt="countdown" />
          </div>
        </div>

        <div className="max-w-[500px] relative p-4 flex items-center justify-center">
          <Image src={HeroImg} alt="heroimg" className="w-full" />
          <Image src={Image1} alt="image1" className="w-full absolute right-0 top-4" />
        </div>
        <Image src={Star} alt="star" className="absolute top-0 left-[50%] " />
        <Image src={Star} alt="star" className="absolute bottom-[65%] right-[20%] md:bottom-20 md:left-[50%]  " />
      </section>
      <section className=" flex items-center space-y-9 gap-7 justify-between container m-auto flex-col-reverse md:flex-row">
        <div className="max-w-[500px] relative p-4 flex items-center justify-center">
          <Image src={Lightbulb} alt="lightbulb" placeholder="blur" className="w-full" />
          <Image src={Star} alt="star" className="absolute top-[40%] left-5 " />
        </div>
        <div className="max-w-[500px] m-auto space-y-6">
          <div className="p-4 relative">
            <div className=" container my-5 m-auto">
              <h2>Rules and</h2>
              <h1>Guidelines</h1>
            </div>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you are a
              coding genius, a design maverick, or a concept wizard, you all have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that is what we are
              all about!
            </p>
            <Image src={Star} alt="star" className="absolute top-[40%] right-0 " />
          </div>
        </div>
      </section>
      <section className=" flex items-center  space-y-9 gap-7 justify-between container m-auto flex-col-reverse md:flex-row">
        <div className="max-w-[500px] m-auto space-y-6">
          <div className="p-4">
            <div className="container my-5 m-auto">
              <h2>Rules and</h2>
              <h1>Guidelines</h1>
            </div>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you are a
              coding genius, a design maverick, or a concept wizard, you all have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that is what we are
              all about!
            </p>
          </div>
        </div>

        <div className="max-w-[500px] p-4 flex items-center justify-center relative">
          <Image src={Lady} alt="lady" className="w-full" />
        </div>
      </section>
      <div className="flex items-center  space-y-9 gap-7 justify-between container m-auto flex-col md:flex-row">
        <div className="max-w-[400px] pt-24 flex items-center justify-center relative">
          <Image src={QuestionImg2} alt="questionimg" placeholder="blur" className="w-full" />
        </div>
        <div className=" w-full md:w-1/2">
          <div className=" container p-4 my-5 m-auto">
            <h2>Judging Criteria</h2>
            <h1>Key attributes</h1>
          </div>
          <div className="max-w-[450px] m-auto text-center md:text-left p-2 space-y-6">
            <div className="">
              <p>
                <span>Innovation and Creativity</span>: Evaluate the uniqueness
                and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative
                features.
              </p>
            </div>
            <div className="">
              <p>
                <span>Functionality</span>: Assess how well the solution works.
                Does it perform its intended functions effectively and without
                major issues? Judges would consider the completeness and
                robustness of the solution.
              </p>
            </div>
            <div className="">
              <p>
                <span>Impact and Relevance</span>: Determine the potential
                impact of the solution in the real world. Does it address a
                significant problem, and is it relevant to the target audience?
                Judges would assess the potential social, economic, or
                environmental benefits.
              </p>
            </div>
            <div className="">
              <p>
                <span>Technical Complexity</span>: Evaluate the technical
                sophistication of the solution. Judges would consider the
                complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </p>
            </div>
            <div className="">
              <span>Adherence to Hackathon Rules</span>: <p>Judges will Ensure that
              the team adhered to the rules and guidelines of the hackathon,
              including deadlines, use of specific technologies or APIs, and any
              other competition-specific requirements.</p> 
            </div>
            <div className="w-[172px] text-center p-2 rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF] m-auto md:m-0">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full text-center  relative md:max-w-[500px] md:m-auto   p-4">
          <Image src={Star} alt="star" className="absolute top-0 left-10 " />
            <h2>Partners and Sponsors</h2>
            <p>
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
      <div className="flex items-center space-y-9 gap-7 justify-between container m-auto flex-col md:flex-row">
        <div className=" w-full md:w-1/2 p-2">
          
          <div className="max-w-[450px] m-auto space-y-6">
            <div className="border-b-2 border-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
            <div className="border-b-2 border-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
            <div className="border-b-2 border-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
            <div className=" border-b-2 border-b-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
            <div className="border-b-2 border-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
            <div className="border-b-2 border-[#D434FE]">
              <p>Can I work on a project I started before the hackathon?</p>
            </div>
          </div>
        </div>
        <div className="max-w-[400px] pt-24 flex items-center justify-center relative">
          <Image src={QuestionHero}  placeholder="blur" alt="questionhero" className="w-full" />
          <Image
            src={Questionmark1}
            placeholder="blur"
            className="w-[50px] h-[70px] top-[0] left-[] absolute"
            alt="questionmark"
          />
          <Image
            src={Questionmark1}
            placeholder="blur"
            className="w-[50px] h-[70px] top-[0] left-[] absolute"
            alt="questionmark"
          />
          <Image
            src={Questionmark1}
            placeholder="blur"
            className="w-[30px] h-[50px] top-[55px] left-[25%] absolute"
            alt="questionmark"
          />
          <Image
            src={Questionmark1}
            placeholder="blur"
            className="w-[30px] h-[50px] top-[50px] right-[25%] absolute"
            alt="questionmark"
          />
          <Image src={Star} alt="star" className="absolute top-10 left-[35%] " />
        <Image src={Star} alt="star" className="absolute top-10 right-[35%] " />
        <Image src={Star} alt="star" className="absolute bottom-0 right-[50%] " />
        <Image src={Star} alt="star" className="absolute bottom-[50%] left-[0] " />
        </div>
        
      </div>
    </>
  );
}

export default QuestionSection;

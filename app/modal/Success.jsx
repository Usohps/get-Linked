import Link from "next/link";
import Image from "next/image";
import SuccessIcon from "@/assets/congratulation.png";
function Success() {
  return (
    <div className=" w-full h-full md:hidden flex justify-center fixed top-[0] backdrop-blur-sm animation  left-0 from-transparent to-[#253D62]">
      <div className="flex flex-col ease-in-out translate-x-10 justify-center items-center m-auto bg-transparent h-[400px] font-bold">
        <div className="w-[350px] backdrop-blur-2xl  bg-gradient-to-r from-blue-950 to-purple-900 shadow-slate-900 shadow-2xl p-2 text-white h-[400px] m-auto flex flex-col justify-center items-center text-xl space-y-4 rounded-lg">
          <Image src={SuccessIcon} alt="success_img" className="w-[150px]" />
          <div className="text-sm text-center">
            <p>Congratulations you have successfully Registered!</p>
            <p>
              Yes, it was easy and you did it! check your mail box for next
              step😃
            </p>
          </div>
          <div className="w-[100px] text-center text-sm rounded font-semibold bg-gradient-to-r from-[#D434FE] to-[#903AFF]">
            <Link href={"/register"}>
              <p>Back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;

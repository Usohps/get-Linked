
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Reward from './components/Reward'
import purpleblurbg from "@/assets/Purple-Lens-Flare-PNG (1).png"
import Image from 'next/image'
import QuestionSection from './components/QuestionSection'
// import rewardblur from "@/assets/rewardblur.png"
export default function Home() {
  return (
   <>
    <main className="relative border">
    {/* <Nav handlemenu={handleShowMenu}/> */}
      <QuestionSection/>
      <Timeline/>
      <Reward/>
      <Footer/>
      <Image src={purpleblurbg} alt='bg' className="w-[300px] absolute top-[5%] md:rounded-none rounded-full right-[0] md:hidden"/>
        <Image src={purpleblurbg} alt='bg' className=" max-w-[300px] absolute rotate-45 top-[0] left-0"/>
        {/* <Image src={purpleblurbg} className="absolute rotate-40 bottom-[0] right-0"/> */}
        {/* <Image src={rewardblur} className=' w-[500px]  md:top-[65%]  left-[10%] absolute'/> */}
        {/* <Image src={rewardblur} className=' w-[500px] hidden   md:bottom-[5%] right-0 md:absolute'/> */}
    </main>
   </>
    
  )
}

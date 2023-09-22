import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Reward from './components/Reward'
import purpleblurbg from "@/assets/Purple-Lens-Flare-PNG (1).png"
import Image from 'next/image'
import rewardblur from "@/assets/rewardblur.png"
export default function Home() {
  return (
    <main className="relative border">
      <Timeline/>
      <Reward/>
      <Footer/>
      <Image src={purpleblurbg} className="w-[300px] absolute bottom-[5%] md:rounded-none rounded-full right-[0]"/>
        {/* <Image src={purpleblurbg} className="absolute bottom-[0] left-0"/> */}
        <Image src={rewardblur} className=' w-[500px]  md:top-[65%] top-[50%] left-[10%] absolute'/>
        <Image src={rewardblur} className=' w-[500px]  md:top-[65%] top-[50%] right-0 absolute'/>
    </main>
  )
}

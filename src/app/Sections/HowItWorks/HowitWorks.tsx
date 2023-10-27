import GradientText from "@/app/Components/GradientText/GradientText";
import Image from "next/image";

export default function HowitWorks() {
  return (
    <div className="h-[900px] general">
      <div className="h-full container mx-auto">
         <div className="flex justify-center self-center gap-28 h-full items-center">
           <div className="flex flex-col gap-8">
             <GradientText text={"Fully Immersive game"} />
            <div className='flex flex-col'>
                <div className="w-[433px]">
                    <h2 className="font-[600] text-[56px] leading-[80.92px] text-white">HOW IT WORKS</h2>
                </div>

                <div className='w-[580px]'>
                    <h2 className="font-400 text-[24px] leading-36px text-white">
                    Players are presented with a fun and compelling gaming experience in which they are able to pursue whatever paths of development and action they want. Player's goals will not always align with each other, which is something that will have to factor in players' strategies.
                    </h2>
                </div>
            Gra</div>
           </div>

           <div className="relative">
             <Image 
             alt={"#"}
             src={"/Unknown-6.png"}
             width={500}
             height={500}
             />
            <div className="absolute  top-96  -left-24">
             <Image 
              alt={"#"}
              src={"/Frame_7 2.png"}
              width={359}
              height={138}
             />
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

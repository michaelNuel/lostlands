import GradientText from "@/app/Components/GradientText/GradientText";
import Image from "next/image";


export default function UniqueOffers() {
  return (
    <div className="h-[900px] general">
      <div className="h-full container mx-auto">
        <div className="flex justify-center self-center gap-48 h-full items-center">
           <div className="relative">
              <Image 
               alt={"#"}
               src={"/unimage.png"}
               width={500}
               height={500}
              />

              <div className="absolute top-14 -right-20">
                <Image 
                 alt={"#"}
                 src={"/side.png "}
                 width={367}
                 height={317}
                />
              </div>
           </div>

           <div className="flex flex-col gap-8">
              <GradientText text={"Unique Offerings"} />

              <div className="w-[580px]">
                <h2 className="font-[600] text-[56px] leading-[80.92px] text-white">
                    BETTER EARNINGS FOR PLAYERS
                </h2>
              </div>

              <div className='w-[580px] flex flex-col gap-4'>
                <h2 className="font-[400] text-white text-[24px] leading-[36px]">
                Thanks to the technological underpinnings of the game, the results of actions taken have real economic consequences.
                </h2>
                <h2  className="font-[400] text-white text-[24px] leading-[36px]">
                Rather than the play-to-earn model that most blockchain games are built upon,<span id="Lots of Lands is built on a play-and-earn model," className='span'>Lots of Lands is built on a play-and-earn model,</span>  where neither aspect takes precedence over the other. 
                </h2>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

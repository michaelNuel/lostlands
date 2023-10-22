import Image from "next/image";
import CarouselImg from "./CarouselImg";

export default function Moreinfo() {
    const itemsImg = [
     {  
        id:"1",
        images:"/img1.png"
      },
      {
        id:"2",
        images:"/image.png"
      },
      {  
        id:"3",
        images:"/img1.png"
      },
      {
        id:"4",
        images:"/image.png"
      }
    ]
  return (
    <div className="h-[1110px]">
      <div className="h-full conatiner mx-auto">
        <div className="flex justify-between gap-11 h-full items-center">
            <div className="flex flex-col gap-8 ml-12">
                <div>
                <h2 className="text-[#00B3FC]">
                    Abundant Land Supply
               </h2>
                </div>

                <div className="w-[600px]">
                    <h2 className="font-[600] text-[48px]">
                    1.9 MILLIION UNIQUE PLOTS OF VIRTUAL LAND
                    </h2>
                </div>

                <div className="w-[600px]">
                    <h2 className="font-[400] text-[24px] leading=[28.8px]">
                    Lots of Land is a virtual world where users can buy, sell, collect, and curate over 64 billion unique plots of virtual land.
                    The Lots of land virtual real estate platform is mapped over the entire surface of the globe,
                    </h2>
                </div>

                <div className="overflow-x-scroll">
                  <div className="flex gap-6 w-[140%]">
                    <CarouselImg items={itemsImg} />
                  </div>
                </div>
            </div>

            <div>
                <Image 
                 alt={"#"}
                 src={"/map vector.png"}
                 width={773.76}
                 height={760}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

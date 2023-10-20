import Image from "next/image";
import Link from "next/link";

export default function Heropag() {
  return (
    <div className="hero h-[900px]">
      <div className="h-full container mx-auto">
         <div className=" h-full flex flex-col gap-5 justify-center items-center ">
              <div className="w-3/4 ">
                <h1 className=" gradient-text leading-[96px]  text-center text-7xl font-bold ">YOUR PROPERTY IN THE METAVERSE</h1>
              </div> 
              <div className="w-[700px]">
                <p className=" text-white leading-[36px] text-center text-[24px] font-normal">Have a digital version of the real world where you complete conquests, meet people and form guilds</p>
              </div>

              <div className="w-[44px] h-[44px] border flex justify-center items-center rounded-full ">
                <Image 
                 alt={"#"}
                 src={"/play.svg"}
                 height={30}
                 width={30}
                />
              </div>

              <div>
                  <Link className="text-white" href={"#"}>Watch Video</Link>
                </div>
         </div>
      </div>
    </div>
    
  )
}

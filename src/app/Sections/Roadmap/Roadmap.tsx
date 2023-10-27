import Image from "next/image"
import Roadmaprow1 from "./Roadmaprow1"
import Roadmaprow2 from "./Roadmaprow2"

export default function Roadmap() {
  const row1= [
    {
      id: "1",
      heading:"Q1 2021",
      task1:"Release of Markets, Swap, Pools, Bonds, & Farm products (Alpha)",
      task2:"Launch of ambassador program"
    },
    {
      id:"2",
      heading: "Q3 2021",
      task1:"Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      task2:"Launch of ambassador program"
    }
  ]

  const row2= [
    {
      id: "1",
      heading:"Q2 2021",
      task1:"Release of Markets, Swap, Pools, Bonds, & Farm products (Alpha)",
      task2:"Launch of ambassador program"
    },
    {
      id:"2",
      heading: "Q4 2021",
      task1:"Release of Market, Swap, Pools, Bonds, & Farm products (Alpha)",
      task2:"Launch of ambassador program"
    }
  ]
  return (
    <div className='roadmap h-[900px] general '>
      <div className="h-full container mx-auto">
        <div className="flex  align-middle self-center flex-col h-full">
           <div className="grid self-center place-items-center w-[515px]">
             <h2 className="  gradient-text font-[600] text-[56px]">OUR ROADMAP</h2>
           </div>

           <div className="mt-10 flex justify-evenly items-center">
            <div>
              <Roadmaprow1 data={row1} />
            </div>

            <div className="bg-gradient-to-t from-[#000329] from-0% via-[#081F51] via-100% to-[#000329] to-0% h-[800px]  flex justify-center items-center self-center">
              <Image 
               alt={"#"}
               src={"/01-train-dark 1.png"}
               height={800}
               width={24}
              />
            </div>

            <div>
             <Roadmaprow2 data={row2} />
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

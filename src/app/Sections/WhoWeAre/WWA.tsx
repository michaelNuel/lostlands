import Image from 'next/image'
import React from 'react'

export default function WWA() {
  return (
    <div className="wwa h-[900px] " >
      <div className="h-full container mx-auto">
         <div className='flex  gap-20 h-full'>
           <div className='w-[580px] flex flex-col gap-9'>
              <div>
                <Image 
                alt={"#"}
                src={"/Unknown1.png"}
                width={500}
                height={200}
                />
              </div>
              <div>
                <Image 
                alt={"#"}
                src={"/Unknown2.png"}
                width={500}
                height={200}
                />
              </div>
              <div>
                <Image 
                alt={"#"}
                src={"/Unknown3.png"}
                width={500}
                height={200}
                />
              </div>
           </div>
           <div className='flex flex-col mt-11 align-middle gap-7'>
             <div>
                <p className='gradient-text text-[24px] leading-[32px] font-[600]'>Fully Immersive game</p>
             </div>

             <div>
                <h2 className='text-white text-[48px] font-[600] leading-[64px]'>WHO WE ARE</h2>
             </div>

             <div className='w-[580px]'>
                <p className='font-[400] text-white text-[24px] leading-[32px]'>
                    Lots of Lands is an immersive NFT-based game that is set in what we call meta-earth, a digital version of the real-world map. In this meta-reality players accumulate resources, territories and assets while interacting and building governance and business structures with each other. At its heart, Lots of Lands is all about freedom and autonomy.
               </p>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

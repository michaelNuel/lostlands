import Image from 'next/image'
import React from 'react'
import Navlistlink from './Navlistlink'

export default function Navbar() {
    const links = [
        {
            id:"1",
            linkText:"About"
        },
        {
            id:"2",
            linkText:"Roadmap"
        },
        {
            id:"3",
            linkText:"Gameplay"
        },
        {
            id:"4",
            linkText:"Team"
        }
    ]
  return (
    <div className='bg-violet-950'>
      <div className="container mx-auto">
       <div className='flex flex-row'>
         <div>
            <Image
             alt='#'
             width={122.52}
             height={40}
             src={"/bg-01 3.png"}
            />
         </div>

         <div className='bg-black'>
             <Navlistlink linkType={links}  />
         </div>

         <div>
            <button className='btn text-red-950'>
                connect wallet
            </button>
         </div>
       </div>
      </div>
    </div>
  )
}

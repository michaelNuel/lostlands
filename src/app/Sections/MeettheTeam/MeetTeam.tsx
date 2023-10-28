import GradientBold from '@/app/Components/GradientText/GradientBold'
import React from 'react'
import Team from './Team'

export default function MeetTeam() {
    const team = [
        {
            id:"1",
            img:"/bearded dude.png",
            linkldn:"/Social icon.png",
            name:"Savannah Ngu",
            role:"Founder & CEO"
        },

        {
            id:"2",
            img:"/bearded dude.png",
            linkldn:"/Social icon.png",
            name:"Kathryn Murphy",
            role:"Operation & Support"
        },

        {
            id:"1",
            img:"/hot black chick.png",
            linkldn:"/Social icon.png",
            name:"Evelyn Edwards",
            role:"Creative Director"
        },

        {
            id:"1",
            img:"/hotter black chick.png",
            linkldn:"/Social icon.png",
            name:"Darlene Robert",
            role:"CTO"
        },
    ]
  return (
    <div className='h-[900px] general pt-14'>
      <div className='container mx-auto h-full'>
        <div className='flex  align-middle gap-10 justify-center self-center flex-col h-full'>
          <div className="grid self-center place-items-center w-[515px]">
             <GradientBold bold='MEET THE TEAM' />
          </div>

          <div className='flex flex-row justify-center items-center self-center gap-5'>
            <Team data={team} />
          </div>
        </div>
      </div>
    </div>
  )
}

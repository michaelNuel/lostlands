'use client'

import {CaretDown, CaretUp } from "phosphor-react"
import { useState } from "react"

type AnswersProps = {
    data: {
        id: string 
        question: string 
        answer: string
    }[]
}

export default function Answers(props:AnswersProps) {
    const [isExpanded, setIsExpanded] = useState(false)
  return (
     <>
      {props.data.map(item => {
        return (
            <div key={item.id} className="flex justify-between items-center">
               <div>
                 <h2 className="text-white" >{item.question}</h2>
               </div>

               <div>
                 <button onClick={() => setIsExpanded (!isExpanded)}  className=" w-full ">
                    {isExpanded && <CaretUp size={16} color="white"/>}
                    {!isExpanded && <CaretDown size={16} color="white" /> }
                 </button>
                 {
                    isExpanded && 
                    <div >
                        <h2 className="text-white">{item.answer}</h2>
                    </div>
                 }
               </div>
            </div>
        )
      })}
     </> 
  )
}

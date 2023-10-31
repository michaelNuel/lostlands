import GradientBold from "@/app/Components/GradientText/GradientBold";
import Answers from "./Answers";


export default function FAQs() {
    const questions =[
        {
            id:"1",
            question:"How do you play this game",
            answer:"read the guidlines"
        },
        {
            id:"2",
            question:"my meta mask account isnt connecting",
            answer:"will direct you to tech support"
        },
        {
            id:"3",
            question: "I cant join the discord Channel",
            answer:"text github tech support"
        },
        {
            id:"4",
            question:"how can i create an account",
            answer:"i dont know"
        }
    ]
  return (
    <div className="h-[600px] general">
       <div className="container mx-auto h-full">
         <div className="flex  align-middle gap-10 justify-center self-center flex-col h-full">
          <div className="grid self-center place-items-center w-[1015px]">
            <GradientBold bold="FREQUENTLY ASKED QUESTIONS" />
          </div>

            <div>
               <Answers data={questions} />
            </div>
         </div>
       </div>
    </div>
  )
}

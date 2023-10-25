type GradientTextProps ={
    text: string
}

export default function GradientText(props:GradientTextProps) {
  return (
    <div>
    <h2 className='gradient-tex text-[24px] leading-[32px] font-[600]'>{props.text}</h2>
   </div>
  )
}

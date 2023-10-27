type GradientBoldProps ={
    bold: string
}

export default function GradientBold(props:GradientBoldProps) {
  return (
    <div>
       <h2 className="  gradient-text font-[600] text-[56px]">{props.bold}</h2>
    </div>
  )
}

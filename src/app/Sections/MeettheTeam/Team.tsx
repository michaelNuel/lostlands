import Image from "next/image"

type TeamProps = {
    data:{
        id:string
        img:string
        linkldn: string
        name: string
        role: string
    }[]
}

export default function Team(props:TeamProps) {
  return (
    <>
      {props.data.map(item => {
        return(
            <div key={item.id} className="flex flex-col gap-5">
                <div>
                    <Image 
                     alt="#"
                     src={item.img}
                     height={320}
                     width={280}
                    />
                </div>

                <div className="flex justify-between items-center w-[280px]">
                   <div>
                      <h2 className="text-[30px] font-[600] leading-[38px] text-white">{item.name}</h2>
                   </div>
                  <div>
                    <Image 
                     alt={"#"}
                     src={item.linkldn}
                     width={24}
                     height={24}
                    />
                  </div>
                </div>

                <div className="w-[280px]">
                    <h2 className="font-[400] text-[16px] leading-[24px] text-white">{item.role}</h2>
                </div>
            </div>
        )
      })}
    </>
  )
}

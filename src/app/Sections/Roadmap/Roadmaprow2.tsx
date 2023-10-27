type  Roadmaprow2Prop = {
    data : {
        id: string
        heading: string
        task1: string
        task2: string
    }[]
}

export default function Roadmaprow2(props:Roadmaprow2Prop) {
  return (
    <div className="flex flex-col gap-8">
      {
        props.data.map(item => {
            return (
                <div key={item.id} className="w-[500px] h-[360px] border-[10px] rounded-lg border-[#3961B7] bg-[#081F51]">
                    <div className="flex justify-center flex-col">
                        <div className="w-[190px] ml-4 mt-7 font-[600] text-[40px] leading-[60px]" >
                            <h2 className="text-white font-[600] text-[40px] leading-[60px] font-mono">{item.heading}</h2>
                        </div>
                        <div className="w-[418px] ml-10" >
                          <ul className="text-white list-none">
                            <div className="flex fledx-row gap-5 items-center">
                                <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                            <li>{item.task1}</li>
                            </div>

                            <div className="flex fledx-row gap-5 items-center">
                            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                               <li>{item.task2}</li>
                            </div>
                          </ul>
                        </div>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

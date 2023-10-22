import Image from "next/image"

type CarouselImgProps = {
  items:{
    id: string
    images: string
  }[]
}

export default function CarouselImg(props:CarouselImgProps) {
  return (
    <>
      {props.items.map(data => {
        return (
            <div key={data.id}>
                <Image 
                 alt={"#"}
                 src={data.images}
                 width={240}
                 height={200}
                />
            </div>
        )
      })}
    </>
  )
}

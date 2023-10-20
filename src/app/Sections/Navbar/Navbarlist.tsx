type NavbarlistProps = {
    data:{
        id: string 
        links:string
    }[]
}

export default function Navbarlist(props:NavbarlistProps) {
  return (
    <ul className="flex justify-around gap-7">
       {props.data.map(item => {
        return (
          <li className="text-white text-base" key={item.id}>{item.links}</li>
        )
       })}
    </ul>
  )
}

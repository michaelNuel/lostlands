type NavbarlistProps = {
    data:{
        id: string 
        links:string
    }[]
}

export default function Navbarlist(props:NavbarlistProps) {
  return (
    <ul className="flex justify-around">
       {props.data.map(item => {
        return (
          <li key={item.id}>{item.links}</li>
        )
       })}
    </ul>
  )
}

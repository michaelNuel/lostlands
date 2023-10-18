type NavlistlinkProps={
    linkType: {
        id:string 
        linkText: string
    }[]
}
export default function Navlistlink(props:NavlistlinkProps) {
  return (
    <ul className='flex bg-slate-600'>
     {props.linkType.map(items => {
        return(
            <li className="text-xs text-red-900" key={items.id}>
               {items.linkText}
            </li>
        )
     })} 
    </ul>
  )
}

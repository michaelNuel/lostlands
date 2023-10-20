import Image from "next/image";
import Navbarlist from "./Navbarlist";

export default function Navbar() {
   const navLink = [
    {
        id:"1",
        links:"About"
    },
    {
        id:"2",
        links:"Roadmap"
    },
    {
        id:"3",
        links:"Gameplay"
    },
    {
        id:"4",
        links:"Team"
    }
   ]

  return (
    <div className="bg-blue-950 border-transparent">
       <div className="container mx-auto">
         <div className="flex justify-between gap-3 py-3">
            <div>
                <Image 
                  alt={"#"}
                  width={122.52}
                  height={100}
                  src={"/bg-01 3.png"}
                />
            </div>

            <div>
                <Navbarlist data={navLink} />
            </div>

            <div>
                <button className="btn">
                  <h2 className="text-white">Connect wallet</h2>
                </button>
            </div>
         </div>
       </div>
    </div>
  )
}

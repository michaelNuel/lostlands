import Heropag from "./Sections/Heropage/Heropag";
import Navbar from "./Sections/Navbar/Navbar";
import WWA from "./Sections/WhoWeAre/WWA";


export default function Home() {
  return (
    <main className="overflow-hidden">
       <Navbar />
       <Heropag />
       <WWA />
    </main>
  )
}

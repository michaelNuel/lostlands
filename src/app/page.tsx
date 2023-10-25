import Heropag from "./Sections/Heropage/Heropag";
import HowitWorks from "./Sections/HowItWorks/HowitWorks";
import Moreinfo from "./Sections/MoreInfo/Moreinfo";
import Navbar from "./Sections/Navbar/Navbar";
import UniqueOffers from "./Sections/UniqueOffers/UniqueOffers";
import WWA from "./Sections/WhoWeAre/WWA";


export default function Home() {
  return (
    <main className="overflow-hidden">
       <Navbar />
       <Heropag />
       <WWA />
       <Moreinfo />
       <HowitWorks />
       <UniqueOffers />
    </main>
  )
}

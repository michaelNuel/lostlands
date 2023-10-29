import FAQs from "./Sections/FAQs/FAQs";
import Heropag from "./Sections/Heropage/Heropag";
import HowitWorks from "./Sections/HowItWorks/HowitWorks";
import MeetTeam from "./Sections/MeettheTeam/MeetTeam";
import Moreinfo from "./Sections/MoreInfo/Moreinfo";
import Navbar from "./Sections/Navbar/Navbar";
import Roadmap from "./Sections/Roadmap/Roadmap";
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
       <Roadmap />
       <MeetTeam />
       <FAQs />
    </main>
  )
}

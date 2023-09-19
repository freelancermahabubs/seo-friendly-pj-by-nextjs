import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <div>
      <Hero />
      <Stats/>
      <HowWorks/>
      <FeaturedProject/>
      <Contacts/>
      <Brands/>
    </div>
  );
}

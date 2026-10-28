import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Rooms from "@/components/Rooms/Rooms";
import Services from "@/components/Services/Services";
import Story from "@/components/Story/Story";
import VideoBanner from "@/components/VideoBanner/VideoBanner";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Services/>
      <Story/>
      <VideoBanner/>
    </>
  );
}

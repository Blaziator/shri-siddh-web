import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Rooms from "@/components/Rooms/Rooms";
import Services from "@/components/Services/Services";
import Story from "@/components/Story/Story";
import VideoBanner from "@/components/VideoBanner/VideoBanner";
import Facilities from "@/components/Facilities/Facilities";
import Reviews from "@/components/Reviews/Reviews";
import Gallery from "@/components/Gallery/Gallery";
import Journal from "@/components/Journal/Journal";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Services/>
      <Story/>
      <VideoBanner/>
      <Facilities/>
      <Reviews/>
      <Gallery/>
      <Journal/>
    </>
  );
}

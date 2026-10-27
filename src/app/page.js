import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Rooms from "@/components/Rooms/Rooms";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Rooms/>
      <Services/>
    </>
  );
}

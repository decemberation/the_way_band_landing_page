import Nav from "@/components/Nav";
import About from "@/components/About";
import Events from "@/components/Events";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <About />
      <Events />
      <VideoSection />
      <Gallery />
      <Booking />
      <Footer />
    </>
  );
}

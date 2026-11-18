import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import ArtGallery from "./sections/ArtGallery";
import HowToJoin from "./sections/HowToJoin";
import Safety from "./sections/Safety";
import Faq from "./sections/Faq";
import Events from "./sections/Events";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ArtGallery />
        <HowToJoin />
        <Safety />
        <Faq />
        <Events />
      </main>
      <Footer />
    </>
  );
}

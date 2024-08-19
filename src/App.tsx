import { Category, Footer, HeroSection, PodcastSection } from "./components";
import AgeCategory from "./components/Categories/AgeCategory";
import HomeSection from "./components/hompage/HomeSection";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <>
      <HeroSection />
      {/* CATEGORY */}
      <HomeSection />
      <Category />
      <AgeCategory />
      {/* PODCAST LIST */}
      <PodcastSection />
      {/* Stats section */}
      {/* <StatisticsSection /> */}
      <Testimonial />
      {/* <FrequentlyAskeQuestion /> */}

      {/* FOOTER Section */}
      <Footer />
    </>
  );
};

export default App;

import {
  Category,
  Footer,
  HeroSection,
  PodcastSection,
  StatisticsSection,
} from "./components";
import AgeCategory from "./components/Categories/AgeCategory";
import FrequentlyAskeQuestion from "./FAQSection/FrequentlyAskeQuestion";
const App = () => {
  return (
    <>
      <HeroSection />
      {/* CATEGORY */}
      <Category />
      <AgeCategory />
      {/* PODCAST LIST */}
      <PodcastSection />
      {/* Stats section */}
      <StatisticsSection />
      <FrequentlyAskeQuestion />

      {/* FOOTER Section */}
      <Footer />
    </>
  );
};

export default App;

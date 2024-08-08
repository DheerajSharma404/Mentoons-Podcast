import {
  Category,
  Footer,
  HeroSection,
  PodcastSection,
  StatisticsSection,
} from "./components";
const App = () => {
  return (
    <>
      <HeroSection />
      {/* CATEGORY */}
      <Category />
      {/* PODCAST LIST */}

      <PodcastSection />
      {/* Stats section */}
      <StatisticsSection />
      {/* FOOTER Section */}
      <Footer />
    </>
  );
};

export default App;

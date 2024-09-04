import React from "react";
import { Category, HeroSection, PodcastSection } from "./components";
// import Career from "./components/CareerPage/Career";
import AgeCategory from "./components/Categories/AgeCategory";
import HomeSection from "./components/hompage/HomeSection";
import Modal from "./components/Modal";
import NewPodcastLayout from "./components/NewPodcastLayout";
import Testimonial from "./components/Testimonial";
import { ModalContext } from "./contexts/ModalContext";
const App: React.FC = () => {
  const { isModalOpen, toggleModal, actionType } =
    React.useContext(ModalContext);

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

      {/* <Career /> */}
      <NewPodcastLayout />

      {isModalOpen && (
        <Modal toggleModal={toggleModal} actionType={actionType} />
      )}
    </>
  );
};

export default App;

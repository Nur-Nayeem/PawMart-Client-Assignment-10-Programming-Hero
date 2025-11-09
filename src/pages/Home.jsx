import React from "react";
import HeroSlider from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection";
import RecentListing from "../components/Listings/RecentListing";
import WhyAdopt from "../components/WhyAdoptSection/WhyAdopt";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <RecentListing />
      <WhyAdopt />
    </div>
  );
};

export default Home;

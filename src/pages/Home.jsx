import React, { Suspense, use } from "react";
import HeroSlider from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection";
import RecentListing from "../components/Listings/RecentListing";
import WhyAdopt from "../components/WhyAdoptSection/WhyAdopt";
import OurHeros from "../components/OurHerosSection/OurHeros";
import axios from "axios";
import Loading from "../components/Loading";
const recentListingPromise = axios
  .get("http://localhost:4000/recent-listings")
  .then((data) => data.data);

const Home = () => {
  const recentListing = use(recentListingPromise);
  return (
    <div>
      <HeroSlider />
      <CategorySection />
      <Suspense fallback={<Loading />}>
        <RecentListing recentListing={recentListing} />
      </Suspense>
      <WhyAdopt />
      <OurHeros />
    </div>
  );
};

export default Home;

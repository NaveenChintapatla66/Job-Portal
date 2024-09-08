import React, { useEffect } from "react";

import HeaderSection from "../../Components/Homepage/HeaderSection";
import Layout from "../../LayoutWrapper/AdminLayout";
import BrowseCategories from "../../Components/Homepage/BrowseCategories";
import HowItWorks from "../../Components/Homepage/HowItWorks";
import HomeTestimonial from "../../Components/Homepage/HomeTestimonial";
const Home = () => {
  return (
    <Layout>
      <HeaderSection />
      <BrowseCategories />
      <HowItWorks />
      <HomeTestimonial />
    </Layout>
  );
};

export default Home;

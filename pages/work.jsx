import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work travelling all around the world."
      />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default work;

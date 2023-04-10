import React, { useEffect } from "react";
import About from "../pages/body/About";
import FAQ from "../pages/body/FAQ";
import Feature from "../pages/body/Feature";
import Intro from "../pages/body/Intro";
import Staking from "../pages/body/Staking";
import TokenSale from "../pages/body/TokenSale";
import Tournament from "../pages/body/Tournament";
import Welcome from "../pages/body/Welcome";

const Body = () => {
  useEffect(() => {});
  return (
    <div>
      <main>
        <Intro />
        <About />
        <TokenSale />
        <Welcome />
        <Tournament />
        <Staking />
        <Feature />
        <FAQ />
      </main>
    </div>
  );
};

export default Body;

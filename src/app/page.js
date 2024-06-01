import React from "react";
import Banner from "../components/home/banner";
import Cover from "../components/home/cover";
// import Cryptomarket from "../components/cryptomarket";
// import Footer from "../components/home/header";
import Hero from "../components/home/hero";
import Stats from "../components/home/stats";

export default function Home() {
  return (
    <div>
     
      <Hero />
      <Stats />
      <Cover />
      <Banner />
    </div>
  );
}

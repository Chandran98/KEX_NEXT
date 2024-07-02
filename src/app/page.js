import React from "react";
import Banner from "../components/home/banner";
import Cover from "../components/home/cover";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import Hero from "../components/home/hero";
import Stats from "../components/home/stats";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Cover />
      <Banner />
      <Footer />
    </div>
  );
}

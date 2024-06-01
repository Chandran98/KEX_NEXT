"use client";
import React from "react";

import Header from "../components/home/header";
// import Footer from "../components/home/footer";
// import { AnimatePresence } from "framer-motion";
// import PageTrans from "../components/page_transistion";
import ThemeProviders from "../utils/themes/themeProvider";

import "../assets/css/style.css";
const rootlayout = ({ children }) => {
  return (
    <ThemeProviders attribute="class" defaultTheme="dark" enableSystem>
    <Header />
        {children}
   
    </ThemeProviders>
  );
};

export default rootlayout;

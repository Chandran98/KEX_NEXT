"use client";
import React from "react";

import Header from "../components/home/header";
import Footer from "../components/home/footer";

// import { AnimatePresence } from "framer-motion";
// import PageTrans from "../components/page_transistion";
import ThemeProviders from "../utils/themes/themeProvider";
const rootlayout = ({ children }) => {
  return (
    <ThemeProviders attribute="class" defaultTheme="dark" enableSystem>
    <Header />
        {children}
        <Footer/>
    </ThemeProviders>
  );
};

export default rootlayout;

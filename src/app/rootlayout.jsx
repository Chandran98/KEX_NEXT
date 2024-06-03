"use client";
import React from "react";

import Header from "../components/home/header";
// import Footer from "../components/home/footer";
// import { AnimatePresence } from "framer-motion";
// import PageTrans from "../components/page_transistion";
import ThemeProviders from "../utils/themes/themeProvider";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "../assets/css/style.css";
const rootlayout = ({ children }) => {
  return (
    <ThemeProviders attribute="class" defaultTheme="dark" enableSystem>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </ThemeProviders>
  );
};

export default rootlayout;

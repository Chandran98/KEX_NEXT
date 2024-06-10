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
import AuthGuard from "@/utils/authRoute";
const rootlayout = ({ children }) => {
  return (
    <ThemeProviders attribute="class" defaultTheme="light" enableSystem>
      <Provider store={store}>
      {/* <AuthGuard> */}

        <Header />

        {children}
        {/* </AuthGuard> */}

      </Provider>
    </ThemeProviders>
  );
};

export default rootlayout;

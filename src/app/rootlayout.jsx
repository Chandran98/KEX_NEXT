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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootlayout = ({ children }) => {
  return (
    <ThemeProviders attribute="class" defaultTheme="light" enableSystem>
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          // className="bg-green-300"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Header />

        {children}
      </Provider>
    </ThemeProviders>
  );
};

export default rootlayout;

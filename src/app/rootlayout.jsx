"use client";
import React from "react";
import ThemeProviders from "../utils/themes/themeProvider";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../assets/css/style.css";
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


        {children}
      </Provider>
    </ThemeProviders>
  );
};

export default rootlayout;

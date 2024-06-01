"use client";

import { ThemeProvider } from "next-themes";

import React from "react";

const ThemeProviders = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
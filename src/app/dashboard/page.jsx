/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import DashBoardHeader from "../../components/header";
import Comp from "./comp";

const page = () => {
  return (
    <div>
      <DashBoardHeader/>
      <Comp/>

    </div>
  )
}

export default page
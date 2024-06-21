"use client";
import React, { useEffect } from "react";
import { NextResponse } from "next/server";
import { getCookie } from 'cookies-next';

import jwt from "jsonwebtoken";

// const isUserAuthenticated = () => {
//   try {
//     window.localStorage.getItem("auth-token");

//     const myjwt = jwt.decode(token);
//     console.log("myjwt", myjwt.status);
//     return myjwt.status;
//   } catch (error) {
//     return false;
//   }
// };

const isUserAuthenticated = () => {
  console.log("middleware");
    try {
      const token= getCookie("auth-token");
      console.log("getCookie",token);
      if (!token) return false;

      const decoded = jwt.decode(token);
      if (!decoded || !decoded.exp) return false;

      const currentTime = Math.floor(Date.now() / 1000);
  const tym=decoded.exp > currentTime;
  console.log(tym,"tym");

      return tym ;
    } catch (error) {
      console.log(error,"err")
      return false;
    }

};
const middleware = (request) => {
  // const isUserAuth = isUserAuthenticated();
  // console.log(isUserAuth, "isUserAuth");
  // if (isUserAuth) {
  //   return NextResponse.next();
  // }

  // return NextResponse.redirect(new URL("/", request.url));
};

// export const config = {
//   matcher: ["/user/:path*", "/swap/:path*"],
// };

export default middleware;

"use client"
import React from "react";
import { cookies } from "next/headers";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import isUserAuthenticated from "@/components/isAuth";

  
const middleware = (request) => {
    const isUserAuth=isUserAuthenticated();
  
    if (isUserAuth) {
      return NextResponse.next();
    }
  
    return NextResponse.redirect(new URL("/", request.url));
  };
  
  export const config = {
    matcher: ["/user/:path*", "/swap/:path*"],
  };
  
  export default middleware;
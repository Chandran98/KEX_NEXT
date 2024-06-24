// import React from "react";
// import { NextResponse } from "next/server";

// import jwt from "jsonwebtoken";

// const isUserAuthenticated = () => {
//   try {
//     if (global?.window !== undefined) {
//     window.localStorage.getItem("auth-token");}
//     // if (!token) {
//     //     return false;
//     //   }
//       const myjwt = jwt.decode(token);
//         console.log("myjwt", myjwt.status);
//         return myjwt.status;
      
//   } catch (error) {
//     console.log("localerror", error);
//     console.log("myjwt", error);
//     return false;
//   }

// };
// const middleware = (request) => {
//   const isUserAuth = isUserAuthenticated();
//   console.log("isUserAuthenticated", isUserAuth);
//   if (isUserAuth) {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect(new URL("/signin", request.url));
// };

// export const config = {
//   matcher: ["/user/:path*", "/swap/:path*"],
// };

// export default middleware;

"use client";
import React from 'react'
import { NextResponse } from "next/server";
import useLocalStorage from './utils/useLocalstorage';

// const login=false;
const middleware = (request) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value ] = useLocalStorage('Auth');
console.log("middleware",value)
    if(value){
        
    return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL("/",request.url));

}

export const config={
    matcher:["/user/:path*","/swap/:path*"]
}

export default middleware
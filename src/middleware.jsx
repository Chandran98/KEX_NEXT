<<<<<<< HEAD
// import React from "react";
// import { NextResponse } from "next/server";
=======
"use client";
import React, { useEffect } from "react";
import { NextResponse } from "next/server";
import { getCookie } from 'cookies-next';
>>>>>>> a29c79d1f8d46776eca2d93633360f4c131bb84d

// import jwt from "jsonwebtoken";

// const isUserAuthenticated = () => {
//   try {
<<<<<<< HEAD
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
=======
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
>>>>>>> a29c79d1f8d46776eca2d93633360f4c131bb84d

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
<<<<<<< HEAD
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
=======
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
>>>>>>> a29c79d1f8d46776eca2d93633360f4c131bb84d

export default middleware
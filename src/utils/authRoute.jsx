/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
"use client";
// const { useRouter } = require("next/navigation  ");
// import {  useRouter,usePathname} from "next/navigation";


// function AuthGuard({ children }) {
//     // const { data: session, status } = useSession();
//     const path = usePathname();
//     const router = useRouter();
//   const status="authenticated";
//   console.log("router",path);
//     useEffect(() => {
//       const protectedRoutes = ['/user'];
//       const pathIsProtected = path.includes(protectedRoutes);
//       console.log(pathIsProtected,"pathIsProtected");
  
//       if (pathIsProtected &&( status === 'authenticated')) {
//       return children;
//       }else{
//         router.push('/signin');
//       }
//     }, [status, router]);
  
//     // if (status === 'loading') {
//     //   return <div>Loading...</div>;
//     // }
  
//     // if (status === 'authenticated') {
//     //   return children;
//     // }
  
//     // return router.push(path);
//   }

// import {React,useEffect}from 'react'

// const AuthRoute = (WrappedComponent) => {
//   useEffect(() => {
//     // checks if the user is authenticated
//     const authContext=true;
//     authContext
//     ? router.push("/")
//     : router.push("/signin");
//     }, []);

// }

// export default AuthRoute


// utils/authRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { useSession } from 'next-auth/react';

const AuthRoute = ({WrappedComponent}) => {
  return (props) => {
    // const { data: session, status } = useSession();
    const router = useRouter();
let status="unauthenticated"
    useEffect(() => {
      if (status === 'unauthenticated') {
        router.push('/signin');
      } else if (status === 'authenticated') {
        router.push('/');
      }
    }, [status, router]);

    if (status === 'loading') {
      return <div>Loading...</div>; // Show a loading indicator while checking auth status
    }

    if (status === 'authenticated') {
      return <WrappedComponent {...props} />;
    }

    return router.push('/'); // While redirecting, render nothing or a fallback
  };
};

export default AuthRoute;

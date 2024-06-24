"use client";
import React from 'react'
import { NextResponse } from "next/server";

// const login=false;
const middleware = (request) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName, readValue ] = useLocalStorage('Auth', '');
console.log("middleware",name)
    if(name){
        
    return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL("/",request.url));

}

export const config={
    matcher:["/user/:path*","/swap/:path*"]
}

export default middleware
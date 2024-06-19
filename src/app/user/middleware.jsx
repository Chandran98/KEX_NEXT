import React from 'react'
import { NextResponse } from "next/server";

const login=false;
const middleware = (request) => {
    if(login){
        
    return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL("/",request.url));

}

export const config={
    matcher:["/user/:path*"]
}

export default middleware
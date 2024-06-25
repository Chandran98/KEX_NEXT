import jwt  from "jsonwebtoken";

import { cookies } from "next/headers";



const isUserAuthenticated =()=>{
    const log = cookies();
    const token=log.get("auth-token")?.value;

    try {
        if (!token) return false
        const decoded= jwt.decode(token);
        if(!decoded||!decoded.exp) return false;
        const currentTime=Math.floor(Date.now()/1000);
        return decoded.exp > currentTime;
        
    } catch (error) {
        console.log("isUserAuthenticated",error)
        return false;
    }
}

export default isUserAuthenticated;

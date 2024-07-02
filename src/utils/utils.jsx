"use server"
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import jwt  from "jsonwebtoken";

export const token=()=>{
    const log = cookies();
   return log.get("auth-token")?.value
};

const log = cookies();
export const authToken= log.get("auth-token")?.value

export const cookieToken=getCookie("auth-token");


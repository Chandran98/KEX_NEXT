"use server"
import { cookies } from "next/headers";

export const token=()=>{
    const log = cookies();
   return log.get("auth-token")?.value
};
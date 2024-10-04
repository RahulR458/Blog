import { NextResponse } from "next/server"
import getLocalStorage from "./app/getLocalStorage/page";

// const token = true
export async function middleware(request){

    console.log("middleware");

   //  let token = getLocalStorage()
      // Check if localStorage is available and fetch the token
   //    if (typeof window !== "undefined") {
   //       token = localStorage.getItem("token");
   //   }
    
   //   console.log(token,"____");
     // Access cookies from the request
      const cookies = request.cookies;

      // Get a specific cookie, for example, "token"
      const token = cookies.get('accessToken')?.value;

      console.log("Token from cookies:", token);
    
    if(token){
        if(["/","/register"].includes(request.nextUrl.pathname)) {  
           return NextResponse.redirect(new URL("/home",request.url))
        }
     }

    if(token){
       return NextResponse.next()
    }

    if(!token){
        if(["/home","/blog-open"].includes(request.nextUrl.pathname)) {  
           return NextResponse.redirect(new URL("/",request.url))
        }
     }

   //   if(!token){
   //    if(["/admin-blog","/admin-users"].includes(request.nextUrl.pathname)) {  
   //       return NextResponse.redirect(new URL("/admin-login",request.url))
   //    }
   // }

}
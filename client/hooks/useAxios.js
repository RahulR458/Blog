// "use client"
// import { useQuery } from "@tanstack/react-query"
import { useQuery } from '@tanstack/react-query';

import axios from "axios"

const fetchData = async ()=>{
//  const response = await axios('https://fakestoreapi.com/products/1')
const response = await axios.get('https://fakestoreapi.com/products/1')
 return response;
}

// export const useAxioss = ()=>{ 
//    const query = useQuery({queryKey:['photos'],queryFn:fetchData})
//    console.log(query,"===query");
   

// // const {data:photos} =useQuery({
// //     queryKey:["photos"],
// //     queryFn:fetchData
// // })


//     return {photos}
// }
export const useAxioss = ()=>{ 
    const {data,error,isError,isLoading} = useQuery({
        queryKey:["users"],
        queryFn:async()=>{
          let response = await axios('https://fakestoreapi.com/products')
          return response.data
        }
      })


    return {data}
}
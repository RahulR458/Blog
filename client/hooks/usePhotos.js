import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchData = ()=>{
    return axios.get('https://fakestoreapi.com/products/1')
  
}

export const usePhoto = ()=>{
    const {data} = useQuery({queryKey:["photos"],queryFn:fetchData})
    return {data}
 }
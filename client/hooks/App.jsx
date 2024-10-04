import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

// const fetchData = ()=>{
//     return axios('https://fakestoreapi.com/products/1')
// }

const App = () => {
  const {data,error,isError,isLoading} = useQuery({
    queryKey:["users"],
    queryFn:async()=>{
      let response = await axios('https://fakestoreapi.com/products')
      return response.data
    }
  })
  return {data}
}

export default App

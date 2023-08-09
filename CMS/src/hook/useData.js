import axios from 'axios'
import { useState } from 'react'
import {QueryClient , QueryClientProvider , useQueries} from 'react-query'


export const useData = () =>{

    const [getData , setGetData] = useState([])
    const [productId , setProductId] = useState()
   
    const loadProduct = async () => {
       const result = await axios.get("http://localhost:2000/api/product")
       setGetData(result.data)
       console.log(getData);
       getData.forEach(pro => {
         setProductId(pro._id)
       })
       
    }
     return {getData , loadProduct , productId}
}











//  export const useData = () =>{
//     const {data} = useQueries(['products'] , async () =>{
//         return axios.get('http://localhost:2000/api/product').then((res) =>
//         setGetData(res.result))
//     })

//     return {data}
// }

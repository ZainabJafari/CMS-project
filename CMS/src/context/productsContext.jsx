import { createContext , useState } from "react";
import axios from "axios";


export const ProductsContext = createContext(null)

export const ProductsContextProvider = (props) =>{

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
    const productsContextValue = {getData , productId , loadProduct}
    return <ProductsContext.Provider value={productsContextValue}>{props.children}</ProductsContext.Provider>

}
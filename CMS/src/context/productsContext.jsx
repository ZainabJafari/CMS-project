import { createContext , useState } from "react";
import axios from "axios";


export const ProductsContext = createContext(null)

export const ProductsContextProvider = (props) =>{

    const [getData , setGetData] = useState([])
    const [productId , setProductId] = useState()
    const [state , setState] = useState(false)

    const toggle = () =>{
      setState(false)
    }

    const loadProduct = async () => {
       const result = await axios.get("http://localhost:2000/api/product")
       setGetData(result.data)
       console.log(getData);
       getData.forEach(pro => {
         setProductId(pro._id)
       })
       
      setState(true)
    }

    const deletProduct = async (id) => {
      try {
        const res = await axios.delete(`http://localhost:2000/api/product/${id}`);
        console.log(res);
        loadProduct();
      } catch (err) {
        console.error(err);
      }
    }

    const productsContextValue = {getData , productId , loadProduct , state ,toggle , deletProduct }
    return <ProductsContext.Provider value={productsContextValue}>{props.children}</ProductsContext.Provider>

}
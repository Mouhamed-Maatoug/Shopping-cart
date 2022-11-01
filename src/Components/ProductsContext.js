import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const ProductsContext = createContext()



export const ProductsProvider = (props) => {
const [products, setProducts] = useState([])
useEffect(()=>{
    axios.get("https://mocki.io/v1/43e51e65-6099-4d4e-80de-674a3ba4e9eb" /* use this api https://dummyjson.com/products*/ ).then(
      res => setProducts(res.data.products)
    ).catch(err => console.log("Errore"))
  }, [])
  return (
    <ProductsContext.Provider value= {[products, setProducts]}>
        {props.children}
    </ProductsContext.Provider>
  )
}

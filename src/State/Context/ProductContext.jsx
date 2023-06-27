import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import productReducer from "../reducer/ProductReducer";


const ProductContext = createContext();
// export const useAppContext = () => useContext(AppContext) 



const ProductProvider = ({children}) => { // this children is <App />
    
    // use reducer return 2 element of array
    
    const initialState ={
        isLoading: false,
        isError: false,
        products : [],
    }
    
    const [state, dispatch] = useReducer(productReducer, initialState)  // now all the dispatch will call the action of reducer
    
    
    
    const getProducts =  async() =>{
        const API = "https://dummyjson.com/products?limit=100"
        dispatch({type: "SET_LOADING"})
       try {
          const response = await axios.get(API)
          const products = await response.data.products
         dispatch({type: "MY_PRODUCTS_DATA", payload : products})
       } catch (error) {
        dispatch({type: "PRODUCT_DATA_ERROR"})
       }
    }


    const getUniqueValue = (datasArray, property) => {
        if (!Array.isArray(datasArray)) {
          return [];
        }
    
        let getValue = datasArray.map((dataArray) => {
          return dataArray[property];
        });
    
        let uniqueValue = [...new Set(getValue)];
        return uniqueValue;
      }
    

    

// const getProducts = async (url) =>{ // this is only giving data array but when we are using axios we are getting so many things
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data);

// }





    useEffect(()=>{
        getProducts()
    }, [])

    return <ProductContext.Provider value={{...state, getUniqueValue}}>  {/* // here we are passing all the value inside state which is isLoading isError and so on  */}
        {children} 
    </ProductContext.Provider>

}


// Custom hook

const useProductContext = () =>{
    return useContext(ProductContext)
}

export {useProductContext}

export default ProductProvider ;
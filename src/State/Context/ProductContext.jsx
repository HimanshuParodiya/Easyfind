import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import productReducer from "../reducer/ProductReducer";

const ProductContext = createContext();
// export const useAppContext = () => useContext(AppContext)

const ProductProvider = ({ children }) => {
  // this children is <App />
  const API = "https://dummyjson.com/products?limit=100";
  const [limits, setLimits] = useState(10)


  // use reducer return 2 element of array

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    limitedProducts: [],
    isLimitedLoading: false,
    isLimitedError: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState); // now all the dispatch will call the action of reducer

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const productsData = await response.data.products;
      dispatch({ type: "MY_PRODUCTS_DATA", payload: productsData });
    } catch (error) {
      dispatch({ type: "PRODUCT_DATA_ERROR" });
    }
  };

  const getLimitedProducts = async () => {
    const API = `https://dummyjson.com/products?limit=${limits}`;
    dispatch({ type: "SET_Limited_LOADING" });
    try {
      const response = await axios.get(API);
      const limitedProductsData = await response.data.products;
      dispatch({
        type: "MY_LIMITED_PRODUCTS_DATA",
        payload: limitedProductsData,
      });
    //   console.log(limitedProductsData);
    } catch (error) {
      dispatch({ type: "LIMITED_PRODUCT_DATA_ERROR" });
    }
  };


  




  const getUniqueValue = (datasArray, property) => {
    if (!Array.isArray(datasArray)) {
      return [];
    }

    let getValue = datasArray.map((dataArray) => {
      return dataArray[property];
    });

    let uniqueValue = [...new Set(getValue)];
    return uniqueValue;
  };

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        limits < 100
      ) {
        setLimits((prev) => Math.min(prev + 10, 100));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getProducts = async (url) =>{ // this is only giving data array but when we are using axios we are getting so many things
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     console.log(data);

  // }

  useEffect(() => {
    // getLimitedProducts(21)
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, getUniqueValue, getLimitedProducts,handelInfiniteScroll,limits }}
    >
      {" "}
      {/* // here we are passing all the value inside state which is isLoading isError and so on  */}
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook

const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext };

export default ProductProvider;

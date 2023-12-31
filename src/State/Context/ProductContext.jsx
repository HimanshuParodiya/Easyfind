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
  const [productCategory, setProductCategory] = useState("categories")
  // this children is <App />
  const API = "https://dummyjson.com/products?limit=100";
  const CATEGORY_API = `https://dummyjson.com/products`
  const [limits, setLimits] = useState(10)
  const [mobileScreen, setmobileScreen] = useState(false)
  const [cartItem, setCartItem ] = useState([])
 


  // use reducer return 2 element of array

  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    limitedProducts: [],
    isLimitedLoading: false,
    isLimitedError: false,
    singleProducts: {},
    isSingleLoading: false,
    isSingleError: false,
    categoryProduct:{},
    isCategoryLoading:false,
    isCategoryError:false,
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

  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;
      dispatch({
        type: "SET_SINGLE_PRODUCTS_DATA",
        payload: singleProduct,
      });
    //   console.log(limitedProductsData);
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_DATA_ERROR" });
    }
  };


 const getCategoryWiseProduct = async (url) =>{
  dispatch({ type: "SET_CATEGORY_LOADING" });
  try {
    const response = await axios.get(url);
    const categoruProduct = await response.data.products;
    dispatch({
      type: "SET_CATEGORY_PRODUCTS_DATA",
      payload: categoruProduct,
    });

  } catch (error) {
    dispatch({ type: "CATEGORY_PRODUCT_DATA_ERROR" });
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
  };
  
  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.scrollHeight &&
        limits < 100
        ) {
          setLimits((prev) => Math.min(prev + 10, 100));
        }
      } catch (error) {
      // console.log(error);
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
  useEffect(()=>{
    getCategoryWiseProduct(`${CATEGORY_API}/category/${productCategory}`)

}, [productCategory])
useEffect(() => {
  // adding eventlistener for scroll and execute the function which will check if scroll is more than 100
  window.addEventListener("resize", ()=>{
      if (window.innerWidth < 600) {
        setmobileScreen(true);
      } else {
        setmobileScreen(false);
      }
  });

  return () => {
    // removeing eventlistener
    window.removeEventListener("resize", ()=>{
      if (window.screenX < 600) {
        setmobileScreen(true);
      } else {
        setmobileScreen(false);
      }
  });
  };
}, [mobileScreen]);

  return (
    <ProductContext.Provider
      value={{ ...state, getUniqueValue, getLimitedProducts,handelInfiniteScroll,limits ,getSingleProducts,setProductCategory, mobileScreen,cartItem,setCartItem}}
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

import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./Slice/loadingSlice";
import productCategorySlice from "./Slice/ProductPage/ProductCategorySlice";

const store = configureStore({
    reducer:{
        loading: loadingSlice.reducer,
        productCategory: productCategorySlice.reducer,
    }
})

export default store;
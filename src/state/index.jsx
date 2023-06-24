import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./Slice/loadingSlice";

const store = configureStore({
    reducer:{
        loading: loadingSlice.reducer,
    }
})

export default store;
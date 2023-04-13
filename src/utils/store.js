import { configureStore } from "@reduxjs/toolkit";
import 

const store = configureStore({
    reducer:{
        search:searchSlice,
    }
})

export default store;
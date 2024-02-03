// to create a store we import
// configureStore

// import product reducer
import { productReducer } from "./reducers/productReducer"; 
// import
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        allProducts: productReducer
    }
})

export default store;
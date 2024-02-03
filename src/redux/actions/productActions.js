import { ActionTypes } from "../constants/actionTypes"

// this function take products for setting the product
// returns the action type and payload
export const setProduct = products=>({
    type: ActionTypes.SET_PRODUCTS,
    payload : products
})

// this function take products for selecting the product
// returns the action type and payload
export const selectedProduct = product =>({
    type: ActionTypes.SELECTED_PRODUCT,
    payload : product
})
export const removeSelectedProduct = () =>({
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
})
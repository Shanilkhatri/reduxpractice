const initialState = {
    products:[
    ],
    selectedProduct:{

    }
}

export const productReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case "SET_PRODUCTS":
            // we will spread the initial state plus the payload we receive
            return {...state, products:payload}
        case "SELECTED_PRODUCT":
            return {...state, selectedProduct:payload}
        case "REMOVE_SELECTED_PRODUCTS":
            return {...state, selectedProduct:{}}
        default:
            return state
    }
}
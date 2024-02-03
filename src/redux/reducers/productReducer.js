const initialState = {
    products:[
        {
            id: 1,
            title: "Shaanil",
            category: "software developer"
        },
    ]
}

export const productReducer = (state=initialState, {type, payload})=>{
    switch(type){
        case "SET_PRODUCTS":
            return state
        case "SELECTED_PRODUCT":
            return state
        default:
            return state
    }
}
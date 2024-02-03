import React,{useEffect} from 'react'
import ProductComponent from './ProductComponent'
// importing axios for requests
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
// importing setProduct action
import { setProduct } from '../redux/actions/productActions'

function ProductListing() {
    // getting products from state
    const products = useSelector((state)=> state.allProducts.products)

    // useDispatch method to dispatch actions for store changes
    // its a redux hook
    const dispatch = useDispatch();


    // fetchproducts function
    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            // if any error, log it:
            console.error("err: ",err)
        })
        // console.log("response: ", response)
        // setting the returned products into the redux store
        // using dispatch and action
        
        // what actually happens with the below piece of code is
        // setProduct is an action that returns an action obj 
        // this action object is then dispatched using dispatch
        // switch case statement then based on action.type updates the state
        dispatch(setProduct(response.data)) //response.data : products array
    }
    // this will get called only once after the component renders
    useEffect(()=>{
        // function call
        fetchProducts();
    },[])
    // logging the products after they are dispatched to redux-store
    console.log("products: ", products)
  return (
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing
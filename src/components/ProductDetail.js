import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions'
function ProductDetail() {
    // useParams hook gives us the parameters passed on while navigating
    // make sure to use the same name as you used while defining Route
    // i.e productId in this case
    const {productId} = useParams()
    const dispatch = useDispatch()
    // state access
    const product = useSelector((state)=>state.allProducts.selectedProduct)
    const { image, title, price, category, description } = product;
    // fetchProdDetails function
    const fetchProdDetails= async ()=>{
        // https://fakestoreapi.com/products/ : fake store api to get products data
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("err: ",err)
        })
        dispatch(selectedProduct(response.data))
    } 

    // useEffect to run once after initial render
    useEffect(()=>{
        if(productId && productId!=""){
            fetchProdDetails();
        }
        return ()=> {
            dispatch(removeSelectedProduct());
          };
    },[productId])
  return (
    <div className="ui grid container" style={{marginTop:"20px"}}>
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default ProductDetail
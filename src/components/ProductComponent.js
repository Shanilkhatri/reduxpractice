import React from 'react'
import {useSelector}  from 'react-redux'
import { Link } from 'react-router-dom'
function ProductComponent() {
    // we will use useSelector which gives us the state
    // useSelector takes in state and returns a state
    const products = useSelector((state)=> state.allProducts.products)
    
    // after everything gets into store 
    // lets create a render list for our products
    const renderList = products.map((product)=>{
        // destructuring 
        const {id, title, image, price, category} = product
        return(
            <div className='four wide column' style={{marginTop:"15px"}} key={id}>
            <Link to={`/product/${id}`}>
            <div className='ui link cards' >
                <div className='card' style={{minHeight:"100px"}}>
                    <div className='image'>
                        <img src={image} alt={title}/>
                    </div>
                    <div className='content'>
                        <div className='header'>
                           {title}
                        </div>
                        <div className='meta price'>
                           $ {price}
                        </div>
                        <div className='meta'>
                           {category}
                        </div>
                    </div>
                </div>
    
            </div>
            </Link>
        </div>
        )
    })
  return (
   <>
        {renderList}
   </>
  )
}

export default ProductComponent
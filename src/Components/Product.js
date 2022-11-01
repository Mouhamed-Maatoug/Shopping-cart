import React, { memo, useContext, useEffect, useState } from 'react'
import Card from './Card'
import './Product.css'
import { ProductsContext } from './ProductsContext'
const Products = () => {
  
  const [products , setProducts ] = useContext(ProductsContext)
  
  const [allProducts  , setAllProducts] = useState(products)

 console.log("allProducts" ,allProducts)


  return (
    <div className='product-container'>
<div className='filtrage'>



<select className='filtre' onChange={(e)=>{ 

  if(e.target.value == 'all'){
      setAllProducts(products)
  }
  else{
    const filter = products.filter((product)=>{
    return(
      product.category == e.target.value
    )
  })
  console.log(filter)
  setAllProducts(filter)}
}}> 
<option value='all'> All</option>
  <option value='smartphones'> smartphones</option>
  <option value='laptops'> laptops</option>
  <option value='fragrances'> fragrances</option>
  <option value='skincare'> skincare</option>
  <option value='home-decoration'> home-decoration</option>
</select>

</div>
    <div className='products'>
    
      {
        allProducts.map(product =><Card product={product} key={product.id}></Card> )
      }
      </div>
    
    </div>
      
  )
}

export default memo(Products)
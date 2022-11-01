import React, { useContext, useRef, useState } from 'react'
import './ShoppingBag.css'
import {BagueContext} from './BagueContext'
const ShoppingBag = () => {
  const QuantiyRef = useRef() ; 
  const [bague, setBague] = useContext(BagueContext)
  const [total, setTotal] = useState(1)
  console.log('selected' ,bague)
  const getQuantity = (e) =>{
     
      const productUpdated = bague.filter((product) =>{return ( product.product.id == e.target.id)})
      const indexSelected = bague.indexOf(productUpdated[0])
      const productNotUpdated =  bague.filter((product) =>{return ( product.product.id != e.target.id)})
      const productQuantityUpdated = [{product : productUpdated[0].product , quantity : e.target.value}]
      productNotUpdated.splice(indexSelected , 0 ,productQuantityUpdated[0])
      setBague(productNotUpdated)
      console.log(productUpdated, e.target.id , indexSelected , productNotUpdated)
  }
  const deleteProduct =(e) =>{
    const productNotDeeleted = bague.filter((product) =>{return ( product.product.id != e.target.id)})
    setBague(productNotDeeleted) ;
  }
  
  return (
    <div className='shopping'>
         <header>
         <h1 className='title'>Shopping cart</h1>
         <div className='grid-header'>
             <h3>Product</h3>
             <h3 className='end-flex'>Price</h3>
             <h3 className='end-flex'>Quantity</h3>
             <h3 className='end-flex'>Totale</h3>
         </div>
         </header>
          {
            bague.map(product => {
                 return(
                  <div className='grid-content' key={product.product.id}>
                      <div className="product">
                      <img src={product.product.thumbnail}></img>
                      <h3>{product.product.title}</h3>
                      <button id = {product.product.id} className='btn' onClick={deleteProduct}>delete</button>

                      </div>
                      <h3 className='end-flex'>${product.product.price}</h3>
                      <input type={'text'} id={product.product.id} className='end-flex' onChange={getQuantity}  value={product.quantity}/> 
                      <h3 className='end-flex'>{product.product.price * product.quantity}</h3>

                  </div>
                 )
            })
          }
         


    </div>
  )
}

export default ShoppingBag
import React, { memo, useContext, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BagueContext } from './BagueContext'
import './Card.css'
import { ProductsContext } from './ProductsContext'

const Card = ({product}) => {
  const testref = useRef()
  const [bague, setBague] = useContext(BagueContext)
  const [products, setProducts] = useContext(ProductsContext)

  const selectProduct = (e) =>{
    console.log("id=" , e.target.id)
    const oneProduct = products.filter(item => item.id == e.target.id)
        let newSelect = bague.filter(product => product.product.id == oneProduct[0].id)
        newSelect.length ? console.log("deja aded") : setBague([...bague, {product: oneProduct[0] , quantity : 1}]) 
    } ; 
    console.log(bague)
  return (
    <div className='card' key={product.id}>
        <Link to= {`/Products/${product.id}`}><img src={product.thumbnail} alt={product.category}></img></Link> 
        <div className='box'>
            <h3 className='title-product' title={product.title}><Link to= {`/Products/${product.id}`}>{product.title}</Link> </h3>
            <p className='description'> {product.description} </p>

            <h5 className='price' >${product.price}</h5>
            
            <div className='layout-hover'>
            <i className='add-btn fa fa-shopping-cart fa-2x' id = {product.id}  onClick={selectProduct}></i>
            <Link to= {`/Products/${product.id}`}><i class="fa fa-eye fa-2x" aria-hidden="true"></i></Link> 
            
            </div>

        </div>
        
    </div>
  )
}

export default memo(Card)
import { useParams } from 'react-router-dom'
import React, { memo, useContext, useState } from 'react'
import { ProductsContext } from './ProductsContext'
import './DetailProduct.css'
import { BagueContext } from './BagueContext'

const DetailProduct = (props) => {
    const {id} = useParams();
    const [products, setProducts] = useContext(ProductsContext) ;
    const oneProduct = products.filter(product=> product.id == id)
    const src = oneProduct.map(product => product.thumbnail)
    const [source, setSource] = useState(src[0])
    const [bague, setBague] = useContext(BagueContext)
    const selectProduct = (id) =>{

        let newSelect = bague.filter(product => product.product.id == id)
        newSelect.length ? console.log("deja aded") : setBague([...bague, {product: oneProduct[0] , quantity : 1}]) 
         console.log('new' ,newSelect)
        
    } ; 
    console.log('bague', bague)

  return (
    <div>

         {
            oneProduct.map((product) =>{
                return(
                    
                <div className='productDetail'>
                    <div className='detail'>
                        <div className='img-container'>
                        <img src={source}  alt='product'></img>     
                        </div>
                        <div className='des'>
                            <h1 className='title'>{product.title}</h1>
                            <div><h3>category : </h3> <span> {product.category}</span></div> 
                            <div><h3>brand : </h3>  <span> {product.brand}</span></div>
                            <h3>descriptoin : </h3> 
                            <p>{product.description}</p>
                            <p className='price'>${product.price}</p>
                            <button id={product.id} onClick={() => selectProduct(id)}>Add to cart</button>
                        </div>
                    </div>
                    <div className='image-container'>
                        {product.images.map((image , index) =>{
                            return( 
                                <div> 
                                <img className='prespective' src={image} onClick={(e) => setSource(e.target.src)} key={index}></img>
                                </div>
                               )
                        })}
                    </div>
                </div>
                )
            })
        }
        
    </div>
    
  )
}

export default memo(DetailProduct)
import React, { memo, useContext, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BagueContext } from './BagueContext'
import {FaFacebookSquare , FaInstagram , FaPhone, FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'

import './Navbar.css'


const Navbar = () => {
      const [nav ,setNav] = useState(false) ;
      const toggleLinks = () =>{
            setNav( !nav ) 
      }
      const [bague, setBague] = useContext(BagueContext)
      const selectRef = useRef()
      bague.length? selectRef.current.style.display = "flex" : console.log("no select")
  return (
            <header className='nav-top'>
                  <div className='header'>
                        <div className='nav-social'> 
                              <FaInstagram/>
                              <FaFacebookSquare/>
                        </div>
                        <div>
                              <h4>Livraison gratuite à partir de 99 TND d'achats</h4>
                        </div>
                        <div className='nav-contact'> 
                              <FaPhone/>
                              <h4>29 272 307</h4>
                        </div>
                  </div>
            <div className={nav? 'navbar layers' : "navbar"}>
                  <div className='nav-header'>
                        <div className='logo'>
                              <h1>OnS<span>hope</span> </h1> 
                        </div>
                        <ul className={nav? "nav-links show" : " nav-links"}>
                        <li> <NavLink to="/">Home </NavLink> </li>
                        <li> <NavLink to="/Products">Product</NavLink> </li>
                        <li> <NavLink to="/Contact">Contact</NavLink> </li>
                  </ul>
                  </div>
                  <div className='shopping-cart'>
                        <NavLink to='/ShoppingBag'><FaShoppingCart  className='icone'/></NavLink>
                  
                        <div className='product-selected' ref={selectRef} >{bague.length}</div>
                        </div>
                        <FaUser className='icone'/>
                        <FaSearch className='icone'/>
                        <i className="fa fa-bars menu" aria-hidden="true" onClick={toggleLinks}></i>

                  
                  
        </div>
        </header>
  )
}

export default memo(Navbar)
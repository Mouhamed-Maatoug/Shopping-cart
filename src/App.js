import { useEffect, useState } from 'react';
import axios from 'axios'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Products from './Components/Product';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { ProductsProvider } from './Components/ProductsContext';
import DetailProduct from './Components/DetailProduct';
import { BagueContext } from './Components/BagueContext';
import ShoppingBag from './Components/ShoppingBag';
import { Home } from './Components/Home';
import Contact from './Components/Contact';

function App() {
  const [bague, setBague] = useState([]);
  return (
    <ProductsProvider>
    <BagueContext.Provider value={[bague, setBague]}>
      <BrowserRouter>
        <div className="App">
            <Navbar />
        <div className='img-bkg'></div>

            <Routes>
              <Route path='/Products' exact element={<Products />} />
              <Route path='/Products/:id' element={<DetailProduct />} />
              <Route path='/ShoppingBag' element={<ShoppingBag/>} />
              <Route path='/' element={<Home/>} />
              <Route path='/Contact' element={<Contact/>} />




            </Routes>
            <Footer/>
        </div>
      </BrowserRouter>
    </BagueContext.Provider>
    </ProductsProvider>
  );
}

export default App;

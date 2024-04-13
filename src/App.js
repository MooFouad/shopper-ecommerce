import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Login from './pages/Login';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import menPanner from './components/assets/banner_mens.png'
import womenPanner from './components/assets/banner_women.png'
import kidsPanner from './components/assets/banner_kids.png'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='py-10'>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={menPanner} category='men'/>} />
          <Route path='/women' element={<ShopCategory banner={womenPanner} category='women'/>} />
          <Route path='/kids' element={<ShopCategory banner={kidsPanner} category='kid'/>} />
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

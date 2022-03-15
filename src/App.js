import './App.css';
import { Cart, LandingPage, Login, Product, Signup, Wishlist } from './pages';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/shop' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;

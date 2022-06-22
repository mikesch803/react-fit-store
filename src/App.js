import "./App.css";
import {
  Cart,
  LandingPage,
  Login,
  Product,
  Signup,
  Wishlist,
  NotFound,
  Profile,
  SingleProduct,
  Auth,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Footer, Header, Toast } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Toast />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/product/:ProductId" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Auth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import {
  Cart,
  LandingPage,
  Login,
  Product,
  Signup,
  Wishlist,
  NotFound,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Footer, Header } from "./components";
import { Auth } from "./pages/auth/Auth";
import { Toast } from "./components/toast/Toast";
import { useToast } from "./context";
function App() {
  const { toastState } = useToast();
  return (
    <div className="App">
      <Header />
      {toastState && <Toast /> }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Auth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
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

import { useContext } from "react";
import { Aside } from "../../components";
import { ProductCard } from "../../components/product-card/ProductCard";
import { Toast } from "../../components/toast/Toast";
import { ToastContext } from "../../context";
import "./Product.css";

export function Product() {
  
  const {toastState} = useContext(ToastContext);
  return (
    <div className="grid-layout-product">
      <Aside />
      {toastState && <Toast/>}
      <section className="product">
        <h2 className="product-section-title txt-left">Showing all products</h2>
        <ProductCard/>
      </section>
    </div>
  );
}

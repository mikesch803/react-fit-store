import { Aside } from "../../components";
import { ProductCard } from "../../components/product-card/ProductCard";
import "./Product.css";

export function Product() {
  return (
    <div className="grid-layout-product">
      <Aside />
      <section className="product">
        <h2 className="product-section-title txt-left">Showing all products</h2>
        <ProductCard />
      </section>
    </div>
  );
}

import { Aside } from "../../components";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useFilterModal } from "../../hooks/useFilterModal";
import "./Product.css";

export function Product() {
  const {asideStyles, filterHandler} = useFilterModal();
  return (
    <div className="grid-layout-product">
      <Aside asideStyles={asideStyles}/>
      <section className="product">
        <ProductCard filterHandler={filterHandler}/>
      </section>
    </div>
  );
}

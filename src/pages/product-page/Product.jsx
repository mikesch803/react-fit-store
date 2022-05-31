import { useEffect } from "react";
import { Aside } from "../../components";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useFilter } from "../../context";
import { useFilterModal } from "../../hooks/useFilterModal";
import { useTitle } from "../../hooks/useTitle";
import "./Product.css";

export function Product() {
  const { asideStyles, filterHandler } = useFilterModal();
  const { getAllProducts } = useFilter();
  useEffect(() => {
    getAllProducts();
  });
  useTitle("Shop");
  return (
    <div className="grid-layout-product">
      <Aside asideStyles={asideStyles} />
      <section className="product">
        <ProductCard filterHandler={filterHandler} />
      </section>
    </div>
  );
}

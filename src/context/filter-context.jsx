import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { filterReducer } from "../reducer/FilterReducer";
import { sortProducts } from "../utils/filter-function/FilterProducts";
const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [productData, SetProductData] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/api/products");
        SetProductData(result.data.products);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getCurrentProductHandler = async (id) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      if (response.status === 200) {
        setCurrentProduct(response.data.product);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const [state, dispatch] = useReducer(filterReducer, {
    sortby: null,
    available: false,
    priceRange: 1501,
    brand: [],
    rating: null,
    search: null,
  });

  const getSortedArr = sortProducts(productData, state);
  return (
    <FilterContext.Provider
      value={{
        getSortedArr,
        dispatch,
        state,
        getCurrentProductHandler,
        currentProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContext, FilterProvider, useFilter };

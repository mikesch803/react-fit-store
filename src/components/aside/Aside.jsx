import React, { useContext } from "react";
import { FilterContext } from "../../context/filter-context";
import {
  filterBrandData,
  filterPriceRangeData,
  filterRatingData,
} from "../../data/filter-data/filter.data";
import "./Aside.css";
export function Aside() {
  const { dispatch, state } = useContext(FilterContext);

  return (
    <aside className="aside-product">
      <form className="sidebar-product txt-left">
        <div className="aside-filter">
          <h3>Filter </h3>
          <span
            className="aside-filter-clear"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            clear
          </span>
        </div>
        <div className="aside-price-range">
          <h3>Price range</h3>
          <label>0</label>{" "}
          <input
            type="range"
            min="0"
            max="1501"
            value={state.priceRange}
            onChange={(e) =>
              dispatch({ type: "PRICE_RANGE", payload: e.target.value })
            }
          />
          <label> 1500</label>
        </div>
        <div className="aside-category">
          <h3>Brand</h3>
          {filterBrandData.map((item) => (
            <label htmlFor={item} className="category" key={item}>
              <input
                id={item}
                type="checkbox"
                name={item}
                checked={state.brand.includes(item)}
                onChange={(e) => dispatch({ type: "BRAND", payload: item })}
              />
              {item}
            </label>
          ))}
        </div>
        <div className="aside-rating">
          <h3>Rating</h3>
          {filterRatingData.map((item) => (
            <label htmlFor={item.name} className="star" key={item.name}>
              <input
                type="radio"
                id={item.name}
                name="rating"
                checked={state.rating === item.value}
                onChange={() =>
                  dispatch({ type: "RATING", payload: item.value })
                }
              />
              {item.name}
            </label>
          ))}
        </div>
        <div className="aside-sort">
          <h3>Sort by Price</h3>
          {filterPriceRangeData.map((item) => (
            <label htmlFor={item.name} className="sort" key={item.name}>
              <input
                type="radio"
                name="sorting"
                id={item.name}
                checked={state.sortby === item.value}
                onChange={() => dispatch({ type: "SORT", payload: item.value })}
              />
              {item.name}
            </label>
          ))}
        </div>
        <div className="aside-availablity">
          <h3>Availability</h3>
          <label htmlFor="availablity">
            <input
              type="checkbox"
              id="availablity"
              checked={state.available}
              onChange={() => dispatch({ type: "EXCLUDE_OUT_OF_STOCK" })}
            />
            exclude out of stock
          </label>
        </div>
      </form>
    </aside>
  );
}

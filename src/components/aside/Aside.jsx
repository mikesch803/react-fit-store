import React from "react";
import { useFilter } from "../../context";
import {
  filterBrandData,
  filterPriceRangeData,
  filterRatingData,
} from "../../data/filter-data/filter.data";
import "./Aside.css";
export function Aside() {
  const { dispatch, state } = useFilter();

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
          {filterRatingData.map((item) => { 
            const {name, value} = item;
            return (
            <label htmlFor={name} className="star" key={name}>
              <input
                type="radio"
                id={name}
                name="rating"
                checked={state.rating === value}
                onChange={() =>
                  dispatch({ type: "RATING", payload: value })
                }
              />
              {name}
            </label>
          )})}
        </div>
        <div className="aside-sort">
          <h3>Sort by Price</h3>
          {filterPriceRangeData.map((item) => { 
            const {name, value} = item;
            return(
            <label htmlFor={name} className="sort" key={name}>
              <input
                type="radio"
                name="sorting"
                id={name}
                checked={state.sortby === value}
                onChange={() => dispatch({ type: "SORT", payload: value })}
              />
              {name}
            </label>
          )})}
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

import React from 'react'
import './Aside.css'
export function Aside() {
  return (
    <aside className="aside-product">
            <div className="sidebar-product">
                <div className="aside-filter">
                    <h3>Filter </h3><span className="aside-filter-clear">clear</span>
                </div>
                <div className="aside-price-range">
                    <h3>Price range</h3>
                    <input type="range"/>
                </div>
                <div className="aside-category">
                    <h3>Category</h3>
                    <label for="" className="category"><input type="checkbox"/>Men clothing</label>
                    <label for="" className="category"><input type="checkbox"/>Women clothing</label>
                </div>
                <div className="aside-rating">
                    <h3>Rating</h3>
                    <label for="four-star" className="star"><input type="radio" id="four-star" name="rating" value="4 star & above"/>4
                        star & above</label>
                    <label for="three-star" className="star"><input type="radio" id="three-star" name="rating" value="3 star & above"/>3
                        star & above</label>
                    <label for="two-star" className="star"><input type="radio" id="two-star" name="rating" value="2 star & above"/>2 star
                        & above</label>
                    <label for="one-star" className="star"><input type="radio" id="one-star" name="rating" value="1 star & above"/>1 star
                        & above</label>
                </div>
                <div className="aside-sort">
                    <h3>Sort by Price</h3>
                    <label for="low-high" className="sort"><input type="radio" name="sorting" id="low-high"/>Price-low to high</label>
                    <label for="high-low" className="sort"><input type="radio" name="sorting" id="high-low"/>Price-high to low</label>
                </div>
            </div>
        </aside>
  )
}

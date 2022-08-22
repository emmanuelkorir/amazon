import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Name Jar</p>
        <p className="product__price">
          <small>$</small>
          <strong>7.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/513C13v3MPL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

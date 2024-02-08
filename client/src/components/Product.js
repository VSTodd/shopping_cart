import React from "react";
import EditProduct from "./EditProduct"
import { useState, useEffect } from "react";

const Product = ({ product }) => {
  const [editClicked, setEdit] = useState(false);

  handleClick = () => {
    setEdit(!editClicked)
  }

  return (
    <li class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="add-to-cart">Add to Cart</button>
          <button class="edit" onClick={handleClick}>Edit</button>
        </div>
        <button class="delete-button"><span>X</span></button>
      </div>
      {editClicked ? <EditProduct product={product} /> : null}
    </li>
  )
}

export default Product;
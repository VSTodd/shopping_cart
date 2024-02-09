import React from "react";
import EditProduct from "./EditProduct"
import { useState, useEffect } from "react";

const Product = ({ product, onUpdate, onDelete }) => {
  const [editClicked, setEdit] = useState(false);

  handleClick = () => {
    setEdit(!editClicked)
  }

  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(product._id);
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
        <button onClick={handleDelete} class="delete-button"><span>X</span></button>
      </div>
      {editClicked ? <EditProduct product={product} onUpdate={onUpdate} /> : null}
    </li>
  )
}

export default Product;
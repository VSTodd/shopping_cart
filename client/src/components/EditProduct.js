import React from "react";
import { useState, useEffect } from "react";
// import { onUpdate } from "../services/items";

const EditProduct = ({ product, onUpdate }) => {
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const id = product._id; 

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedItem = { "title": name, "price": price, "quantity": quantity };
    console.log("product is: ", product)
    console.log("ID is: ", id)
    onUpdate(updatedItem, id);
    handleClick();
  }

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleUpdate} action="">
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="product-name"
            value={name}
            aria-label="Product Name"
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            id="product-price"
            value={price}
            aria-label="Product Price"
          />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
          />
        </div>

        <div class="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={handleClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
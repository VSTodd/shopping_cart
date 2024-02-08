import React from "react";
import { useState, useEffect } from "react";

const AddItem = ({ onSubmit }) => {
  const [buttonClicked, setButton] = useState(false);
  const [divClass, setClass] = useState("add-form")
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  handleClick = () => {
    setButton(!buttonClicked)
    setClass(divClass == "add-form" ? "add-form visible" : "add-form");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { "title": name, "price": price, "quantity": quantity };
    onSubmit(newItem);
    reset();
  }

  const reset = () => {
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className={divClass}>
      <p><button onClick={handleClick} class="add-product-button">Add A Product</button></p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} action="">
        <div class="input-group">
          <label for="product-name">Product Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="product-name"
            name="product-name"
            required
          />
        </div>
        <div class="input-group">
          <label for="product-price">Price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div class="input-group">
          <label for="product-quantity">Quantity:</label>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
          />
        </div>
        <div class="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddItem;
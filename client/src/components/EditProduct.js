import React from "react";

const EditProduct = ({ product }) => {
  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={product.title}
            aria-label="Product Name"
          />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={product.price}
            aria-label="Product Price"
          />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={product.quantity}
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
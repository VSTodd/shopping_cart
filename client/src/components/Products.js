import Product from "./Product";

const Products = ({ products, onUpdate, onDelete, onAddToCart}) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
      {products.map((product) => (
        <Product key={product._id} product={product} onUpdate={onUpdate} onDelete={onDelete} onAddToCart={onAddToCart} />
      ))}
      </ul>
    </div>
  )
}

export default Products;
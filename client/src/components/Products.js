import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul class="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      </ul>
    </div>
  )
}

export default Products;
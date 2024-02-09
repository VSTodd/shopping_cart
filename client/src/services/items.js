export const onUpdate = ((item, productId) => {
// need to refresh products, and refresh addProduct form
  fetch(api + "products/" + productId, {
    method: "PUT", 
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      "title": item.title,
      "quantity": item.quantity,
      "price": item.price
    })
  }).then(() => setProducts(products.concat(item)))
})
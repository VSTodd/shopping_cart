import Products from "./Products";
import AddItem from "./AddItem";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([])
  const api = "http://localhost:5001/api/";

  useEffect(() => {
    fetch(api + "products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
    }, []);

  const onSubmit = ((item) => {
// need to refresh products, and refresh addProduct form
    fetch(api + "products", {
      method: "POST", 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "title": item.title,
        "quantity": item.quantity,
        "price": item.price
      })
    }).then(() => setProducts(products.concat(item)))
  })

  const onUpdate = ((item, productId) => {
    // need to refresh products, and refresh addProduct form
    fetch(api + "products/" + productId, {
      method: "PUT", 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "title": item.title,
        "quantity": item.quantity,
        "price": item.price
      })
    }).then(() => {
      const productIndex = findById(productId);
      const tempProducts = [...products];
      tempProducts[productIndex] = item;
      setProducts(tempProducts);
    })
  })

  const onDelete = ((productId) => {
    fetch(api + "products/" + productId, {
      method: "DELETE", 
      headers: {'Content-Type':'application/json'}
    }).then(() => {
      const productIndex = findById(productId);
      const tempProducts = [...products];
      tempProducts.splice(productIndex, 1)
      setProducts(tempProducts);
    })
  })

  const findById = ((id) => {
    let foundIndex
    for (index = 0; index < products.length; index++) {
      if (products[index]._id == id) {
        foundIndex = index
        break
      }
    }
    return foundIndex
  }) 

  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        {/*<Cart />*/}
      </header>
      
      <main>
        <Products products={products} onUpdate={onUpdate} onDelete={onDelete} />
        <AddItem onSubmit={onSubmit}/>
      </main>
    </div>
  )
}

export default App;
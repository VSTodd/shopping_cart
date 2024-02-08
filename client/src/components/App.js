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
    })
  })

  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        {/*<Cart />*/}
      </header>
      
      <main>
        <Products products={products} />
        <AddItem onSubmit={onSubmit}/>
      </main>
    </div>
  )
}

export default App;
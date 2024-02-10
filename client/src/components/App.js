import Products from "./Products";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart"
import AddItem from "./AddItem";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const api = "http://localhost:5001/api/";

  useEffect(() => {
    fetch(api + "products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
    }, []);

  useEffect(() => {
    fetch(api + "cart")
      .then((res) => res.json())
      .then((data) => setCart(data))
    }, []);

  const onSubmit = ((item) => {
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
    fetch(api + "products/" + productId, {
      method: "PUT", 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "title": item.title,
        "quantity": item.quantity,
        "price": item.price
      })
    }).then(() => {
      const productIndex = findById(productId, products);
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
      const productIndex = findById(productId, products);
      const tempProducts = [...products];
      tempProducts.splice(productIndex, 1)
      setProducts(tempProducts);
    })
  })

  const onAddToCart = ((productId) => {
    fetch(api + "add-to-cart", {
      method: "POST", 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        productId
      })
    }).then(() => updateCart(productId))
  })

  const onCheckout = ((event) => {
    event.preventDefault();
    fetch(api + "checkout", {
      method: "POST", 
      headers: {'Content-Type':'application/json'},
    }).then(() => setCart([]))
  })

  const findById = ((id, array) => {
    let foundIndex = -1
    for (index = 0; index < array.length; index++) {
      if (array[index]._id == id) {
        foundIndex = index
        break
      }
    }
    return foundIndex
  }) 

  const updateCart = ((productId) => {
    const cartIndex = findById(productId, cart);
    const productIndex = findById(productId, products)
    const product = {...products[productIndex]}
    
    if (cartIndex === -1) {
      let newProduct = {...product}
      newProduct.quantity = 1;
      setCart(cart.concat(newProduct));
    } else {
      cartProduct = cart[cartIndex];
      let newProduct = {...cartProduct};
      newProduct.quantity = newProduct.quantity + 1;

      let tempCart = [...cart];
      tempCart[cartIndex] = newProduct;
      setCart(tempCart)
    }
    product.quantity = product.quantity - 1;
    const tempProducts = [...products];
    tempProducts[productIndex] = product;
    setProducts(tempProducts);
  })

  return (
    <div>
      <header>
        <h1>The Shop!</h1>
        { cart.length === 0 ? <EmptyCart/> : <Cart cart={cart} onCheckout={onCheckout}/>}
      </header>
      
      <main>
        <Products products={products} onUpdate={onUpdate} onDelete={onDelete} onAddToCart={onAddToCart}/>
        <AddItem onSubmit={onSubmit}/>
      </main>
    </div>
  )
}

export default App;
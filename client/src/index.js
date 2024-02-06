import React from "react";
import ReactDOM from "react-dom/client"

const App = () => {
  return React.createElement("main", {
    children: [
      React.createElement("div", {
        className: "product-listing",
        children: [
          React.createElement("h2", {}, "Products"),
          React.createElement("ul", {
            className: "product-list",
            children: [
              React.createElement(Product, {
                product: "Nintendo Switch",
                price: "$299.99",
                quantity: 3
              }), 
              React.createElement(Product, {
                product: "Playstation 5",
                price: "$499.99",
                quantity: 0
              }),
              React.createElement(Product, {
                product: "XBox - Series X",
                price: "$449.99",
                quantity: 8
              })
            ] 
          })
        ]
      })
    ]
  })
}

const Product = ({product, price, quantity}) => {
  return React.createElement("li", {
    className: "product",
    children: [
      React.createElement("div", {
        className: "product-details",
        children: [
          React.createElement("h3", {}, product),
          React.createElement("p", {className: "price"}, price),
          React.createElement("p", {className: "quantity"}, quantity)
        ]
      })
    ]
    
  })
}

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(React.createElement(App))
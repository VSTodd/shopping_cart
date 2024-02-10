import Item from "./Item";

const Cart = ({cart, onCheckout}) => {
  const calculateTotal = () => {
    let total = 0
    cart.forEach((item) => total += (item.price * item.quantity));
    return total.toFixed(2);
  }

  return (
    <div class="cart">
      <h2>Your Cart</h2>
      <table class="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="total">Total: ${calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
      <div class="checkout-button">
        <button class="checkout" onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;
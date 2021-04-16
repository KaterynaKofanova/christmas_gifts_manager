import React from "react";
import { cart, name } from "../types";
import {capitalizeFirstLetter, checkDiscount} from '../utils'

interface CartProps {
  cart: cart;
  setCarts: (carts: cart[]) => void;
  carts: cart[];
  setDiscount: (discount: number) => void;
}



const Cart: React.FC<CartProps> = ({ cart, setCarts, carts, setDiscount }) => {
  const handleQuantityChange = (
    name: name,
    productId: number,
    quantity: number
  ): void => {
    const updating: cart | undefined = carts.find((cart) => cart.name === name);
    if (updating) {
      const updated: cart = {
        id: updating.id,
        userId: updating.userId,
        name: updating.name,
        products: updating.products.map((product) =>
          product.id === productId
            ? { ...product, approvedQuantity: quantity }
            : product
        ),
      };
      const updatedCarts: cart[] = carts.map((cart) =>
        cart.name === name ? updated : cart
      );
      setCarts(updatedCarts);
      const discount: number = checkDiscount(updatedCarts);
      setDiscount(discount);
    }
  };


  const totalPrice: number = cart.products.reduce(
    (acc, val) => acc + val.price * val.approvedQuantity,
    0
  );
  return (
    <div className="cart">
      <h3>{capitalizeFirstLetter(cart.name.firstname)}'s Christmas wishlist</h3>
      <table>
        <colgroup>
          <col className="col1" />
          <col className="col2" />
          <col className="col3" />
          <col className="col4" />
        </colgroup>
        <tbody>
          <tr>
            <th>Gift</th>
            <th>Desired quantity</th>
            <th>Price</th>
            <th>Approved quantity</th>
          </tr>
          {cart.products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  max={product.quantity}
                  value={product.approvedQuantity}
                  onChange={(event: React.FormEvent<HTMLInputElement>) =>
                    handleQuantityChange(
                      cart.name,
                      product.id,
                      +event.currentTarget.value
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">Total price: {totalPrice.toFixed(2)}</div>
    </div>
  );
};

export default Cart;

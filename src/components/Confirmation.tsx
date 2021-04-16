import React from "react";
import { cart } from "../types";
import {capitalizeFirstLetter} from '../utils'

interface ConfirmationProps {
  carts: cart[];
  totalPrice: number;
  totalDiscount: number;
  view: string;
  setView: (view: string) => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  carts,
  totalPrice,
  totalDiscount,
  view,
  setView,
}) => {
  if (view === "Confirmation") {
    return (
      <div className="confirmation">
        <p>
          Changes were saved successfully! Here is a summary of approved and
          discarded gifts:
        </p>
        {carts.map((cart) => (
          <div key={cart.userId} className="confirm-cart">
            <h4>{capitalizeFirstLetter(cart.name.firstname)}'s</h4>
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
                  <th>Discarded quantity</th>
                  <th>Approved quantity</th>
                  <th>Approved price</th>
                </tr>
                {cart.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.quantity - product.approvedQuantity}</td>
                    <td>{product.approvedQuantity}</td>
                    <td>
                      {(product.price * product.approvedQuantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="confirm-cart-totals">
                  <td>Total:</td>
                  <td>
                    {cart.products.reduce((acc, val) => {
                      acc += val.quantity - val.approvedQuantity;
                      return acc;
                    }, 0)}
                  </td>
                  <td>
                    {cart.products.reduce((acc, val) => {
                      acc += val.approvedQuantity;
                      return acc;
                    }, 0)}
                  </td>
                  <td>
                    {cart.products
                      .reduce((acc, val) => {
                        acc += val.approvedQuantity * val.price;
                        return acc;
                      }, 0)
                      .toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <div className="totals">
          <div>Total Price: {totalPrice.toFixed(2)}</div>
          <div>Total Discount: {totalDiscount.toFixed(2)}</div>
          <div>
            Price with discount: {(totalPrice - totalDiscount).toFixed(2)}
          </div>
        </div>
        <button onClick={() => setView("AllCarts")}>Go back</button>
      </div>
    );
  } else {
    return null;
  }
};

export default Confirmation;

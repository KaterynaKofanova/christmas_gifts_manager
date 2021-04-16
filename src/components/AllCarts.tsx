import React, { useState } from "react";
import { cart, apiCartPost } from "../types";
import Cart from "./Cart";
import axios from "axios";

interface AllCartsProps {
  carts: cart[];
  totalPrice: number;
  totalDiscount: number;
  setCarts: (carts: cart[]) => void;
  setDiscount: (discount: number) => void;
  view: string;
  setView: (view: string) => void;
}

const AllCarts: React.FC<AllCartsProps> = ({
  carts,
  setCarts,
  setDiscount,
  totalPrice,
  totalDiscount,
  view,
  setView,
}) => {
  const [instructions, setInstructions] = useState<boolean>(false);
  const handleSave = (): void => {
    for (let cart of carts) {
      const approved: apiCartPost = {
        userId: cart.userId,
        date: "date",
        products: cart.products
          .map((product) => {
            return {
              productId: product.id,
              quantity: product.approvedQuantity,
            };
          })
          .filter((product) => product.quantity !== 0),
      };
      const discarded: apiCartPost = {
        userId: cart.userId,
        date: "date",
        products: cart.products
          .map((product) => {
            return {
              productId: product.id,
              quantity: product.quantity - product.approvedQuantity,
            };
          })
          .filter((product) => product.quantity !== 0),
      };
      try {
        axios.post("https://fakestoreapi.com/carts", approved);
        axios.post("https://fakestoreapi.com/carts", discarded);
      } catch (error) {
        console.error(error.message);
      }
    }
    setView("Confirmation");
  };
  if (view === "AllCarts") {
    if (carts.length < 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <span className="loader"></span> Loading data...
        </div>
      );
    } else {
      return (
        <div className="allCarts">
          {instructions ? (
            <div className="instructions">
              <p>Welcome to Droppe Xmas!</p>
              <p>
                Here you can see all your children's wishlists for Christmas
                gifts.
              </p>
              <p>You can approve items in the 'Approved quantity' column.</p>
              <p>
                If you approve the same product in different children's
                wishlists you can get a discount for it:
                <br /> 20% if it is approved in 2 lists, 30% if in 3 lists and
                so on.
              </p>
              <p>
                You can see your current discount on the botton of the page.
              </p>
              <button onClick={() => setInstructions(false)}>Close</button>
            </div>
          ) : (
            <button
              onClick={() => setInstructions(true)}
              style={{ marginTop: "1em" }}
            >
              Read instructions
            </button>
          )}

          {carts.map((cart) => (
            <Cart
              cart={cart}
              setCarts={setCarts}
              carts={carts}
              setDiscount={setDiscount}
              key={cart.userId}
            />
          ))}
          <div className="totals">
            <div>Total Price: {totalPrice.toFixed(2)}</div>
            <div>Total Discount: {totalDiscount.toFixed(2)}</div>
            <div>
              Price with discount: {(totalPrice - totalDiscount).toFixed(2)}
            </div>
          </div>
          <button onClick={handleSave} id="btn-save">
            Save
          </button>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default AllCarts;

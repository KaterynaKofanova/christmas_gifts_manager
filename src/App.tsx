import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { cart, product, apiCart, apiProduct, apiUser } from "./types";
import AllCarts from "./components/AllCarts";
import Confirmation from "./components/Confirmation";
import { FaTree, FaGifts } from "react-icons/fa";

const App: React.FC = () => {
  const [carts, setCarts] = useState<cart[]>([]);
  const [totalDiscount, setDiscount] = useState<number>(0);
  const [view, setView] = useState<string>("AllCarts");

  const fetchCarts = async () => {
    try {
      const resp = await axios.get<apiCart[]>("https://fakestoreapi.com/carts");
      const carts: apiCart[] = resp.data.reduce((acc: apiCart[], cart) => {
        const userExists = acc.find(({ userId }) => cart.userId === userId);
        if (!userExists) {
          acc.push(cart);
        }
        return acc;
      }, []);
      let cartsReady: cart[] = [];
      for (let cart of carts) {
        const resp = await axios.get<apiUser>(
          `https://fakestoreapi.com/users/${cart.userId}`
        );
        let name = resp.data.name;
        let products: product[] = [];
        for (let product of cart.products) {
          const resp = await axios.get<apiProduct>(
            `https://fakestoreapi.com/products/${product.productId}`
          );
          const productInfo = resp.data;
          products.push({
            id: productInfo.id,
            title: productInfo.title,
            price: productInfo.price,
            category: productInfo.category,
            description: productInfo.description,
            image: productInfo.image,
            quantity: product.quantity,
            approvedQuantity: 0,
          });
        }
        cartsReady.push({
          id: cart.id,
          userId: cart.userId,
          name,
          products,
        });
      }
      setCarts(cartsReady);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  useEffect(()=> {
    window.scrollTo(0,0)

  }, [view])

  const totalPrice: number = carts.reduce(
    (acc, val) =>
      acc +
      val.products.reduce(
        (acc, val) => acc + val.price * val.approvedQuantity,
        0
      ),
    0
  );

  return (
    <div className="App">
      <div className="header">
        <h2 className="header-content">
          <FaGifts /> Christmas Gifts Manager <FaTree />
        </h2>
      </div>
      <div className="content">
        <AllCarts
          carts={carts}
          setCarts={setCarts}
          setDiscount={setDiscount}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          view={view}
          setView={setView}
        />
        <Confirmation
          carts={carts}
          totalPrice={totalPrice}
          totalDiscount={totalDiscount}
          view={view}
          setView={setView}
        />
      </div>
    </div>
  );
};

export default App;

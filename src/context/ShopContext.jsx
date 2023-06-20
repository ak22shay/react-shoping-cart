import { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext();

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems((prev) => {
      if (prev.hasOwnProperty(item)) {
        return { ...prev, [item]: prev[item] + 1 };
      } else {
        return { ...prev, [item]: 1 };
      }
    });
  };
  const removeFromCart = (item) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[item] === 1) {
        delete updated[item];
      } else {
        updated[item] -= 1;
      }
      return updated;
    });
    console.log(totalCartItems);
  };
  const deleteFromcart = (item) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[item];
      return updated;
    });
  };
  useEffect(() => {
    setTotalCartItems(
      Object.values(cartItems).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );
    setTotalCartPrice(() => {
      let total = 0;
      for (const item in cartItems) {
        const prod_info = PRODUCTS.find((prod) => prod.id === Number(item));
        total += prod_info.price * cartItems[item];
      }
      return total;
    });
  });
  const restAll = () => {
    setCartItems({});
  };

  const ShopContextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCartItems,
    deleteFromcart,
    totalCartPrice,
    restAll,
  };
  return (
    <ShopContext.Provider value={ShopContextValues}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

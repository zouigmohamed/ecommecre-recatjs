import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; 

export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0);
  const [total , setTotal] = useState(0)
  useEffect(() => {
    if (cart) {
      const totalPrice = cart.reduce((accumulator, currentIem) => {
        return accumulator + currentIem.price * currentIem.amount
      }, 0)
      setTotal(totalPrice)
    }

  }, [cart])
  
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentIem) => {
        return accumulator + currentIem.amount
      }, 0)
      setItemAmount(amount)
    }

  },[cart])
  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 }
    //check if is already added 
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    //if cart item is already added to the cart 
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      });
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }
  const clearCart = () => {
    setCart([])
  }
  const incrementAmount = (id) => {
    const item = cart.find((item) => item.id === id)
    addToCart(id , item)
  }
  const decrementAmount = (id) => {
    const item = cart.find((item) => {
      return item.id === id
    });
    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: Math.max(item.amount - 1, 0) }
        } else {
          return item;
        }
      });
      setCart(newCart)
    }
    if (item.amount < 2) {
      removeFromCart(id)
    }
  }
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  return <CartContext.Provider value={{ total ,addToCart , cart , clearCart , incrementAmount , decrementAmount , removeFromCart , itemAmount}} >{children}</CartContext.Provider>;
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CartProvider;

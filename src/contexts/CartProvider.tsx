import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}


export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id)

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
        )
      }
      return [...prevCart, item]
    })
  }

  function removeFromCart(id: string) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  function updateQuantity(id: string, quantity: number) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartQuantity}}>
      {children}
    </CartContext.Provider>
  )
}
import { createContext } from 'react'

interface CartItem {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void; 
  cartQuantity: number;
}

export const CartContext = createContext({} as CartContextData)
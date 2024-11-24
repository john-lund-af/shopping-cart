import React from 'react';
import { Action } from "../types/ActionTypes";
import ShoppingCartItem from '../types/ShoppingCartItem';

type ShoppingCartContextType = {
  state: ShoppingCartItem[],
  dispatch: React.Dispatch<Action>,
  isCartOpen: boolean,
  setIsCartOpen: (value: React.SetStateAction<boolean>) => void
}

const ShoppingCartContext = React.createContext({} as ShoppingCartContextType);

export default ShoppingCartContext;
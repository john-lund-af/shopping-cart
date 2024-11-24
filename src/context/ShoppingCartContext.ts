import React from 'react';
import { Action } from "../types/ActionTypes";
import ShoppingCartItem from '../types/ShoppingCartItem';

type ShoppingCartContextType = {
  state: ShoppingCartItem[],
  dispatch: React.Dispatch<Action>;
}

const ShoppingCartContext = React.createContext({} as ShoppingCartContextType);

export default ShoppingCartContext;
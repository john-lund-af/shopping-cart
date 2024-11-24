import { ReactNode, useReducer, useState } from "react"
import ShoppingCartContext from "./ShoppingCartContext"
import ShoppingCartItem from '../types/ShoppingCartItemType';
import { Action, ActionType } from "../types/ActionTypes";

type ShoppingCartContextProviderProps = {
  children: ReactNode
}

function reducer(state: ShoppingCartItem[], action: Action): ShoppingCartItem[] {
  switch (action.actionType) {
    case ActionType.REMOVE:
      return state.filter(item => item.id !== action.itemId);
    case ActionType.DECREASE:
      return state.map(item =>
        item.id === action.itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    case ActionType.INCREASE: {
      if (!state.find(item => item.id === action.itemId))
        return [...state, { id: action.itemId, quantity: 1 }];
      return state.map(item => item.id === action.itemId ? { ...item, quantity: item.quantity + 1 } : item);
    }
  }

  return state;
}


const ShoppingCartContextProvider = ({ children }: ShoppingCartContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return <ShoppingCartContext.Provider value={{ state, dispatch, isCartOpen, setIsCartOpen }}>{children}</ShoppingCartContext.Provider>
}

export default ShoppingCartContextProvider;
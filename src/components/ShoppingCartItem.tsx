import { StyledShoppingCartItem } from "./styles/ShoppingCartItem.styled";
import { formatCurrency } from '../utils/formatCurrency';
import ShoppingCartItemType from "../types/ShoppingCartItemType";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { ActionType } from "../types/ActionTypes";

function ShoppingCartItem({ id, title, thumbnail, price, quantity }: ShoppingCartItemType) {
  const { dispatch } = useContext(ShoppingCartContext);

  return <StyledShoppingCartItem>
    <h3>{title} <span style={{ color: 'green' }}>x{quantity}</span></h3>
    <img src={thumbnail} alt={title} height="50px" />
    <div>
      <span>{formatCurrency(price! * quantity)}</span>&nbsp;<button onClick={() => dispatch({ actionType: ActionType.REMOVE, itemId: id })}>X</button>
    </div>
  </StyledShoppingCartItem>;
}

export default ShoppingCartItem;

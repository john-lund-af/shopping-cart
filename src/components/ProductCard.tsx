import { useContext } from "react";
import { StyledProductCard } from "./styles/ProductCard.styled";
import Product from "../types/Product";
import { formatCurrency } from "../utils/formatCurrency";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { ActionType } from "../types/ActionTypes";

function ProductCard({ id, title, price, images }: Product) {
  const { state, dispatch } = useContext(ShoppingCartContext);

  const quantity = state.find(item => item.id === id)?.quantity || 0;

  const footerContent = () => {
    if (quantity > 0) {
      return (<div className="small-btns">
        <div>
          <button onClick={() => quantity > 1 ? dispatch({ actionType: ActionType.DECREASE, itemId: id }) : dispatch({ actionType: ActionType.REMOVE, itemId: id })}>-</button>
          &nbsp;<span><span><strong>{quantity}</strong></span>&nbsp;in cart</span>
          &nbsp;<button onClick={() => dispatch({ actionType: ActionType.INCREASE, itemId: id })}>+</button>
        </div>
        <div>
          <button onClick={() => dispatch({ actionType: ActionType.REMOVE, itemId: id })}>Remove</button>
        </div>
      </div>);
    }
    return <button onClick={() => dispatch({ actionType: ActionType.INCREASE, itemId: id })} className="big-btn">+ Add to Cart</button>;
  }

  return <StyledProductCard>
    <div className="header">
      <img src={images[0]} alt={title} height="250px" />
    </div>
    <div className="body">
      <span>{title}</span><span>{formatCurrency(price)}</span>
    </div>
    <div className="footer">
      {footerContent()}
    </div>
  </StyledProductCard>;
}

export default ProductCard;

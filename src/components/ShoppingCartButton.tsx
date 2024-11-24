import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StyledShoppingCartButton } from "./styles/ShoppingCartButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

function ShoppingCartButton() {
  const { state, setIsCartOpen } = useContext(ShoppingCartContext);

  const totalCount = state.reduce((acc, currItem) => acc + currItem.quantity, 0);

  return <StyledShoppingCartButton onClick={() => setIsCartOpen(true)}>
    <FontAwesomeIcon icon={faCartShopping} />
    <div id="itemsCount">{totalCount}</div>
  </StyledShoppingCartButton>;
}

export default ShoppingCartButton;

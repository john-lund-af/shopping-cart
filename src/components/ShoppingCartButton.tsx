import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StyledShoppingCartButton } from "./styles/ShoppingCartButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

function ShoppingCartButton() {
  const { state } = useContext(ShoppingCartContext);

  const totalCount = state.reduce((acc, currItem) => acc + currItem.quantity, 0);

  return <StyledShoppingCartButton>
    <FontAwesomeIcon icon={faCartShopping} />
    <div id="itemsCount">{totalCount}</div>
  </StyledShoppingCartButton>;
}

export default ShoppingCartButton;

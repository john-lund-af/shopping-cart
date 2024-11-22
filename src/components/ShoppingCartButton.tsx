import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StyledShoppingCartButton } from "./styles/ShoppingCartButton.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShoppingCartButton() {
  return <StyledShoppingCartButton>
    <FontAwesomeIcon icon={faCartShopping} />
    <div id="itemsCount">3</div>
  </StyledShoppingCartButton>;
}

export default ShoppingCartButton;

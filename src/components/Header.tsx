import NavBar from "./NavBar";
import ShoppingCartButton from "./ShoppingCartButton";
import { StyledHeader } from "./styles/Header.styled";


function Header() {
  return (<StyledHeader>
    <NavBar />
    <ShoppingCartButton />
  </StyledHeader>);
}

export default Header;

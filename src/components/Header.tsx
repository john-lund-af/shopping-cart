import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./NavBar";
import { StyledHeader } from "./styles/Header.styled";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (<StyledHeader>
    <NavBar />
    <button><FontAwesomeIcon icon={faCartShopping} /></button>
  </StyledHeader>);
}

export default Header;

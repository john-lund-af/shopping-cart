import NavBar from "./NavBar";
import { Container } from "./styles/Container.styled";
import { StyledHeader } from "./styles/Header.styled";

function Header() {
  return (<StyledHeader>
    <Container>
      <NavBar />
    </Container>
  </StyledHeader>);
}

export default Header;

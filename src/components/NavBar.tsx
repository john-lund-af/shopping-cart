import { StyledNavBar } from "./styles/NavBar.styled";
import { NavLink } from 'react-router-dom';

function NavBar() {
  return <StyledNavBar>
    <ul>
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'activeLink' : ''}>HOME</NavLink></li>
      <li><NavLink to="/store" className={({ isActive }) => isActive ? 'activeLink' : ''}>STORE</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? 'activeLink' : ''}>ABOUT</NavLink></li>
    </ul>
  </StyledNavBar>;
}

export default NavBar;

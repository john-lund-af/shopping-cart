import { createPortal } from "react-dom";
import { StyledShoppingCart } from "./styles/ShoppingCart.styled";
import { useContext } from "react";
import ShoppingCartContext from '../context/ShoppingCartContext';

function ShoppingCart() {
  const modalElement = document.getElementById("modal")!;
  const { setIsCartOpen } = useContext(ShoppingCartContext);

  return createPortal(<StyledShoppingCart>
    <header className="header">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div><button onClick={() => setIsCartOpen(false)}>X</button></div>
    </header>
    <main>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum similique necessitatibus commodi, omnis praesentium aperiam voluptate nobis nam doloremque minus natus voluptates nesciunt labore, eligendi eveniet? Quaerat beatae dolorem vel.
    </main>
  </StyledShoppingCart>, modalElement);
}

export default ShoppingCart;

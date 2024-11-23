import { createPortal } from "react-dom";
import { StyledShoppingCart } from "./styles/ShoppingCart.styled";

function ShoppingCart() {
  const modalElement = document.getElementById("modal")!;

  return createPortal(<StyledShoppingCart>
    <header className="header">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div><button>X</button></div>
    </header>
    <main>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum similique necessitatibus commodi, omnis praesentium aperiam voluptate nobis nam doloremque minus natus voluptates nesciunt labore, eligendi eveniet? Quaerat beatae dolorem vel.
    </main>
  </StyledShoppingCart>, modalElement);
}

export default ShoppingCart;

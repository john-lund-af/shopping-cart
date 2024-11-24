import { createPortal } from "react-dom";
import { StyledShoppingCart } from "./styles/ShoppingCart.styled";
import { useContext, useEffect, useState } from "react";
import ShoppingCartContext from '../context/ShoppingCartContext';
import axios from 'axios';
import ShoppingCartItem from "./ShoppingCartItem";
import ShoppingCartItemType from "../types/ShoppingCartItemType";

function ShoppingCart() {
  const modalElement = document.getElementById("modal")!;
  const { state, setIsCartOpen } = useContext(ShoppingCartContext);
  const [productsState, setProductsState] = useState<ShoppingCartItemType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: ShoppingCartItemType[] = [];
      try {
        for (const cartItem of state) {
          const response = await axios.get(`https://dummyjson.com/products/${cartItem.id}`);
          fetchedProducts.push({ ...response.data, quantity: cartItem.quantity });
        }
        setProductsState(fetchedProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [state])

  return createPortal(<StyledShoppingCart>
    <header className="header">
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div><button onClick={() => setIsCartOpen(false)}>X</button></div>
    </header>
    <main>
      <div id="listItems">{productsState.map(item => <ShoppingCartItem {...item} key={item.id} />)}</div>
    </main>
  </StyledShoppingCart>, modalElement);
}

export default ShoppingCart;

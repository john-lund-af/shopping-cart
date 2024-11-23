import { useState } from "react";
import { StyledProductCard } from "./styles/ProductCard.styled";
import Product from "../types/Product";
import { formatCurrency } from "../utils/formatCurrency";

function ProductCard({ title, price, images }: Product) {
  const [itemsCount] = useState<number>(1);

  const footerContent = () => {
    if (itemsCount === 0)
      return <button className="big-btn">+ Add to Cart</button>;
    return (<div className="small-btns">
      <div><button>-</button>&nbsp;<span><span>{itemsCount}</span>&nbsp;in cart</span>&nbsp;<button>+</button></div>
      <div><button>Remove</button></div>
    </div>);
  }

  return <StyledProductCard>
    <div className="header">
      <img src={images[0]} alt={title} height="250px" />
    </div>
    <div className="body">
      <span>{title}</span><span>{formatCurrency(price)}</span>
    </div>
    <div className="footer">
      {footerContent()}
    </div>
  </StyledProductCard>;
}

export default ProductCard;

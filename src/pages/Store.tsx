import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../types/Product';
import ProductCard from '../components/ProductCard';

interface ProductData {
  products: Product[]
}

function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get<ProductData>("https://dummyjson.com/products?limit=10");
        setProducts(response.data.products);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log("Axios error:", err.message);
        } else {
          console.log("Error:", err);
        }
        throw (err);
      }
    }
    fetchProducts();
  }, [])

  return (<div>
    <h1>Store</h1>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }} className="product-list">
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>
  </div>);
}

export default Store;

# Beauty Basket 🛍️  

Beauty Basket is a demo shopping cart application built with React 18 and styled using the `styled-components` library. It allows users to browse beauty products, add items to their cart, view the selected quantities, and see the total cost. The application fetches product data from the [DummyJSON API](https://dummyjson.com/).  

This project is designed to showcase modern front-end development practices using Vite as the build tool and functional components in React.  

---

## Features  
- **Dynamic Shopping Cart**: Add and remove products with live updates to the cart quantity and see the total cost.  
- **Fetch Data from API**: Products are dynamically fetched from the DummyJSON API.  
- **Styled with styled-components**: Clean, reusable, and scoped styling using `styled-components`.  
- **Modern React Development**: Includes functional components, hooks (useReducer, useContext, useState), and context for state management.  
- **Routing**: Seamless navigation using `react-router-dom`.  

---

## Tech Stack  
- **React 18**  
- **Vite** (Build Tool)  
- **TypeScript**  
- **styled-components** (CSS-in-JS)  
- **react-router-dom** (Routing)  
- **axios** (HTTP Requests)  

---

## Components  
### Functional Components  
| Component                 | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|  
| `App.tsx`                 | Main entry point of the application, sets up routes and context.           |  
| `Home.tsx`                | Displays a welcome message or landing page for the app.                    |  
| `Store.tsx`               | Fetches and displays the list of products from the DummyJSON API.           |  
| `About.tsx`               | Information about the Beauty Basket application.                           |  
| `Header.tsx`              | Contains the logo and navigation menu.                                     |  
| `NavBar.tsx`              | Provides navigation links between pages (Home, Store, About)         |  
| `ProductCard.tsx`         | Displays individual product details, including an "Add to Cart" button.    |  
| `ShoppingCart.tsx`        | Displays all selected items in the cart and calculates the total cost.      |  
| `ShoppingCartButton.tsx`  | A button with a cart icon that shows the total quantity of items in the cart. |  
| `ShoppingCartItem.tsx`    | Displays individual cart items with cost and quantity and with option to remove.   |  
| `ShoppingCartContextProvider.tsx` | Provides context for managing cart state across the app.             |  

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/john-lund-af/shopping-cart.git
   cd shopping-cart 

2. Install dependencies
  ```bash
  npm install
```

3. Start the development server:
  ```bash
  npm run dev    
```

4. Open your browser and navigate to http://localhost:5173.

### Scripts

Command	Description

npm run dev	Starts the development server using Vite.
npm run build	Builds the application for production.
npm run lint	Lints the project files using ESLint.
npm run preview	Previews the production build locally.

## Dependencies
Main
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.28.0
- styled-components: ^6.1.13
- axios: ^1.7.7

Development
- vite: ^5.4.10
- typescript: ~5.6.2
- eslint: ^9.13.0

## API Used
This application uses the DummyJSON API to fetch product data.

## License
This project is licensed under the MIT License. 
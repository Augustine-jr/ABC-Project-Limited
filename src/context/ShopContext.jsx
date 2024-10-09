// 1. Importing `createContext` from React
// This is used to create a "context" — a special tool that helps us share data across different parts of the website.
import { createContext } from "react";

// 2. Importing products from a separate file.
// The `products` come from a file called `assets/assets.js` — it's like a storage where we keep the products for our website.
import { products } from "../assets/assets";

// 3. Create a new context called `ShopContext`.
// This is the special "box" that will store all the important information for our shop (like products, currency, and delivery fee).
export const ShopContext = createContext();

// 4. Creating the `ShopContextProvider` component.
// This component will "provide" (give) the important information to the rest of the website.
const ShopContextProvider = (props) => {
  
  // 5. Setting up some important information
  const currency = '₦';  // The currency symbol we use for our shop is the Naira symbol (₦).
  const delivery_fee = 10;  // The delivery fee for shipping is 10 Naira.

  // 6. Putting all the important information into an object called `value`.
  // This is like packing everything we want to share into a single "box".
  const value = {
    products,       // All the products in the shop
    currency,       // The currency symbol (₦)
    delivery_fee,   // The delivery fee (10 Naira)
    // We can add more things to this box if needed later.
  }

  // 7. Returning the `ShopContext.Provider`
  // This is the special "box" (provider) where we put all our important information.
  // Anything inside this provider (like other parts of the website) can access the information from `value`.
  return (
    <ShopContext.Provider value={value}>
      {props.children}  {/* This means that anything inside this provider can use the data */}
    </ShopContext.Provider>
  );
}

// 8. Export the ShopContextProvider component so other parts of the app can use it.
export default ShopContextProvider;
 
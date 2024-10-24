// Importing necessary libraries and types
import { createContext, ReactNode } from "react";
// createContext is used to create a context for our shop data.
// ReactNode allows us to define children that can be passed to the provider.

import { products } from "../assets/assets"; // Importing products from assets
import { ShopContextType } from "../types"; // Importing types for context

// Create the ShopContext with an initial value of undefined
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Creating the ShopContextProvider component to provide shop data to the app
const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  // Setting up important information for the shop
  const currency = '₦'; // Currency symbol for the shop
  const delivery_fee = 10; // Delivery fee for shipping

  // Packaging all the important information into a value object
  const value = {
    products, // All the products in the shop
    currency, // The currency symbol (₦)
    delivery_fee, // The delivery fee (10 Naira)
  };

  // Returning the context provider with the value
  return (
    <ShopContext.Provider value={value}>
      {children}  {/* Render any children inside the provider */}
    </ShopContext.Provider>
  );
}

// Exporting the ShopContextProvider component for use in the app
export default ShopContextProvider;

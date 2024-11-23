// Importing necessary libraries and types
import React, { createContext, ReactNode, useEffect, useState } from "react"; 
import { products } from "../assets/assets";  // Import your products 
import { ShopContextType, CartItems } from "../types"; // Import the context type and CartItems



// Create the ShopContext with a default value to avoid 'undefined'
export const ShopContext = createContext<ShopContextType>({
  products: [], // Default: empty product array
  currency: '₦', // Default: Naira currency symbol
  delivery_fee: 10, // Default: delivery fee
  search: '', // Default: empty search string
  setSearch: () => {}, // Default: no-op function
  showSearch: false, // Default: search bar hidden
  setShowSearch: () => {}, // Default: no-op function
  cartItems: {}, // Default: empty cart items
  addToCart: () => {}, // Default: no-op function
});

// Creating the ShopContextProvider component to provide shop data to the app
export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Setting up important information for the shop
  const currency = '₦'; // Currency symbol for the shop
  const delivery_fee = 10; // Delivery fee for shipping
  const [search,setSearch] = useState(''); // State for search query
  const [showSearch,setShowSearch] = useState(false); // State for showing or hiding search bar
  const [cartItems,setCartItems] = useState<CartItems>({});


  const addToCart = async (itemId: string, size: string) => {
       
    let cartData = structuredClone(cartItems)

   if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    }
    else {
      cartData[itemId][size] = 1;
    }
   }
   else {
    cartData[itemId] = {}
    cartData[itemId][size] = 1;
   }
    setCartItems(cartData);
  }

  useEffect(()=>{
     console.log(cartItems);
  },[cartItems])

  // Packaging all the important information into a value object
  const value: ShopContextType = {
    products, // All the products in the shop
    currency, // The currency symbol (₦)
    delivery_fee, // The delivery fee (10 Naira)
    search, // The search query state
    setSearch, // Function to update the search query
    showSearch, // State for showing or hiding search bar
    setShowSearch, // Function to update the showSearch state
    cartItems, // Use the state variable instead of the type
    addToCart, // Use the function directly
  };

  // Returning the context provider with the value
  return (
    <ShopContext.Provider value={value}>
      {children} {/* Render any children inside the provider */}
    </ShopContext.Provider>
  );
};

// Exporting the ShopContextProvider component for use in the app
export default ShopContextProvider;

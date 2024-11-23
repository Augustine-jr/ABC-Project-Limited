// Importing necessary libraries and types
import React, { createContext, ReactNode, useCallback, useEffect, useState, useMemo} from "react"; 
import { products } from "../assets/assets";  // Import your products 
import { ShopContextType, CartItems } from "../types"; // Import the context type and  types
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Create the ShopContext with a default value to avoid 'undefined' when it's used before being provided
export const ShopContext = createContext<ShopContextType>({
  products: [], // Default: empty product array
  currency: '₦', // Default: Naira currency symbol
  delivery_fee: 10, // Default: delivery fee
  search: '', // Default: empty search string
  setSearch: () => {}, // Default: no-op function for search setter
  showSearch: false, // Default: search bar hidden
  setShowSearch: () => {}, // Default: no-op function for search visibility setter
  cartItems: {}, // Default: empty cart object
  addToCart: () => {}, // Default: no-op  for adding items to the cart
  getCartCount: () => 0, // Default: returns 0 when calculating the cart count
});

// Creating the ShopContextProvider component to provide shop data to the entire app
export const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Setting up important static information for the shop
  const currency = '₦'; // Currency symbol for the shop
  const delivery_fee = 10; // Delivery fee for shipping
  const [search,setSearch] = useState(''); // State for search query
  const [showSearch,setShowSearch] = useState(false); // State to control the visibility of the 
  const [cartItems,setCartItems] = useState<CartItems>({}); // State to store cart items (object format)

// Function to add an item to the cart
const addToCart = useCallback((itemId: string, size: string) => {
  // Check if the size is  provided
        if (!size) {
      toast.error("Please select a size");
      return;
    }
 
// Update the cart by copying the previous cart and modifying it
  setCartItems((prevCartItems) => {
    const updatedCart = { ...prevCartItems }; // Create a copy of the previous cart

    // If the item doesn't exist in the cart yet, initialize it
    if (!updatedCart[itemId]) updatedCart[itemId] = {};
    // Update the size of the item in the cart, or initialize it if it doesn't exist
    updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;

    return updatedCart; // Return the updated cart
  });
}, []); // The empty dependency array means the function is memoized and does not depend on any state 

// Function to calculate the total number of items in the cart (across all sizes)
const getCartCount = useCallback(() => {
  // Reduce the cartItems object to count all iems, considering different sizes
  return Object.values(cartItems).reduce(
    (totalCount, sizes) =>
      totalCount + Object.values(sizes || {}).reduce((sum, count) => sum + count, 0), // Sum up the counts for each size
    0 // Initial total count is 0
  );
}, [cartItems]); // Dependency on cartItems to recalculate the count when cart items change

// Memoize the context value to avoid unnecessary re-renders of consumers
const value = useMemo(
  () => ({
    products, //Products data from assests
    currency, // Currency sybmol
    delivery_fee, // Delivery fee (static value)
    search,    // Search query state
    setSearch, // Function to update the search query
    showSearch, // Search visibility state
    setShowSearch, // Function to update search visibility state
    cartItems, // Cart items object
    addToCart, // function to add items to the cart
    getCartCount, // function to get the total cart count
  }),
  [products, currency, delivery_fee, search, showSearch, cartItems, addToCart, getCartCount] // Re-memoize whenever any of these dependencies change
);

// Returning the context provider with the value, which will be available to all components inside the provider
  return (
    <ShopContext.Provider value={value}>
      {children} {/* Render any children inside the provider */}
    </ShopContext.Provider>
  );
};

// Exporting the ShopContextProvider component for use in the app
export default ShopContextProvider;

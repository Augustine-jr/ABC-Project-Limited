// Defining the structure of a Product
export interface Product {
  _id: string; // Unique identifier for each product
  name: string; // The name of the product
  image?: string[]; // Optional array of images 
  price: number; // The price of the product
  bestseller?: boolean; // Optional flag to indicate if the product is a bestseller
  description: string; // Add this line to include the description property
  sizes: string[];
  category: string;
  subCategory: string;
  oldPrice?: number;
  discount: number; // Add this line
  rating?: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// CartItems interface (for cart structure)
export interface CartItems {
  [itemId: string]: {
    [size: string]: number; // Size as key, quantity as value
  };
}

// Defining the structure of the ShopContext
export interface ShopContextType {
  products: Product[]; // An array of products
  currency: string; // The currency symbol (₦)
  delivery_fee: number; // The delivery fee amount
     search: string; // Added search property
    setSearch: React.Dispatch<React.SetStateAction<string>>; // Added setSearch property
    showSearch: boolean; // Ensure showSearch is also included if not already
    setShowSearch: (show: boolean) => void; // Add this line
     cartItems: CartItems;
  addToCart: (itemId: string, size: string) => void;
  getCartCount: () => number; // {{ edit_1 }} Added getCartCount to the type 
   removeFromCart: (itemId: string, size: string) => void;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  getCartSubtotal: () => number;
  navigate: (path: string) => void; 
}
// Defining the structure of a Product
export interface Product {
  _id: string; // Unique identifier for each product
  name: string; // The name of the product
  image?: string[]; // Optional array of images 
  price: number; // The price of the product
  bestseller?: boolean; // Optional flag to indicate if the product is a bestseller
  description: string; // Add this line to include the description property
  sizes: string[];
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

// Defining the structure of the ShopContext
export interface ShopContextType {
  products: Product[]; // An array of products
  currency: string; // The currency symbol (₦)
  delivery_fee: number; // The delivery fee amount
     search: string; // Added search property
    setSearch: React.Dispatch<React.SetStateAction<string>>; // Added setSearch property
    showSearch: boolean; // Ensure showSearch is also included if not already
    setShowSearch: (show: boolean) => void; // Add this line
}
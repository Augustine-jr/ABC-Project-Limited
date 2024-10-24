// Defining the structure of a Product
export interface Product {
  _id: string; // Unique identifier for each product
  name: string; // The name of the product
  image?: string[]; // Optional array of images 
  price: number; // The price of the product
  bestseller?: boolean; // Optional flag to indicate if the product is a bestseller
}

// Defining the structure of the ShopContext
export interface ShopContextType {
  products: Product[]; // An array of products
  currency: string; // The currency symbol (₦)
  delivery_fee: number; // The delivery fee amount
}
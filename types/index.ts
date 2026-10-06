export type ProductSize = "S" | "M" | "L" | "XL" | "XXL";

export type ProductTag =
  | "Mountain"
  | "Minimal"
  | "Quotes"
  | "Adventure"
  | "Hoodies"
  | "T-Shirts"
  | "Best Seller"
  | "New"
  | "Customizable";

export type ProductFilter = ProductTag | "All";

export type ProductColor = {
  name: string;
  value: string;
};

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  price: number;
  rating: number;
  badge: string;
  description: string;
  details: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  tags: ProductTag[];
  images: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  message: string;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  verified: boolean;
}

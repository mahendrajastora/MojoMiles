import type { NavItem, ProductFilter } from "@/types";

export const siteName = "Mojo Miles";
export const siteTagline = "Wear Your Escape.";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Customize", href: "/customize" },
  { label: "Cart", href: "/cart" },
  { label: "Profile", href: "/profile" },
];

export const footerNavigation: NavItem[] = [
  { label: "Orders", href: "/orders" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Support", href: "/#contact" },
  { label: "Privacy", href: "/#privacy" },
];

export const productFilters: ProductFilter[] = [
  "All",
  "Hoodies",
  "T-Shirts",
  "Minimal",
  "Adventure",
  "Best Seller",
  "New",
  "Customizable",
];

export const aiStyles = [
  "Anime",
  "Minimal Vector",
  "Sketch",
  "Watercolor",
  "Cyberpunk",
  "Comic",
  "Pop Art",
] as const;

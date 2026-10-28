import type { StaticImageData } from "next/image";
import storefront from "../../public/projects/askonce/storefront.png";
import productDetails from "../../public/projects/askonce/product-details.png";
import cart from "../../public/projects/askonce/cart.png";
import checkout from "../../public/projects/askonce/checkout.png";

export interface ProjectScreenshot {
  id: string;
  title: string;
  image: StaticImageData;
  original: string;
  alt: string;
  caption: string;
}

// Inspected public demo captures, in customer-journey order.
export const askOnceScreenshots = [
  {
    id: "storefront",
    title: "Public Storefront",
    image: storefront,
    original: "/projects/askonce/storefront.png",
    alt: "AskOnce demo storefront with product search, category navigation, language controls, and a grid of clothing products with prices.",
    caption: "Search and category navigation sit alongside product cards with prices and product links, introducing the browsing experience before product selection.",
  },
  {
    id: "product-details",
    title: "Product Details & Variants",
    image: productDetails,
    original: "/projects/askonce/product-details.png",
    alt: "Linen shirt detail page showing its photo, price, available stock, color and size options, selected variation, and quantity controls.",
    caption: "The product view brings price, stock availability, color, size, and quantity together. The capture shows a selected variation and an unavailable color option.",
  },
  {
    id: "cart",
    title: "Shopping Cart",
    image: cart,
    original: "/projects/askonce/cart.png",
    alt: "AskOnce demo cart with three selected products, variation labels, quantity and removal controls, item totals, and a Checkout button.",
    caption: "Cart review displays selected products and their options, with quantity controls, removal actions, and totals before continuing to checkout.",
  },
  {
    id: "checkout",
    title: "Checkout Experience",
    image: checkout,
    original: "/projects/askonce/checkout.png",
    alt: "AskOnce demo checkout with an order review and empty buyer fields for name, phone, delivery address, notes, and a Facebook or Messenger contact link.",
    caption: "The checkout capture pairs order review with buyer and contact information fields. It documents the form interface, without showing order submission or completion.",
  },
] as const satisfies readonly ProjectScreenshot[];

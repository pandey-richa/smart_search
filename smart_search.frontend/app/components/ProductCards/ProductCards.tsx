import React from 'react';
import Cards from './Cards';
import { ProductCardsContainer } from './ProductCards.styles';

function ProductCards() {

  const MOCK_PRODUCTS = [
  {
    "id": 1,
    "title": "Wireless Noise Cancelling Headphones",
    "category": "Electronics • Audio",
    "rating": 4.5,
    "reviews": 1248,
    "currentPrice": 5999,
    "originalPrice": 8999,
    "discount": "33% OFF",
    "tags": ["In Stock", "Trending"],
    "imageAlt": "Product Image"
  },
  {
    "id": 2,
    "title": "Smart Fitness Watch",
    "category": "Electronics • Wearables",
    "rating": 4.2,
    "reviews": 860,
    "currentPrice": 3499,
    "originalPrice": 4999,
    "discount": "30% OFF",
    "tags": ["In Stock", "Best Seller"],
    "imageAlt": "Product Image"
  },
  {
    "id": 3,
    "title": "Portable Bluetooth Speaker",
    "category": "Electronics • Audio",
    "rating": 4.7,
    "reviews": 2100,
    "currentPrice": 2799,
    "originalPrice": 3999,
    "discount": "30% OFF",
    "tags": ["In Stock", "Limited Offer"],
    "imageAlt": "Product Image"
  },
  {
    "id": 4,
    "title": "Noise Cancelling Earbuds",
    "category": "Electronics • Audio",
    "rating": 4.3,
    "reviews": 1420,
    "currentPrice": 4299,
    "originalPrice": 5999,
    "discount": "28% OFF",
    "tags": ["In Stock", "Popular"],
    "imageAlt": "Product Image"
  },
  {
    "id": 5,
    "title": "Gaming Mechanical Keyboard",
    "category": "Electronics • Accessories",
    "rating": 4.6,
    "reviews": 980,
    "currentPrice": 4999,
    "originalPrice": 6999,
    "discount": "29% OFF",
    "tags": ["In Stock", "Trending"],
    "imageAlt": "Product Image"
  },
  {
    "id": 6,
    "title": "Ultra HD Webcam",
    "category": "Electronics • Peripherals",
    "rating": 4.4,
    "reviews": 740,
    "currentPrice": 2199,
    "originalPrice": 2999,
    "discount": "27% OFF",
    "tags": ["In Stock", "New Arrival"],
    "imageAlt": "Product Image"
  },
  {
    "id": 7,
    "title": "Wireless Charging Pad",
    "category": "Electronics • Accessories",
    "rating": 4.1,
    "reviews": 580,
    "currentPrice": 1099,
    "originalPrice": 1599,
    "discount": "31% OFF",
    "tags": ["In Stock", "Deal"],
    "imageAlt": "Product Image"
  },
  {
    "id": 8,
    "title": "Smart Home Security Camera",
    "category": "Electronics • Home",
    "rating": 4.6,
    "reviews": 1340,
    "currentPrice": 5299,
    "originalPrice": 7499,
    "discount": "29% OFF",
    "tags": ["In Stock", "Best Seller"],
    "imageAlt": "Product Image"
  },
  {
    "id": 9,
    "title": "Portable Laptop Stand",
    "category": "Electronics • Accessories",
    "rating": 4.5,
    "reviews": 430,
    "currentPrice": 1299,
    "originalPrice": 1899,
    "discount": "32% OFF",
    "tags": ["In Stock", "Trending"],
    "imageAlt": "Product Image"
  },
  {
    "id": 10,
    "title": "Gaming Headset with Mic",
    "category": "Electronics • Audio",
    "rating": 4.3,
    "reviews": 1120,
    "currentPrice": 3499,
    "originalPrice": 4999,
    "discount": "30% OFF",
    "tags": ["In Stock", "Hot"],
    "imageAlt": "Product Image"
  },
  {
    "id": 11,
    "title": "Bluetooth Fitness Earbuds",
    "category": "Electronics • Audio",
    "rating": 4.0,
    "reviews": 690,
    "currentPrice": 2499,
    "originalPrice": 3499,
    "discount": "29% OFF",
    "tags": ["In Stock", "Value Pick"],
    "imageAlt": "Product Image"
  },
  {
    "id": 12,
    "title": "4K Streaming Adapter",
    "category": "Electronics • Home",
    "rating": 4.4,
    "reviews": 820,
    "currentPrice": 2999,
    "originalPrice": 3999,
    "discount": "25% OFF",
    "tags": ["In Stock", "Popular"],
    "imageAlt": "Product Image"
  },
  {
    "id": 13,
    "title": "Ergonomic Mouse",
    "category": "Electronics • Peripherals",
    "rating": 4.5,
    "reviews": 910,
    "currentPrice": 1599,
    "originalPrice": 2199,
    "discount": "27% OFF",
    "tags": ["In Stock", "Trending"],
    "imageAlt": "Product Image"
  },
  {
    "id": 14,
    "title": "Fast USB-C Charger",
    "category": "Electronics • Accessories",
    "rating": 4.2,
    "reviews": 500,
    "currentPrice": 999,
    "originalPrice": 1499,
    "discount": "33% OFF",
    "tags": ["In Stock", "Hot"],
    "imageAlt": "Product Image"
  },
  {
    "id": 15,
    "title": "Portable SSD Drive",
    "category": "Electronics • Storage",
    "rating": 4.7,
    "reviews": 1260,
    "currentPrice": 6499,
    "originalPrice": 8299,
    "discount": "22% OFF",
    "tags": ["In Stock", "New"],
    "imageAlt": "Product Image"
  }
];
  return (
    <ProductCardsContainer>
      <Cards products={MOCK_PRODUCTS} />
    </ProductCardsContainer>
  )
}

export default ProductCards
import React from 'react'
import {
  CardContainer,
  ProductImageHolder,
  ProductTitle,
  ProductCategory,
  RatingRow,
  RatingStar,
  ReviewText,
  PriceRow,
  CurrentPrice,
  OriginalPrice,
  DiscountBadge,
  TagsRow,
  TagPill,
} from './ProductCards.styles'
import { Product } from '@/app/types/products'

function Cards({ products }: { products: Product[] }) {


  return (
    products.map(
      (product) => (
        <CardContainer key={product.id}>
      <ProductImageHolder>{product.imageAlt}</ProductImageHolder>

      <ProductTitle>{product.title}</ProductTitle>
      <ProductCategory>{product.category}</ProductCategory>

      <RatingRow>
        <RatingStar>★</RatingStar>
        <ReviewText>{product.rating} ({product.reviews.toLocaleString()} reviews)</ReviewText>
      </RatingRow>

      <PriceRow>
        <CurrentPrice>₹ {product.currentPrice.toLocaleString()}</CurrentPrice>
        <OriginalPrice>₹ {product.originalPrice.toLocaleString()}</OriginalPrice>
        <DiscountBadge>{product.discount}</DiscountBadge>
      </PriceRow>

      <TagsRow>
        {
          product.tags.map((tag)=>(
            <TagPill key={tag}>{tag}</TagPill>
          ))
        }
      </TagsRow>
    </CardContainer>
      )
    )
    
  )
}

export default Cards
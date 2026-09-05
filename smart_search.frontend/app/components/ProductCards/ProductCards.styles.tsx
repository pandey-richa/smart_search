import styled from 'styled-components'

export const ProductCardsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
    padding: 20px;
`

export const CardContainer = styled.div`
  width: 200px;
  padding: 13px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 14px 30px rgba(8, 10, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ProductImageHolder = styled.div`
  min-height: 140px;
  border-radius: 18px;
  background: linear-gradient(135deg, #f5f7ff 0%, #eef4ff 100%);
  color: #4f5d95;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
`

export const ProductCategory = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.9rem;
`

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fbbf24;
  font-size: 0.95rem;
`

export const RatingStar = styled.span`
  font-size: 1rem;
`

export const ReviewText = styled.span`
  color: #374151;
  font-size: 0.9rem;
`

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
`

export const CurrentPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
`

export const OriginalPrice = styled.span`
  font-size: 0.95rem;
  color: #6b7280;
  text-decoration: line-through;
`

export const DiscountBadge = styled.span`
  padding: 4px;
  border-radius: 999px;
  background: #e0f2fe;
  color: #0369a1;
  font-size: 0.8rem;
  font-weight: 600;
`

export const TagsRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const TagPill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: #f3f4f6;
  color: #374151;
  font-size: 0.8rem;
  font-weight: 600;
`
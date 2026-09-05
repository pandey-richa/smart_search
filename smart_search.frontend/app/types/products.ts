export type Product = {
    id: number;
    title: string;
    category: string;
    rating: number;
    reviews: number;
    currentPrice: number;
    originalPrice: number;
    discount: string;
    tags: string[]; 
    imageAlt: string;
}
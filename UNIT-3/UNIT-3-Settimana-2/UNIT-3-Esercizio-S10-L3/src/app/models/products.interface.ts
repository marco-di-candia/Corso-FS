export interface Products {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductListResponse {
    products: Products[];
    total: number;
    skip: number;
    limit: number;
}
export interface CartItem extends Products {
    amount:   number
    totalPrice: number
  }
  

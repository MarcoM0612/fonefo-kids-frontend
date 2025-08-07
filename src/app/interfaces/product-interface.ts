export interface ProductInterface {
    name: string;
    description: string;
    price?: number;
    stock?: number;
    urlImage?: string;
    state?: boolean;
    ageRanges?: string;
    category?: string; 
    tips?: string;
    autor?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
}

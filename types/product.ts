export interface Product {
    id: string;
    title: string;
    description: string;
    images: Image[];
    variants: Variant[];
}

export interface Variant {
    id: string;
    title: string;
    price: string;
    compare_at_price: string;
    image: Image;
}

export interface Image {
    id: string;
    src: string;
    altText: string;
}
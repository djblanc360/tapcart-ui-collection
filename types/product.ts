export interface Product {
    id: string;
    title: string;
    description: string;
    productType: string;
    images: Image[];
    variants: Variant[];
}

export interface Variant {
    id: string;
    title: string;
    price: string;
    compare_at_price: string;
    image: Image;
    selectedOptions: SelectedOption[];
    availableForSale: boolean;
    displayName: string;
}

export interface Image {
    id: string;
    src: string;
    altText: string;
}

export interface SelectedOption {
    name: string;
    value: string;
}
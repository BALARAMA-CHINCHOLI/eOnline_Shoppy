export interface Product{
    id: number;
    title: string;
    image: string;
    price: number;
    stock?: number; //'?' optional
    description: string;
    category: string;
}


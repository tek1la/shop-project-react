export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: "Iphone 15 Pro",
        description: "This is Iphone 15 Pro",
        type: "phone",
        capacity: "256",
        price: 2000,
    },
    {
        id: 2,
        title: "Iphone 14 Pro",
        description: "This is Iphone 14 Pro",
        type: "phone",
        capacity: "128",
        price: 1500,
    },
    {
        id: 3,
        title: "Iphone 13 Pro",
        description: "This is Iphone 13 Pro",
        type: "phone",
        capacity: "64",
        price: 1000,
    },
    {
        id: 4,
        title: "Iphone 14 Pro Max",
        description: "This is Iphone 14 Pro Max",
        type: "phone",
        capacity: "512",
        price: 2000,
    },
    {
        id: 5,
        title: "Iphone 15",
        description: "This is Iphone 15",
        type: "phone",
        capacity: "128",
        price: 1000,
    },
    {
        id: 6,
        title: "Iphone 14",
        description: "This is Iphone 14",
        type: "phone",
        capacity: "128",
        price: 1500,
    },
]
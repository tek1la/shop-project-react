export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
    like: boolean
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: "Iphone 15 Pro",
        description: "This is Iphone 15 Pro",
        type: "phone",
        capacity: "256",
        price: 2000,
        images: '/images/iphone15promax.webp',
        like: false
    },
    {
        id: 2,
        title: "Iphone 14 Pro",
        description: "This is Iphone 14 Pro",
        type: "phone",
        capacity: "128",
        price: 1500,
        images: '/images/iphone15pro.webp',
        like: false
    },
    {
        id: 3,
        title: "Iphone 13 Pro",
        description: "This is Iphone 13 Pro",
        type: "phone",
        capacity: "64",
        price: 1000,
        images: '/images/iphone13.webp',
        like: false
    },
    {
        id: 4,
        title: "Iphone 14 Pro Max",
        description: "This is Iphone 14 Pro Max",
        type: "phone",
        capacity: "512",
        price: 2000,
        images: '/images/iphone15promax.webp',
        like: false
    },
    {
        id: 5,
        title: "Iphone 15",
        description: "This is Iphone 15",
        type: "phone",
        capacity: "128",
        price: 1000,
        images: '/images/iphone15pro.webp',
        like: false
    },
    {
        id: 6,
        title: "Iphone 14",
        description: "This is Iphone 14",
        type: "phone",
        capacity: "128",
        price: 1500,
        images: '/images/iphone13.webp',
        like: false
    },
]

export const getProductsObject = (array: Product[]) => 
array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
)
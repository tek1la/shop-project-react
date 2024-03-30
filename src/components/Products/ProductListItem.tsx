import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
    totalCount: number
    totalPrice: number
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    images,
    totalCount,
    totalPrice,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)
    const [toCart, setToCart] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const addToCart = () => {
        setToCart((prevState) => prevState + count)
        totalCount += toCart
        console.log(totalCount)
    }

    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={images} alt="" />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <div className="btn-wrap">
                    <Button variant="outlined" onClick={addToCart}>
                        Add to cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem

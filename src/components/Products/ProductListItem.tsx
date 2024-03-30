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
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    images,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('Green')

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const onChangeColorClick = () => {
        setColor((prevState) => (prevState === 'Green' ? 'Red' : 'Green'))
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
                <div>
                    <p>
                        Color: <span className={color}>{color}</span>
                    </p>
                    <Button onClick={onChangeColorClick}>Change color</Button>
                </div>
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
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem

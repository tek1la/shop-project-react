import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'
import { useState } from 'react'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { toggleLikeState } from '../../redux/likeReducer'

type ProductListItemType = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
    addToCart: (id: number, count: number) => void
}
const ProductListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    images,
    addToCart,
}: ProductListItemType) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const addingToCart = () => {
        addToCart(id, count)
    }

    const isLiked = useAppSelector((state) => state.productLikeState[id])

    const dispatch = useAppDispatch()
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent
                sx={{
                    position: 'relative',
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => dispatch(toggleLikeState(id))}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-img">
                    <img src={images} alt="" />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
                <Quantity
                    count={count}
                    onIncrementClick={onIncrementClick}
                    onDecrementClick={onDecrementClick}
                />
                <div className="btn-wrap">
                    <Button variant="outlined" onClick={addingToCart}>
                        Add to cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem

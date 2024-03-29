import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { Component, ReactNode } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
}

type State = {
    count: number
}

class ProductListItem extends Component<ProductListItemType, State> {
    state = {
        count: 1,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrementClick() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        const { title, description, type, capacity, price, images } = this.props
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={images} alt={title} />
                    </div>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button
                            onClick={() => this.onDecrementClick()}
                            variant="outlined"
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            onClick={this.onIncrementClick}
                            variant="outlined"
                        >
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
}
// const ProductListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     images,
// }: ProductListItemType) => {

// }
export default ProductListItem

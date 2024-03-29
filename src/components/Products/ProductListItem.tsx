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

class ProductListItem extends Component<ProductListItemType> {
    render() {
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.images} alt={this.props.title} />
                    </div>
                    <h2 className="product-title">{this.props.title}</h2>
                    <p className="product-description">
                        {this.props.description}
                    </p>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}Gb
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
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

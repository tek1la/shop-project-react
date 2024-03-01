import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.css'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <h2 className="product-title">Iphone 15 Pro</h2>
                <p className="product-description">This is Iphon 15 Pro</p>
                <div className="product-features">Type: Phone</div>
                <div className="product-features">Capacity: 128 GB</div>
                <div className="product-price">$ 1000</div>
                <div className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductListItem

import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <h3>{product.title}</h3>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended

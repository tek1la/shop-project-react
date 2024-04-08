import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    product: Product
    productCount: number
    deleteProductItem: (productId: number) => void
    changeProductQuantity: (productId: number, count: number) => void
}
const CartProductListItemExtended = ({
    deleteProductItem,
    changeProductQuantity,
    product,
    productCount,
}: Props) => {
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
                    <Quantity
                        count={productCount}
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        disabled={true}
                        onDecrementClick={
                            () =>
                                productCount === 1
                                    ? deleteProductItem(+product.id)
                                    : changeProductQuantity(
                                          product.id,
                                          productCount - 1
                                      )
                            // changeProductQuantity(product.id, productCount - 1)
                        }
                    />
                    <Button
                        variant="outlined"
                        onClick={() => deleteProductItem(+product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended

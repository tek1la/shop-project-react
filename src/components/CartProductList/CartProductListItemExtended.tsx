import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    product: Product
    productCount: number
    deleteProductItem: (productId: number) => void
    changeProductQuantity: (productId: number, count: number) => void
    changeLikeBtn: (poductId: number) => void
    likeBtn: {
        [id: number]: boolean
    }
}
const CartProductListItemExtended = ({
    deleteProductItem,
    changeProductQuantity,
    product,
    productCount,
    changeLikeBtn,
    likeBtn,
}: Props) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent
                    sx={{
                        position: 'relative',
                    }}
                >
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
                        onDecrementClick={() =>
                            productCount === 1
                                ? deleteProductItem(+product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                    />
                    <Button
                        variant="outlined"
                        onClick={() => deleteProductItem(+product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            left: '15px',
                        }}
                        onClick={() => changeLikeBtn(+product.id)}
                    >
                        {likeBtn[+product.id] ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended

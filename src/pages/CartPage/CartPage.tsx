import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    deleteProductItem: (productId: number) => void
    onCartIncrementClick: (productId: number) => void
    onCartDecrementClick: (productId: number) => void
}
const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    deleteProductItem,
    onCartIncrementClick,
    onCartDecrementClick,
}: Props) => {
    return (
        <div>
            <Grid
                sx={{
                    marginBottom: '20px',
                }}
            >
                <Typography component={'h1'} variant="h4">
                    Cart
                </Typography>
            </Grid>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    deleteProductItem={deleteProductItem}
                    onCartIncrementClick={onCartIncrementClick}
                    onCartDecrementClick={onCartDecrementClick}
                />
            </Grid>
            <Grid
                sx={{
                    marginTop: '20px',
                }}
            >
                <CartTotal productsInCart={productsInCart} />
            </Grid>
        </div>
    )
}
export default CartPage

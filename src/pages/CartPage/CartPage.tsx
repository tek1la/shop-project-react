import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    deleteProductItem: (productId: number) => void
    changeProductQuantity: (productId: number, count: number) => void
    changeLikeBtn: (poductId: number) => void
    likeBtn: {
        [id: number]: boolean
    }
}
const CartPage = ({
    productsInCart,
    deleteProductItem,
    changeProductQuantity,
    changeLikeBtn,
    likeBtn,
}: Props) => {
    return (
        <div>
            <Grid
                sx={{
                    marginBottom: '50px',
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
                    changeProductQuantity={changeProductQuantity}
                    changeLikeBtn={changeLikeBtn}
                    likeBtn={likeBtn}
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

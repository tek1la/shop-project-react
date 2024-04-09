import { Product, getProductsObject, productsArray } from 'utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    deleteProductItem?: (productId: number) => void
    changeProductQuantity?: (productId: number, count: number) => void
    changeLikeBtn?: (poductId: number) => void
    likeBtn?: {
        [id: number]: boolean
    }
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    deleteProductItem,
    changeProductQuantity,
    changeLikeBtn,
    likeBtn,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={+productId}
                    product={productsObject[+productId]}
                    productCount={productsInCart[+productId]}
                    deleteProductItem={deleteProductItem}
                    changeProductQuantity={changeProductQuantity}
                    changeLikeBtn={changeLikeBtn}
                    likeBtn={likeBtn}
                />
            ))}
        </>
    )
}
export default CartProductList

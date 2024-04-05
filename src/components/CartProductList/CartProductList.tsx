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
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    deleteProductItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={+productId}
                    product={productsObject[+productId]}
                    productCount={productsInCart[+productId]}
                    deleteProductItem={deleteProductItem}
                />
            ))}
        </>
    )
}
export default CartProductList

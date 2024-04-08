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
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    deleteProductItem,
    changeProductQuantity,
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
                />
            ))}
        </>
    )
}
export default CartProductList

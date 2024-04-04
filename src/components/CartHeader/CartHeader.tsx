import { useEffect, useState } from 'react'
import { productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    const [productsName, setProductsName] = useState<{ [key: number]: string }>(
        []
    )

    useEffect(() => {
        const updateProductNames = () => {
            const updatedProductsName: { [key: number]: string } = {}
            productsArray.forEach((item) => {
                updatedProductsName[item.id] = item.title
            })
            setProductsName(updatedProductsName)
        }

        updateProductNames()
    }, [])
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={+productId}>
                    {productsName[+productId]}: {productsInCart[+productId]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader

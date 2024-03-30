import ProductList from 'components/Products/ProductList'

type CartDataType = {
    totalCount: number
    totalPrice: number
}
const Home = ({ totalCount, totalPrice }: CartDataType) => {
    return (
        <>
            <ProductList totalCount={totalCount} totalPrice={totalPrice} />
        </>
    )
}

export default Home

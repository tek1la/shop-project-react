import ProductList from 'components/Products/ProductList'

type Props = {
    addToCart: (productCount: any, productPrice: any) => void
}
const Home = ({ addToCart }: Props) => {
    return (
        <>
            <ProductList addToCart={addToCart} />
        </>
    )
}

export default Home

import ProductList from 'components/Products/ProductList'

type Props = {
    addToCart: (id: number, count: number) => void
}
const Home = ({ addToCart }: Props) => {
    return (
        <>
            <ProductList addToCart={addToCart} />
        </>
    )
}

export default Home

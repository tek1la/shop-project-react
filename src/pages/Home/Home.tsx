import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addToCart: (id: number, count: number) => void
}
const Home = ({ addToCart }: Props) => {
    return (
        <>
            <ProductList addToCart={addToCart} />
            <Reviews />
        </>
    )
}

export default Home

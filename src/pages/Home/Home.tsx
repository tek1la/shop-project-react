import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addToCart: (id: number, count: number) => void
    changeLikeBtn: (poductId: number) => void
    likeBtn: {
        [id: number]: boolean
    }
}
const Home = ({ addToCart, changeLikeBtn, likeBtn }: Props) => {
    return (
        <>
            <ProductList
                addToCart={addToCart}
                changeLikeBtn={changeLikeBtn}
                likeBtn={likeBtn}
            />
            <Reviews />
        </>
    )
}

export default Home

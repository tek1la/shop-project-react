import Header from './Header'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import { omit } from 'lodash'

type Props = {}

type ProducrsInCartType = {
    [id: number]: number
}
const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProducrsInCartType>({})

    const addToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const deleteProductItem = (productId: number) => {
        setProductsInCart((prevState) => omit(prevState, productId))
    }
    const changeProductQuantity = (productId: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [productId]: count,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Container
                    maxWidth="lg"
                    sx={{
                        padding: '50px 0',
                    }}
                >
                    <Routes>
                        <Route
                            path="//"
                            element={<Home addToCart={addToCart} />}
                        />
                        <Route
                            path="cart"
                            element={
                                <CartPage
                                    productsInCart={productsInCart}
                                    deleteProductItem={deleteProductItem}
                                    changeProductQuantity={
                                        changeProductQuantity
                                    }
                                />
                            }
                        />
                    </Routes>
                </Container>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

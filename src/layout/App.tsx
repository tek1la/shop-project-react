import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type CartDataType = {
    totalCount: number
    totalPrice: number
}
const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataType>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addToCart = (productCount: number, productPrice: number) => {
        setCartData((prevState) => ({
            ...prevState,
            totalCount: prevState.totalCount + productCount,
            totalPrice: prevState.totalPrice + productPrice,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main addToCart={addToCart} />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

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
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <Main
                    totalCount={cartData.totalCount}
                    totalPrice={cartData.totalPrice}
                />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App

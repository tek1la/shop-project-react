import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type CartDataType = {
    totalCount: number
    totalPrice: number
}
const Main = ({ totalCount, totalPrice }: CartDataType) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            <Home totalCount={totalCount} totalPrice={totalPrice} />
        </Container>
    )
}
export default Main

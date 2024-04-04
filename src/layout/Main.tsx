import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
    addToCart: (id: number, count: number) => void
}
const Main = ({ addToCart }: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            <Home addToCart={addToCart} />
        </Container>
    )
}
export default Main

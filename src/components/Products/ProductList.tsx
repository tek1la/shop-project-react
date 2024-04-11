import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type Props = {
    addToCart: (id: number, count: number) => void
}

const ProductList = ({ addToCart }: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1">
                List of Products
            </Typography>
            <Grid
                container
                spacing={4}
                sx={{
                    marginTop: '20px',
                }}
            >
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        capacity,
                        type,
                        price,
                        images,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                                images={images}
                                addToCart={addToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList

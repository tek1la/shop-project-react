import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import { productsArray } from 'utils/productsArray'

type CartDataType = {
    totalCount: number
    totalPrice: number
}

const ProductList = ({ totalCount, totalPrice }: CartDataType) => {
    return (
        <>
            <Typography variant="h4" component="h1">
                List of Products
            </Typography>
            <Grid
                container
                spacing={4}
                sx={{
                    marginTop: '30px',
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
                                title={title}
                                description={description}
                                capacity={capacity}
                                type={type}
                                price={price}
                                images={images}
                                totalCount={totalCount}
                                totalPrice={totalPrice}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList

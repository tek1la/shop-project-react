import { Button, TextField } from '@mui/material'

type Props = {
    onIncrementClick: () => void
    onDecrementClick: () => void
    count: number
    disabled?: boolean
}
const Quantity = ({
    disabled,
    onIncrementClick,
    onDecrementClick,
    count,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={onDecrementClick}
                disabled={disabled ? false : count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button variant="outlined" onClick={onIncrementClick}>
                +
            </Button>
        </div>
    )
}
export default Quantity

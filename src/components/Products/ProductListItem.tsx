import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'
import { Component } from 'react'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
}

type State = {
    count: number
    color: string
    textColor: string
    toggleText: string
    isShow: boolean
    // disabled: boolean
}

class ProductListItem extends Component<ProductListItemType, State> {
    state = {
        count: 1,
        color: 'Green',
        textColor: 'green',
        toggleText: 'hide',
        isShow: false,
        // disabled: true,
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            // disabled: prevState.count <= 0 ? true : false,
        }))
    }
    onDecrementClick() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
            // disabled: prevState.count <= 2 ? true : false,
        }))
    }
    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color === 'Green' ? 'Red' : 'Green',
            textColor: prevState.textColor === 'red' ? 'green' : 'red',
        }))
    }
    toggleTextClick = () => {
        this.setState((prevState) => ({
            toggleText: prevState.toggleText === 'hide' ? 'show' : 'hide',
        }))
    }

    toggleText = () => {
        this.setState((prevState) => ({
            isShow: !prevState.isShow,
        }))
    }

    render() {
        const { title, description, type, capacity, price, images } = this.props
        return (
            <Card className="product-list-item" variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={images} alt={title} />
                    </div>
                    <h2 className="product-title">{title}</h2>
                    <p className="product-description">{description}</p>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}Gb
                    </div>
                    <div>
                        <div>
                            Color:
                            <span className={this.state.textColor}>
                                {this.state.color}
                            </span>
                        </div>
                        <Button onClick={this.changeColor} variant="outlined">
                            Change color
                        </Button>
                    </div>
                    <Button onClick={this.toggleText}>Show</Button>
                    {this.state.isShow ? (
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Unde quos asperiores temporibus totam in odio
                            facere beatae? Libero odio non possimus, dolore,
                            laborum quidem repudiandae quasi iste explicabo,
                            quaerat tenetur.
                        </p>
                    ) : null}
                    <div>
                        <Button
                            variant="outlined"
                            onClick={() => this.toggleTextClick()}
                        >
                            Show description
                        </Button>
                    </div>
                    <div className={this.state.toggleText}>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Illum voluptatem voluptates et nisi magni eos
                            explicabo. Quos blanditiis, qui ducimus, atque
                            magnam distinctio ipsa cumque beatae, provident
                            sequi quisquam nulla.
                        </p>
                    </div>
                    <div className="product-price">$ {price}</div>
                    <div className="product-quantity">
                        <Button
                            onClick={() => this.onDecrementClick()}
                            variant="outlined"
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            onClick={this.onIncrementClick}
                            variant="outlined"
                        >
                            +
                        </Button>
                    </div>
                    <div className="btn-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}
// const ProductListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     images,
// }: ProductListItemType) => {

// }
export default ProductListItem

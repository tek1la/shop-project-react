type HeaderType = {
    title: string
    num?: number
    bgColor: string
    position?: boolean
}

const Header = (props: HeaderType) => {
    const style = {
        backgroundColor: props.bgColor,
        color: props.position ? 'white' : 'black',
        padding: '15px',
    }

    return (
        <h1 style={style}>
            Hello world, {props.title} {props.num}
        </h1>
    )
}

export default Header

type HeaderType = {
    title: string
    num?: number
    bgColor: string
    position?: boolean
}

const Header = (props: HeaderType) => {
    return (
        <h1
            style={{
                backgroundColor: props.bgColor,
                color: props.position ? 'white' : 'black',
                padding: '15px',
            }}
        >
            Hello world, {props.title} {props.num}
        </h1>
    )
}

export default Header

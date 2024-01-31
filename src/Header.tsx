import './Header.css'
import clsx from 'clsx'
type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1 className={`title ${num === 10 ? 'red' : ''}`}>
            Hello world, {title} {num}
        </h1>
    )
}

export default Header

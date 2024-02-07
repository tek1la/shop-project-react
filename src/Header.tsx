import './Header.scss'
import clsx from 'clsx'
type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1
            className={clsx(`test ${title}`, {
                red: num === 10,
            })}
        >
            Hello world, {title} {num}
        </h1>
    )
}

export default Header

import classes from './Header.module.scss'
import clsx from 'clsx'
type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <h1
            className={clsx(`test ${classes.title}`, {
                [classes.red]: num === 10,
            })}
        >
            Hello world, {title} {num}
        </h1>
    )
}

export default Header

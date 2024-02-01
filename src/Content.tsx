import clsx from 'clsx'
import classes from './Content.module.scss'

type ContentType = {
    content: string
    content2: string
    bgRed?: boolean
}

const Content = ({ content, content2, bgRed }: ContentType) => {
    return (
        <div
            className={clsx(`${classes.style}`, {
                [classes.red]: bgRed === true,
            })}
        >
            <p>{content}</p>
            <p>{content2}</p>
        </div>
    )
}

export default Content

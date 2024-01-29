import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// whithout jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello title!')

// whith jsx
let a = 10
const el = <h1 id="title">Hello title! {a}</h1>

const el2 = (
    <div>
        <h1>Hello Title!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nesciunt, culpa eaque voluptatibus animi assumenda! Earum iusto
            corporis delectus, quod porro perspiciatis atque nostrum deleniti
            expedita sequi sed dolorem excepturi!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            accusantium id totam praesentium deleniti voluptate rerum
            consequatur aliquam, molestiae corrupti illum dicta adipisci quia
            aspernatur distinctio architecto omnis. Dicta, vel!
        </p>
    </div>
)

const App = () => {
    return (
        <div>
            <h1>Hello Title 2!</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid nisi ipsam, vitae perferendis impedit temporibus modi at
                quasi ad incidunt quae atque consequuntur dolorem itaque
                explicabo unde veritatis blanditiis esse.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                beatae ullam aliquam sequi id ab adipisci nobis laboriosam ipsa
                odio, excepturi hic fugit error totam laborum in, esse sapiente
                distinctio?
            </p>
        </div>
    )
}
root.render(
    <React.StrictMode>
        {el2}
        <App />
    </React.StrictMode>
)

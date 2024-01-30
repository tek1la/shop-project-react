import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// whithout jsx
// const el = React.createElement('h1', { id: 'title' }, 'Hello title!')

// whith jsx
// let a = 10
// const el = <h1 id="title">Hello title! {a}</h1>

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

function Content() {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                odio repellendus, beatae laudantium ratione earum eos molestiae
                pariatur vitae tempore. Mollitia maiores tempora nostrum minima
                beatae distinctio iste aliquid impedit.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                odio repellendus, beatae laudantium ratione earum eos molestiae
                pariatur vitae tempore. Mollitia maiores tempora nostrum minima
                beatae distinctio iste aliquid impedit.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} bgColor="red" position />
            <Header title="React.js" bgColor="purple" />
            <Content />
        </>
    )
}
root.render(
    <React.StrictMode>
        {el2}
        <App />
    </React.StrictMode>
)

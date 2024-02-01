import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './Content'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content
                content="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod illum accusamus magnam veritatis nobis rem aliquid excepturi quis soluta, 
            natus ad nulla assumenda autem labore velit maiores. Dolorum, voluptatum assumenda?"
                content2="Luck"
            />
            <Content
                content="2. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quod illum accusamus magnam veritatis nobis rem aliquid excepturi quis soluta, 
            natus ad nulla assumenda autem labore velit maiores. Dolorum, voluptatum assumenda?"
                content2="No luck"
                bgRed={true}
            />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

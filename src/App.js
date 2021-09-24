import React from 'react'
import NoteForm from './components/NoteForm'

const App = () => {
    return (<>
        <div className="wrapper">
            <div className="app__icon">
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
                <span>Keep App</span>
            </div>
            <NoteForm />
        </div>
    </>)
}

export default App
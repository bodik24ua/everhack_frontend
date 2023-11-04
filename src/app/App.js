import './App.css'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import MyDesk
    from '../pages/myDesk'
import Career
    from '../pages/career'
import PageNotFound
    from '../pages/pageNotFound'

import Header
    from '../pages/header/'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route
                        index
                        path="/"
                        element={
                            <MyDesk/>}>
                    </Route>
                    <Route
                        index
                        path="/career"
                        element={
                            <Career/>}>
                    </Route>
                    {/* 👇️ only match this when no other routes match */}
                    <Route
                        path="*"
                        element={
                            <PageNotFound/>}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

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

function App() {
    return (
        <BrowserRouter>
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
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App

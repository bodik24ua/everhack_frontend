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
import CareerRole
    from '../pages/career/CareerRole'


import React, { useState } from 'react';

function App() {
    const [highContrast, setHighContrast] = useState(false);

    const toggleHighContrast = () => {
        setHighContrast((prevHighContrast) => !prevHighContrast);
    };

    const textStyles = {
        color: highContrast ? 'white' : 'black',
        backgroundColor: highContrast ? 'black' : 'white',
    };
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
                    <Route path="/career" element={<Career/>}>
                        <Route path="career/:role" element={<CareerRole />} />
                    </Route>

                    {/* 👇️ only match this when no other routes match */}
                    <Route
                        path="*"
                        element={
                            <PageNotFound/>}/>

                </Routes>
            </BrowserRouter>
            <div>
            <button onClick={toggleHighContrast}>
                {highContrast ? 'Turn Off High Contrast' : 'Turn On High Contrast'}
            </button>
            <p style={textStyles}>This is a sample text with high contrast.</p>
        </div>
        </>
    )
}

export default App

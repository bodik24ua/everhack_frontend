import React, { useState } from 'react';
import './App.css'
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'
import MyDesk
    from '../pages/myDesk'
import Career
    from '../pages/career'
import Header
    from '../pages/header/'
import CareerRole
    from '../pages/career/CareerRole'

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
                    <Route path="/career/:role" element={<CareerRole/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

import React from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
            </ul>
            
            <hr />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>   
    )
}

export default App
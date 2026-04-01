import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import NotFound from '../pages/NotFound'

//? jsx way

// const Router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Layout/>} >
//             <Route path="/" element={<Home/>}/> 
//             <Route path="/about" element={<About/>}/> 
//             <Route path="/contact" element={<Contact/>}/> 
//             <Route path="/services" element={<Services/>}/> 
//         </Route>
//     )
// )

//? object way

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children : [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/services",
                element: <Services/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default Router
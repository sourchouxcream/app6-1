import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './home'
import Products from './products'
import About from './about'

export default function NavlinkRoute() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink to="/">Logo</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" href="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/products" className="nav-link" href="#">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link" href="#">About</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
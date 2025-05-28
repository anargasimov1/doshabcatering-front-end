import { useContext, useEffect, useState } from 'react'
import "./Navbar.css"
import { ProductsContext } from '../../contex/ProductsContext';

export const Navbar = () => {
    
    const { getLocalStronge } = useContext(ProductsContext)


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient fixed">
            <img src={require("../../images/logo.jpg")} className='logo' alt="" />
            <div className="container">
                <a style={{ color: '#9C132E' }} className="navbar-brand" href="/">Doshabcatering</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Menu Aç"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Ana Səhifə</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Haqqımızda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="products">Məhsullar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Əlaqə</a>
                        </li>
                    </ul>

                    <div className="soph">
                        <button onClick={() => { window.location.href = "/shop" }} className='btn btn-success shopi'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p className='count'>{getLocalStronge().length}</p>
                        </button>
                    </div>



                    {localStorage.getItem("logged") ? <div className='d-flex' style={{ borderRadius: "50%", width: "40px", height: "40px", alignItems: "center", justifyContent: "center" }}>
                        <a href="/profile" rel="noopener noreferrer">
                            <i style={{ color: 'white', fontSize: "30px" }} className="fa-regular fa-circle-user"></i>
                        </a>
                    </div> : <div className="d-flex">
                        <a href="/login" className="btn btn-outline-light me-2">Daxil ol</a>
                        <a href="/register" className="btn btn-warning">Qeydiyyat</a>
                    </div>}
                </div>
            </div>



        </nav>

    )
}

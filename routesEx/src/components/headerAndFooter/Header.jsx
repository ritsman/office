import React from 'react'
import './header.css'
import { Outlet } from 'react-router-dom';
const Header = () => {
  return (
   <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar_top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="img/arya-logo.png" className="arya_logo" alt=""/>
                </a>
                <button className="btn  navbar-toggler border-3 px-2" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
                <div className="offcanvas offcanvas-start-lg " tabindex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-flex d-lg-none">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/arya-logo.png" className="arya_logo" alt=""/>
                        </a>
                        <a href="javascript:void(0) " className="text-reset p-0 close-btn" data-bs-dismiss="offcanvas"
                            aria-label="close">
                            <span className="close-first-btn"></span>
                            <span className="close-last-btn"></span>
                        </a>
                    </div>
                    <div className="offcanvas-body p-lg-0">
                        <ul className="navbar-nav custom_header">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#intro">What We Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#products">Products</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#prod">Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
<Outlet />
   </>
  )
}

export default Header;

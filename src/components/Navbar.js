import React from 'react';
import CreateUserForm from './CreateUserForm';
import LoginForm from './LoginForm';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Learn English with CEA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tests">Tests</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <div className='dropdown-item'>
                                        <LoginForm></LoginForm>
                                        </div>
                                    </li> 
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign In
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <div className='dropdown-item'>
                                        <CreateUserForm></CreateUserForm>
                                        </div>
                                    </li> 
                                </ul>
                            </li>
                        </ul>
                        {/* <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
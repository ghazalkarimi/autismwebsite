
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalFilter from './modalFilter';
import logowebsite from './Img/LogoWebsite.png';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div>


            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* Navbar Brand*/}
                <a className="navbar-brand ps-3" href="index.html">
                    <img className="logoimage" src={logowebsite} alt="Logo Website" />

                </a>
                {/* Sidebar Toggle*/}
                <button
                    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                    id="sidebarToggle"
                    href="#!"
                >
                    <i className="fas fa-bars" />
                </button>
                {/* Navbar Search*/}
                <form className="small-screen-search d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <button className="btn btn-search" id="btnNavbarSearch" type="button">
                            <i className="fas fa-search" />
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search for..."
                            aria-label="Search for..."
                            aria-describedby="btnNavbarSearch"
                        />
                        <button className="btn btn-search" id="btnNavbarSearch" type="button">
                            <FontAwesomeIcon icon="fa-solid fa-microphone" />
                        </button>
                        <button className="btn btn-filter" id="btnNavbarSearch" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <FontAwesomeIcon icon="fa-solid fa-filter" /> Filter
                        </button>
                    </div>
                </form>

                <Link className="nav-link" to="/createpost">
                    <button className="visibility btn btn-orange" id="btnNavbarSearch" type="button">
                        <FontAwesomeIcon icon="fa-solid fa-pen" /> Create Post
                    </button>
                </Link>
                {/* Navbar*/}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-user fa-fw" />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Activity Log
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#!">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <ModalFilter />
        </div>

    )
}
export default TopNav;
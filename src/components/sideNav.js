import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SideNav = () => {

    return (
        <div id="layoutSidenav_nav">
            <nav
                className="sb-sidenav accordion sb-sidenav-dark"
                id="sidenavAccordion"
            >
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                        <NavLink to="" className={({ isActive }) => (isActive ? 'activemenu' : 'notactivemenu')}>
                            <Link className="nav-link" to="/">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon="fa-solid fa-house" />
                                </div>
                                Home
                            </Link>
                        </NavLink>
                        {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseLayouts"
                            aria-expanded="false"
                            aria-controls="collapseLayouts"
                        >
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon="fa-solid fa-file" />
                            </div>
                            Manage Posts
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                        </a>
                        <div
                            className="collapse"
                            id="collapseLayouts"
                            aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion"
                        >
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="">
                                    Created Post
                                </a>
                                <a className="nav-link" href="">
                                    Saved Posts
                                </a>                              
                                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'activemenu' : 'notactivemenu')}>
                                    <Link className="nav-link" to="/profile">
                                       Pending Posts
                                    </Link>
                                </NavLink>
                                <a className="nav-link" href="">
                                    Reported Posts
                                </a>
                            </nav>
                        </div>
                        <a className="nav-link" href="">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon="fa-solid fa-message" />
                            </div>
                            Messages
                        </a>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'activemenu' : 'notactivemenu')}>
                            <Link className="nav-link" to="/profile">
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                </div>
                                Profile
                            </Link>
                        </NavLink>
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsePages"
                            aria-expanded="false"
                            aria-controls="collapsePages"
                        >
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon="fa-solid fa-circle-question" />                            </div>
                            Help
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                        </a>
                        <div
                            className="collapse"
                            id="collapsePages"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion"
                        >
                            <nav
                                className="sb-sidenav-menu-nested nav accordion"
                                id="sidenavAccordionPages"
                            >
                                {/* <a
                                    className="nav-link collapsed"
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#pagesCollapseAuth"
                                    aria-expanded="false"
                                    aria-controls="pagesCollapseAuth"
                                > */}
                                {/* Authentication */}
                                {/* <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down" />
                                    </div> */}
                                {/* </a> */}

                                {/* <div
                                    className="collapse"
                                    id="pagesCollapseAuth"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages"
                                >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="login.html">
                                            Login
                                        </a>
                                        <a className="nav-link" href="register.html">
                                            Register
                                        </a>
                                        <a className="nav-link" href="password.html">
                                            Forgot Password
                                        </a>
                                    </nav>
                                </div> */}
                                <a className="nav-link" href="">
                                    Video Tutorial
                                </a>
                                <a className="nav-link" href="">
                                    FAQ
                                </a>
                            </nav>
                        </div>
                        <a
                            className="nav-link collapsed"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseLayoutsSetting"
                            aria-expanded="false"
                            aria-controls="collapseLayoutsSetting"
                        >
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon="fa-solid fa-gear" />
                            </div>
                            Settings
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down" />
                            </div>
                        </a>
                        <div
                            className="collapse"
                            id="collapseLayoutsSetting"
                            aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion"
                        >
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="">
                                    Notification
                                </a>
                                <a className="nav-link" href="">
                                    Privacy
                                </a>
                                <a className="nav-link" href="">
                                    Change Password
                                </a>
                            </nav>
                        </div>
                        {/* <div className="sb-sidenav-menu-heading">Addons</div> */}

                        <a className="nav-link" href="">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon="fa-solid fa-comment-dots" />
                            </div>
                            Send Feedback
                        </a>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Ghazal
                </div>
            </nav>
        </div>
    )
}
export default SideNav;
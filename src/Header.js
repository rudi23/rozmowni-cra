import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="site-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container pl-3 pr-3">
                        <a className="navbar-brand" href="/">
                            <img
                                src="assets/images/logo-rozmowni.png"
                                alt="logo rozmowni.pl"
                                className="logo img-fluid"
                            />
                        </a>

                        {/* Toggler */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarMenu"
                            aria-controls="navbarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa fa-bars" />
                        </button>

                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link to="/o-nas" className="nav-link js-scroll-trigger">
                                        O nas
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div
                                        className="nav-link dropdown-toggle"
                                        id="navbar3"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Kursy
                                        <i className="fa fa-angle-down" />
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="navbar3">
                                        <Link to="/kursy/indywidualne" className="dropdown-item">
                                            Indywidualne
                                        </Link>
                                        <Link to="/kursy/grupowe" className="dropdown-item">
                                            Grupowe
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/kontakt" className="nav-link">
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-contact-phone d-none d-lg-block">
                            <span>Tel.:</span>&nbsp;
                            <a href="tel:+48506262227">506 262 227</a>
                        </div>

                        <ul className="header-contact-right d-none d-lg-block">
                            <li>
                                <a href="https://www.facebook.com/Rozmownipl-141305311401481">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/rozmowni.pl/">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

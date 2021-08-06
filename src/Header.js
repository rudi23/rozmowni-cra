import './Header.css';

function Header() {
    return (
        <header>
            <div className="site-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="assets/images/logo-rozmowni.png" alt="logo rozmowni.pl" className="logo img-fluid" />
                        </a>

                        {/* Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="fa fa-bars" />
                        </button>

                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link js-scroll-trigger">
                                        O nas
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link js-scroll-trigger">
                                        Kursy
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link js-scroll-trigger">
                                        Cennik
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a href="#" className="nav-link">
                                        Kontakt
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="header-contact-phone d-none d-lg-block">
                            <span>Tel.:</span>&nbsp;
                            <a href="tel:+48506262227">506 262 227</a>
                        </div>

                        <ul className="header-contact-right d-none d-lg-block">
                            <li>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li>
                                <a href="#"> <i className="fab fa-linkedin" /></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
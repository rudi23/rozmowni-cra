import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import useClickTracking from './hooks/useClickTracking';
import { events } from './services/tracking';

library.add(faFacebookF);
library.add(faInstagram);
library.add(faTiktok);

export default function Header() {
    const trackClick = useClickTracking(events.HOME_BANNER_CLICK_CONTACT);

    return (
        <header>
            <div className="site-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container pl-3 pr-3">
                        <Link className="navbar-brand" to="/" onClick={() => trackClick(events.NAVIGATION_CLICK_LOGO)}>
                            <img
                                src="/assets/images/logo-rozmowni.png"
                                alt="logo rozmowni.pl"
                                className="logo img-fluid"
                            />
                        </Link>

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
                            <span className="icon">
                                <FontAwesomeIcon icon={faBars} />
                            </span>
                        </button>

                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link
                                        to="/dlaczego-my"
                                        className="nav-link js-scroll-trigger"
                                        onClick={() => trackClick(events.NAVIGATION_CLICK_MENU_ITEM('Why us'))}
                                    >
                                        Dlaczego my?
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/o-nas"
                                        className="nav-link js-scroll-trigger"
                                        onClick={() => trackClick(events.NAVIGATION_CLICK_MENU_ITEM('About us'))}
                                    >
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
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="navbar3">
                                        <Link
                                            to="/kursy/indywidualne"
                                            className="dropdown-item"
                                            onClick={() =>
                                                trackClick(events.NAVIGATION_CLICK_MENU_ITEM('Individual course'))
                                            }
                                        >
                                            Indywidualne
                                        </Link>
                                        <Link
                                            to="/kursy/grupowe"
                                            className="dropdown-item"
                                            onClick={() =>
                                                trackClick(events.NAVIGATION_CLICK_MENU_ITEM('Group course'))
                                            }
                                        >
                                            Grupowe
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/kontakt"
                                        className="nav-link"
                                        onClick={() => trackClick(events.NAVIGATION_CLICK_MENU_ITEM('Contact'))}
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="header-contact-phone d-none d-lg-block">
                            <span>Tel.:</span>&nbsp;
                            <a href="tel:+48506262227" onClick={() => trackClick(events.NAVIGATION_CLICK_PHONE)}>
                                506 262 227
                            </a>
                        </div>

                        <ul className="header-contact-right d-none d-lg-block">
                            <li>
                                <a
                                    href="https://www.facebook.com/Rozmownipl-141305311401481"
                                    onClick={() => trackClick(events.NAVIGATION_CLICK_FB)}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="icon">
                                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/rozmowni.pl/"
                                    onClick={() => trackClick(events.NAVIGATION_CLICK_IG)}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="icon">
                                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tiktok.com/@rozmowni.pl"
                                    onClick={() => trackClick(events.NAVIGATION_CLICK_TIKTOK)}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="icon">
                                        <FontAwesomeIcon icon={['fab', 'tiktok']} />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

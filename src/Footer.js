import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import useClickTracking from './hooks/useClickTracking';
import { events } from './services/tracking';
import { decryptEmail } from './utils/string';

export default function Footer() {
    const trackClick = useClickTracking();

    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mr-auto col-sm-6 col-md-6">
                        <div className="widget footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">O nas</h5>
                            <p className="mt-3">
                                Szkoła językowa rozmowni.pl jest dla Ciebie jeśli chcesz nie tylko podnosić swój poziom
                                angielskiego, ale także rozmawiać swobodnie po angielsku na tematy ważne dla Ciebie.
                            </p>
                            <ul className="list-inline footer-socials">
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.facebook.com/Rozmownipl-141305311401481"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackClick(events.FOOTER_CLICK_FB)}
                                    >
                                        {' '}
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.instagram.com/rozmowni.pl/"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackClick(events.FOOTER_CLICK_IG)}
                                    >
                                        {' '}
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.tiktok.com/@rozmowni.pl"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackClick(events.FOOTER_CLICK_TIKTOK)}
                                    >
                                        {' '}
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.linkedin.com/in/ma%C5%82gorzata-rudowska-08a29a219/"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => trackClick(events.FOOTER_CLICK_LINKEDIN)}
                                    >
                                        {' '}
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">Rozmowni.pl</h5>
                            <ul className="list-unstyled footer-links">
                                <li>
                                    <Link
                                        to="/dlaczego-my"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('Why us'))}
                                    >
                                        Dlaczego my?
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/o-nas"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('About us'))}
                                    >
                                        O nas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/kontakt"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('Contact'))}
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/polityka-prywatnosci"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('Privacy policy'))}
                                    >
                                        Polityka prywatności
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">Kursy</h5>
                            <ul className="list-unstyled footer-links">
                                <li>
                                    <Link
                                        to="/kursy/indywidualne"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('Individual course'))}
                                    >
                                        Zajęcia indywidualne
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/kursy/grupowe"
                                        onClick={() => trackClick(events.FOOTER_CLICK_MENU_ITEM('Group course'))}
                                    >
                                        Zajęcia grupowe
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="footer-widget footer-contact mb-5 mb-lg-0">
                            <h5 className="widget-title">Kontakt</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <i className="bi bi-headphone" />
                                    <div>
                                        <strong>Telefon</strong>
                                        <a
                                            href="tel:+48506262227"
                                            onClick={() => trackClick(events.FOOTER_CLICK_PHONE)}
                                        >
                                            +48 506 262 227
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-envelop" />
                                    <div>
                                        <strong>Email</strong>
                                        {/* eslint-disable jsx-a11y/anchor-is-valid  */}
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                decryptEmail('a29udGFrdEByb3ptb3duaS5wbA==');
                                                trackClick(events.FOOTER_CLICK_EMAIL);
                                                e.preventDefault();
                                            }}
                                        >
                                            kontakt@rozmowni.pl
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-location-pointer" />
                                    <div>
                                        <strong>Biuro</strong>
                                        Witkowicka 68G/1
                                        <br />
                                        31-242 Kraków
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-btm">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="copyright text-lg-center">
                                <p>Copyright © 2021 by Rozmowni.pl | All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

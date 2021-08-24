import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
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
                                    <a href="https://www.facebook.com/Rozmownipl-141305311401481">
                                        {' '}
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/rozmowni.pl/">
                                        {' '}
                                        <i className="fab fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/ma%C5%82gorzata-rudowska-08a29a219/">
                                        {' '}
                                        <i className="fab fa-linkedin" />
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
                                    <Link to="/o-nas">O nas</Link>
                                </li>
                                <li>
                                    <Link to="/kontakt">Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">Kursy</h5>
                            <ul className="list-unstyled footer-links">
                                <li>
                                    <Link to="/kursy/indywidualne">Zajęcia indywidualne</Link>
                                </li>
                                <li>
                                    <Link to="/kursy/grupowe">Zajęcia grupowe</Link>
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
                                        (+48) 506 262 227
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-envelop" />
                                    <div>
                                        <strong>Email</strong>
                                        kontakt@rozmowni.pl
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

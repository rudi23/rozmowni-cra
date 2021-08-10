import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mr-auto col-sm-6 col-md-6">
                        <div className="widget footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">O nas</h5>
                            <p className="mt-3">Veniam Sequi molestias aut necessitatibus optio magni at natus
                                accusamus.Lorem
                                ipsum dolor sit amet, consectetur adipisicin gelit, sed do eiusmod tempor incididunt
                                .</p>
                            <ul className="list-inline footer-socials">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/Rozmownipl-141305311401481"> <i
                                        className="fab fa-facebook-f" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/rozmowni.pl/"> <i className="fab fa-instagram" /></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/ma%C5%82gorzata-rudowska-08a29a219/"> <i
                                        className="fab fa-linkedin" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">Rozmowni.pl</h5>
                            <ul className="list-unstyled footer-links">
                                <li><a href="#about-us">O nas</a></li>
                                <li><a href="#individual-course">Kursy</a></li>
                                <li><a href="#individual-course">Cennik</a></li>
                                <li><a href="#contact">Kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-md-6">
                        <div className="footer-widget mb-5 mb-lg-0">
                            <h5 className="widget-title">Kursy</h5>
                            <ul className="list-unstyled footer-links">
                                <li><a href="#individual-course">Zajęcia indywidualne</a></li>
                                <li><a href="#group-course">Zajęcia grupowe</a></li>
                                <li><a href="#small-group-course">Małe grupy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="footer-widget footer-contact mb-5 mb-lg-0">
                            <h5 className="widget-title">Kontakt</h5>

                            <ul className="list-unstyled">
                                <li><i className="bi bi-headphone" />
                                    <div>
                                        <strong>Telefon</strong>
                                        (+48) 506 262 227
                                    </div>

                                </li>
                                <li><i className="bi bi-envelop" />
                                    <div>
                                        <strong>Email</strong>
                                        kontakt@rozmowni.pl
                                    </div>
                                </li>
                                <li><i className="bi bi-location-pointer" />
                                    <div>
                                        <strong>Biuro</strong>
                                        Witkowicka 68G/1<br />31-242 Kraków
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
    )
}

export default Footer;

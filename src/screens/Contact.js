import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Section from '../components/Section';
import './Contact.css';
import PageHeader from '../components/PageHeader';

export default function Contact() {
    return (
        <>
            <PageHeader title="Kontakt" />
            <Section>
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <SectionHeading heading="Czekamy na Ciebie" subheading="Jak dołączyć?" />

                        <div className="join-content">
                            <div className="join-text-block">
                                <i className="bi bi-user-ID" />
                                <h4>Śledź nas w social media</h4>
                                <p>
                                    Zapraszamy na nasze profile na{' '}
                                    <a href="https://www.facebook.com/Rozmownipl-141305311401481">Facebooku</a>,{' '}
                                    <a href="https://www.instagram.com/rozmowni.pl/">Instagramie</a> oraz{' '}
                                    <a href="https://www.tiktok.com/@rozmowni.pl">TikToku</a>.
                                </p>
                                <p>Dołącz do społeczności szkoły językowej rozmowni.pl</p>
                            </div>

                            <div className="join-text-block">
                                <i className="bi bi-phone" />
                                <h4>Skontaktuj się z nami</h4>
                                <p>Chętnie z Tobą porozmawiamy, odpowiadając na wszystkie Twoje pytania.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="join-img img-block">
                            <img src="/assets/images/contact.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center contact-info mt-5">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className="contact-item">
                                    <p>Napisz do nas</p>
                                    <h4>kontakt@rozmowni.pl</h4>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="contact-item">
                                    <p>Zadzwoń do nas</p>
                                    <h4>+48 506 262 227</h4>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="contact-item">
                                    <p>Adres</p>
                                    <h4>
                                        Witkowicka 68G/1
                                        <br />
                                        31-242 Kraków
                                        <br />
                                        NIP: 678-30-52-400
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="contact-item">
                                    <p>Social media</p>
                                    <ul className="list-inline contact-socials">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/Rozmownipl-141305311401481">
                                                {' '}
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.instagram.com/rozmowni.pl/">
                                                {' '}
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.tiktok.com/@rozmowni.pl">
                                                {' '}
                                                <FontAwesomeIcon icon={faTiktok} />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/in/ma%C5%82gorzata-rudowska-08a29a219/">
                                                {' '}
                                                <FontAwesomeIcon icon={faLinkedin} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <p className="contact-item-header">Skontaktuj się z nami przez formularz kontaktowy</p>
                        <form className="contact__form form-row " method="POST" action="mail.php" id="contactForm">
                            {/*<div className="row">*/}
                            {/*    <div className="col-12">*/}
                            {/*        <div*/}
                            {/*            className="alert alert-success contact__msg"*/}
                            {/*            // style="display: none"*/}
                            {/*            role="alert"*/}
                            {/*        >*/}
                            {/*            Your message was sent successfully.*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Imię i nazwisko"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="Numer telefonu"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Adres email"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="form-control"
                                            placeholder="Temat"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea
                                            id="message"
                                            name="message"
                                            cols="30"
                                            rows="6"
                                            className="form-control"
                                            placeholder="Wiadomość"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mt-4 text-right">
                                    <button className="btn btn-main" type="submit">
                                        Wyślij wiadomość
                                        <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}

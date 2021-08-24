import '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Section from '../components/Section';
import './Contact.css';

export default function Contact() {
    return (
        <Section>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="join-img img-block">
                        <img src="assets/images/contact.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <SectionHeading heading="Czekamy na Ciebie" subheading="Jak dołączyć?" />

                    <div className="join-content">
                        <div className="join-text-block">
                            <i className="bi bi-article" />
                            <h4>
                                <a href="#">Rozwiąż test kwalifikujący</a>
                            </h4>
                            <p>Test pozwoli określić Twój poziom znajomości języka angielskiego</p>
                        </div>

                        <div className="join-text-block">
                            <i className="bi bi-support" />
                            <h4>
                                <a href="#">Skontaktu się z nami</a>
                            </h4>
                            <p>Chętnie z Tobą porozmawiamy, odpowiadając na wszystkie Twoje pytania</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

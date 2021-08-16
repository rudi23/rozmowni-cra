import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import Accordion from '../components/Accordion';
import styles from './Course.module.scss';

export default function CoursesIndividual() {
    return (
        <>
            <PageHeader title="Kurs indywidualny" />

            <Section>
                <div className={styles.root}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="course-single-header">
                                    <h3 className="single-course-title">Zajęcia indywidualne z języka angielskiego</h3>
                                    <p>
                                        Czy chcesz uczyc się angielskiego bezpiecznie, w zaciszu swojego domu? Być może
                                        dużo się przemieszczasz i czasami będziesz mieć lekcje w biurze, kawiarni, a
                                        innym razem w parku? A może po prostu szkoda Ci czasu na stanie w korkach i
                                        dojazd do szkoły językowej?
                                    </p>
                                    <p>
                                        Zależy ci na lekcjach raz w tygodniu? A może chcesz uczyć się bardzo intensywnie
                                        przed wyjazdem? Zamierzasz skupić się przede wszystkim na mówieniu? A może
                                        chcesz poznać lub powtórzyć gramatykę?
                                    </p>
                                    <p>
                                        Podczas tego kursu lekcje są przygotowywane oraz dopasowywane indywidualnie do
                                        Twoich potrzeb.
                                    </p>
                                </div>

                                <div className="single-course-details ">
                                    <h4 className="course-title">Opis</h4>
                                    <p>
                                        Lektor skupia się tylko na nauce z Tobą. Rodzaj materiałów oraz tempa zajęć
                                        dostosowany jest do Twoich potrzeb, aby móc zrealizować szybko i skutecznie Twój
                                        zamierzony cel.
                                    </p>
                                    <p>
                                        Dni oraz godziny spotkań są dopasowane do Twojego planu zajęć. <br />
                                        Możliwość spotkań 7:00-22:00 przez 6 dni w tygodniu.
                                    </p>
                                    <p>Płatność dokonywana jest za pojedyncze zajęcia.</p>

                                    <div className="course-widget course-info">
                                        <h4 className="course-title">What You will Learn?</h4>
                                        <ul>
                                            <li>
                                                <i className="fa fa-check" />
                                                Clean up face imperfections, improve and repair photos
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                Remove people or objects from photos
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                Master selections, layers, and working with the layers panel
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                Use creative effects to design stunning text styles
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                working with the layers panel
                                            </li>
                                            <li>
                                                <i className="fa fa-check" />
                                                Cut away a person from their background
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="edutim-single-course-segment edutim-course-topics-wrap">
                                    <div className="edutim-course-details justify-content-between">
                                        <h4 className="course-title">Rodzaje zajęć</h4>
                                        <p>Możesz zdecydować się na jeden z czterech rodzajów zajęć:</p>
                                    </div>

                                    <div className="edutim-course-topics-contents">
                                        <div className="edutim-course-topic">
                                            <Accordion
                                                id="individualTypes"
                                                cards={[
                                                    {
                                                        title: 'Konwersacje',
                                                        id: '1',
                                                        content: (
                                                            <>
                                                                <p>
                                                                    Konwersacje są to zajęcia w całości poświęcone na
                                                                    ćwiczenie umiejętności mówienia w języku obcym. Mają
                                                                    na celu utrwalenie poznanego słownictwa i struktur
                                                                    gramatycznych oraz przede wszystkim pozbycie się
                                                                    "bariery językowej".
                                                                </p>
                                                                <p>
                                                                    Konwersacje są prowadzone nie tylko przez polskich
                                                                    lektorów, lecz także przez rodowitych Anglików lub
                                                                    Amerykanów (Native Speakers).
                                                                </p>
                                                                <p>
                                                                    Uczestnicy kursu nabywają pewności siebie i
                                                                    swobodnie używają języka obcego.
                                                                </p>
                                                                <p>
                                                                    Ćwiczymy również scenki ‘z życia wzięte’ czyli
                                                                    wszystkie prawdopodobne sytuacje, w których można
                                                                    się znaleźć wyjeżdżając za granice np. pytanie o
                                                                    drogę, zamawianie jedzenia w restauracji, na
                                                                    lotnisku, w hotelu, u lekarza itp. Dodatkowo na
                                                                    zajęciach wprowadzane są elementy Business English
                                                                    co daje uczniom praktyczną wiedzę z tego zakresu.
                                                                </p>
                                                                <p>
                                                                    Uczestnicy kursu również sami wybierają interesujące
                                                                    ich tematy dyskusji. Dzięki temu uczniowie, którzy
                                                                    mają możliwość współtworzyć lekcje, z zaangażowaniem
                                                                    uczestniczą w zajęciach. Zdobywają oni cenną
                                                                    umiejętność negocjowania, relacjonowania wydarzeń a
                                                                    nawet targowania się w obcym języku.
                                                                </p>
                                                                <p>
                                                                    Stopień trudności i tematy na kursie konwersacji są
                                                                    dopasowane do wieku i stopnia zaawansowania
                                                                    językowego uczniów.
                                                                </p>
                                                            </>
                                                        ),
                                                    },
                                                    {
                                                        title: 'General english',
                                                        id: '2',
                                                        content: (
                                                            <>
                                                                <p>
                                                                    Celem kursu jest rozwój wszystkich sprawności
                                                                    językowych (mówienia, czytania, słuchania oraz
                                                                    pisania).
                                                                </p>
                                                                <p>
                                                                    Dzięki temu kursant osiąga swobodę w porozumiewanie
                                                                    się w języku angielskim oraz jest przygotowany do
                                                                    kontynuowania nauki na wyższych poziomach w celu
                                                                    przygotowania do egzaminów FCE, CAE i CPE.
                                                                </p>
                                                            </>
                                                        ),
                                                    },
                                                    {
                                                        title: 'Przygotowanie do egzaminu',
                                                        id: '3',
                                                        content: (
                                                            <>
                                                                <p>
                                                                    Rezultatem kursu jest przygotowanie do egzaminu
                                                                    ósmoklasisty lub egzaminu maturalnego
                                                                </p>
                                                            </>
                                                        ),
                                                    },
                                                    {
                                                        title: 'Business English',
                                                        id: '4',
                                                        content: (
                                                            <>
                                                                <p>
                                                                    Kurs ten skierowany jest do osób posługujących się
                                                                    językiem angielskim w pracy.
                                                                </p>
                                                                <p>
                                                                    Program zajęć obejmuje naukę słownictwa
                                                                    tematycznego, pisania formalnych dokumentów oraz
                                                                    konwersacje biznesowe.
                                                                </p>
                                                            </>
                                                        ),
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="course-sidebar">
                                    <div className="course-single-thumb">
                                        <img
                                            src="assets/images/course/course2.jpg"
                                            alt=""
                                            className="img-fluid w-100"
                                        />
                                        <div className="course-price-wrapper">
                                            <div className="course-price ml-3">
                                                <h4>
                                                    Cena: <span>90 zł</span>
                                                </h4>
                                            </div>
                                            <div className="buy-btn">
                                                <Link to="/kontakt" className="btn btn-main btn-block">
                                                    Zapisz się
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="course-widget course-details-info">
                                        <h4 className="course-title">W skrócie</h4>
                                        <ul>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-alarm-clock" />
                                                        Czas:
                                                    </span>
                                                    45 min.
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-money" />
                                                        Koszt:
                                                    </span>
                                                    90 zł
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-money-bag" />
                                                        Płatność:
                                                    </span>
                                                    za pojedyncze zajęcia
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-graph-bar" />
                                                        Poziom:
                                                    </span>
                                                    A2, B2, C1, C2
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-user-ID" />
                                                        Nauczyciel:
                                                    </span>
                                                    Gosia
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span>
                                                        <i className="bi bi-location-pointer" />
                                                        Gdzie:
                                                    </span>
                                                    Online
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-widget course-metarials">
                                        <h4 className="course-title">Wymagania</h4>
                                        <p>
                                            Do udziału w lekcji potrzebujesz komputera, kamerki (ewentualnie smartfona)
                                            dostępu do internetu oraz słuchawek z mikrofonem.
                                        </p>
                                        <p>
                                            Zajęcia online odbywają się poprzez platformę{' '}
                                            <a href="https://zoom.us/" rel="noopener nofollow">
                                                Zoom
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

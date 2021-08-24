import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Accordion from '../components/Accordion';
import styles from './Course.module.scss';

export default function CoursesGroup() {
    return (
        <>
            <PageHeader title="Kursy grupowe" />

            <section className={styles.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course-single-header">
                                <h3 className="single-course-title">Zajęcia grupowe z języka angielskiego</h3>
                                <p>
                                    Celem kursu jest ćwiczenie swobodnego komunikowania się, poszerzenie słownictwa i
                                    wprowadzenie lub powtórzenie gramatyki
                                </p>
                            </div>

                            <div className="single-course-details ">
                                <div className="course-widget course-info">
                                    <ul>
                                        <li>
                                            <i className="fa fa-check" />
                                            Lekcje raz w tygodniu
                                        </li>
                                        <li>
                                            <i className="fa fa-check" />
                                            Zajęcia trwają 90 min (2 lekcje)
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
                                                                ćwiczenie umiejętności mówienia w języku obcym. Mają na
                                                                celu utrwalenie poznanego słownictwa i struktur
                                                                gramatycznych oraz przede wszystkim pozbycie się
                                                                "bariery językowej".
                                                            </p>
                                                            <p>
                                                                Konwersacje są prowadzone nie tylko przez polskich
                                                                lektorów, lecz także przez rodowitych Anglików lub
                                                                Amerykanów (Native Speakers).
                                                            </p>
                                                            <p>
                                                                Uczestnicy kursu nabywają pewności siebie i swobodnie
                                                                używają języka obcego.
                                                            </p>
                                                            <p>
                                                                Ćwiczymy również scenki ‘z życia wzięte’ czyli wszystkie
                                                                prawdopodobne sytuacje, w których można się znaleźć
                                                                wyjeżdżając za granice np. pytanie o drogę, zamawianie
                                                                jedzenia w restauracji, na lotnisku, w hotelu, u lekarza
                                                                itp. Dodatkowo na zajęciach wprowadzane są elementy
                                                                Business English co daje uczniom praktyczną wiedzę z
                                                                tego zakresu.
                                                            </p>
                                                            <p>
                                                                Uczestnicy kursu również sami wybierają interesujące ich
                                                                tematy dyskusji. Dzięki temu uczniowie, którzy mają
                                                                możliwość współtworzyć lekcje, z zaangażowaniem
                                                                uczestniczą w zajęciach. Zdobywają oni cenną umiejętność
                                                                negocjowania, relacjonowania wydarzeń a nawet targowania
                                                                się w obcym języku.
                                                            </p>
                                                            <p>
                                                                Stopień trudności i tematy na kursie konwersacji są
                                                                dopasowane do wieku i stopnia zaawansowania językowego
                                                                uczniów.
                                                            </p>
                                                        </>
                                                    ),
                                                },
                                                {
                                                    title: 'General English',
                                                    id: '2',
                                                    content: (
                                                        <>
                                                            <p>
                                                                Celem kursu jest rozwój wszystkich sprawności językowych
                                                                (mówienia, czytania, słuchania oraz pisania).
                                                            </p>
                                                            <p>
                                                                Dzięki temu kursant osiąga swobodę w porozumiewanie się
                                                                w języku angielskim oraz jest przygotowany do
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
                                                                Program zajęć obejmuje naukę słownictwa tematycznego,
                                                                pisania formalnych dokumentów oraz konwersacje
                                                                biznesowe.
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
                                    <img src="assets/images/course/course2.jpg" alt="" className="img-fluid w-100" />
                                    <div className="course-price-wrapper">
                                        <div className="course-price ml-3">
                                            <h4>
                                                Cena: <span>510 zł</span>
                                            </h4>
                                            <p>za 2 miesiące</p>
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
                                                2 lekcje tygodniowo (90min)
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>
                                                    <i className="bi bi-money" />
                                                    Koszt:
                                                </span>
                                                4 wpłaty po 510zł
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>
                                                    <i className="bi bi-refresh-time" />
                                                    Liczba lekcji:
                                                </span>
                                                68 w ciągu roku
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>
                                                    <i className="bi bi-money-bag" />
                                                    Płatność:
                                                </span>
                                                za 2 miesiące z góry
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
                                        ,{' '}
                                        <a href="https://www.skype.com/" rel="noopener nofollow">
                                            Skype
                                        </a>{' '}
                                        lub{' '}
                                        <a href="https://www.microsoft.com/microsoft-teams/" rel="noopener nofollow">
                                            Teams
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

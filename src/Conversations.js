import './About.css'

export default function About() {
    return (
        <section className="about-section section-padding about-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <span className="subheading">Jak uczymy?</span>
                            <h3>Konwersacje</h3>
                        </div>

                        <p>Specjalizujemy się w nauczaniu angielskiego praktycznego, z dużym naciskiem na ćwiczenie konwersacji.
                            Na zajęciach korzystamy nie tylko z podręczników, ale także oglądamy ciekawe filmiki i gramy w gry po angielsku,
                            ćwiczymy nowe słownictwo, przydatne zwroty oraz zagadnienia gramatyczne.
                            Od pierwszych zajęć staramy się aby uczniowie jak najwięcej mówili po angielsku.</p>

                        <p>
                            Tematy konwersacji są dobrane do poziomu, wieku oraz zainteresowań uczniów.
                            Oto kilka przykładowych tematów konwersacji dla różnych poziomów zaawansowania.
                        </p>

                        <p className="no-mb">Na poziomie podstawowym będą to scenki sytuacyjne:</p>
                        <ul>
                            <li>Poznawanie nowej osoby (zadawanie pytań oraz opowiadanie o swoich zainteresowaniach, miejscu zamieszkania, rodzinie, pracy lub szkole)</li>
                            <li>Jak poradzić sobie na lotnisku, w hotelu lub podczas wizyty u lekarza
                                zamawianie jedzenia w restauracji?</li>
                        </ul>

                        <p className="no-mb">Na poziomie średnio zaawansowanym:</p>
                        <ul>
                            <li>Social media - jaki wpływ ma na nasze życie?</li>
                            <li>Czy edukacja jest najpotężniejszą bronią?</li>
                            <li>Rozmawiamy o stereotypach dotyczących poszczególnych krajów</li>
                            <li>Najbardziej radioaktywne miejsca na ziemi. Czy katastrofa w Czarnobylu może się powtórzyć?</li>
                        </ul>

                        <p className="no-mb">Poziom zaawansowany:</p>
                        <ul>
                            <li>Dyskusje na podstawie TED talks (np przemówienie Steve'a Jobsa na Stanford University)</li>
                            <li>Czym jest dobre życie?</li>
                            <li>Robimy test osobowości i go omawiamy</li>
                            <li>Zastanawiamy się czy wszechobecny monitoring, urządzenia z rozpoznawaniem twarzy odbiera nam prywatność</li>
                        </ul>

                        <a href="#" className="btn btn-main"><i className="fa fa-check mr-2" />Porozmawiaj z nami</a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img2">
                            <img src="assets/images/conversations.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import './About.css'

export default function Conversations() {
    return (
        <section className="about-section section-padding about-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <span className="subheading">Jak uczymy?</span>
                            <h2>Konwersacje</h2>
                        </div>

                        <p>Specjalizujemy się w nauczaniu angielskiego praktycznego, z dużym naciskiem na ćwiczenie
                            konwersacji.
                            Na zajęciach korzystamy nie tylko z podręczników, ale także oglądamy ciekawe filmiki i gramy
                            w gry po angielsku,
                            ćwiczymy nowe słownictwo, przydatne zwroty oraz zagadnienia gramatyczne.
                            Od pierwszych zajęć staramy się aby uczniowie jak najwięcej mówili po angielsku.</p>

                        <p>Tematy konwersacji są dobrane do poziomu, wieku oraz zainteresowań uczniów.</p>

                        <h3 className="mb-3">Tematy konwersacji</h3>

                        <div className="edutim-course-topic">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <button className="btn-block text-left curriculmn-title-btn" type="button"
                                                data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                                                aria-controls="collapseOne">
                                            <h4 className="curriculmn-title">Poziom podstawowy</h4>
                                        </button>
                                    </div>

                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                         data-parent="#accordionExample">
                                        <div className="course-lessons">
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Scenki sytuacyjne: poznawanie nowej osoby (zadawanie pytań oraz opowiadanie o swoich zainteresowaniach, miejscu zamieszkania, rodzinie, pracy lub szkole)</span>
                                                </div>
                                            </div>
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Scenki sytuacyjne: jak poradzić sobie na lotnisku, w hotelu lub podczas wizyty u lekarza zamawianie jedzenia w restauracji?</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <button className="btn-block text-left curriculmn-title-btn" type="button"
                                                data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            <h4 className="curriculmn-title">Poziom średnio zaawansowany</h4>
                                        </button>
                                    </div>

                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordionExample">
                                        <div className="course-lessons">
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Social media - jaki wpływ ma na nasze życie?</span>
                                                </div>
                                            </div>
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Czy edukacja jest najpotężniejszą bronią?</span>
                                                </div>
                                            </div>
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Rozmawiamy o stereotypach dotyczących poszczególnych krajów</span>
                                                </div>
                                            </div>
                                            <div className="single-course-lesson">
                                                <div className="course-topic-lesson">
                                                    <i className="fa fa-check"></i>
                                                    <span>Rozmawiamy o stereotypach dotyczących poszczególnych krajów</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <button className="btn-block text-left curriculmn-title-btn" type="button"
                                            data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                        <h4 className="curriculmn-title">Poziom zaawansowany</h4>
                                    </button>
                                </div>

                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordionExample">
                                    <div className="course-lessons">
                                        <div className="single-course-lesson">
                                            <div className="course-topic-lesson">
                                                <i className="fa fa-check"></i>
                                                <span>Dyskusje na podstawie TED talks (np przemówienie Steve'a Jobsa na Stanford University)</span>
                                            </div>
                                        </div>
                                        <div className="single-course-lesson">
                                            <div className="course-topic-lesson">
                                                <i className="fa fa-check"></i>
                                                <span>Czym jest dobre życie?</span>
                                            </div>
                                        </div>
                                        <div className="single-course-lesson">
                                            <div className="course-topic-lesson">
                                                <i className="fa fa-check"></i>
                                                <span>Robimy test osobowości i go omawiamy</span>
                                            </div>
                                        </div>
                                        <div className="single-course-lesson">
                                            <div className="course-topic-lesson">
                                                <i className="fa fa-check"></i>
                                                <span>Zastanawiamy się czy wszechobecny monitoring, urządzenia z rozpoznawaniem twarzy odbiera nam prywatność</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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

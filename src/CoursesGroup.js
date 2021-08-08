export default function CoursesGroup() {
    return (
        <section className="section-padding course bg-feature">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading center-heading">
                            <span className="subheading">Kurs języka angielskiego</span>
                            <h3>Zajęcia grupowe (5-6 osób)</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-content">
                                <h4>Kurs konwersacji</h4>
                                <p>68 lekcji w ciągu roku</p>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>5-6</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">4 x 510 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-content">
                                <h4>Angielski ogólny + konwersacje</h4>
                                <p>100 lekcji w ciągu roku</p>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>5-6</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">4 x 750 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-content">
                                <h4>Egzamin ósmoklasisty</h4>
                                <p>60 lekcji w ciągu roku</p>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>5-6</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">4 x 450 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="center-heading">
                            <p>Konwersacje, angielski ogólny (General English), przygotowanie do egzaminów, angielski w biznesie (Business English)</p>
                            <p>Zajęcia odbywają się raz lub dwa razy w tygodniu.</p>
                            <p>Płatności w 4 ratach.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

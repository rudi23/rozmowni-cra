export default function CoursesGroup() {
    return (
        <section className="section-padding course">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading center-heading">
                            <span className="subheading">Kurs języka angielskiego</span>
                            <h3>Małe grupy (2-4 osoby)</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-img">
                                <img src="assets/images/2-people.jpg" alt="" className="img-fluid" />
                            </div>

                            <div className="course-content">
                                <h4>Konwersacje</h4>
                                <h5>grupa 2-osobowa</h5>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>2</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">45 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-img">
                                <img src="assets/images/3-people.jpg" alt="" className="img-fluid" />
                            </div>

                            <div className="course-content">
                                <h4>Konwersacje</h4>
                                <h5>grupa 3-osobowa</h5>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>3</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">40 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="course-block course-style-2">
                            <div className="course-img">
                                <img src="assets/images/4-people.jpg" alt="" className="img-fluid" />
                            </div>

                            <div className="course-content">
                                <h4>Konwersacje</h4>
                                <h5>grupa 4-osobowa</h5>

                                <div className="course-footer d-lg-flex align-items-center justify-content-between">
                                    <div className="course-meta">
                                        <span className="course-student"><i className="bi bi-group"/>4</span>
                                        <span className="course-duration"><i className="bi bi-alarm-clock"/>45 min.</span>
                                    </div>

                                    <div className="course-price">35 zł</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
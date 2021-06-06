import './JoinUs.css'

export default function JoinUs() {
    return (
        <section className="join-section section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 col-md-12">
                        <div className="join-img">
                            <img src="assets/images/join-us.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <span className="subheading">Jak dołączyć?</span>
                            <h3>Czekamy na Ciebie</h3>
                        </div>

                        <div className="join-content">
                            <div className="join-text-block">
                                <i className="bi bi-article" />
                                <h4><a href="#">Rozwiąż test kwalifikujący</a></h4>
                                <p>Test pozwoli określić Twój poziom znajomości języka</p>
                            </div>

                            <div className="join-text-block">
                                <i className="bi bi-support" />
                                <h4><a href="#">Skontaktu się z nami</a></h4>
                                <p>Chętnie z Tobą porozmawiamy, odpowiadając na wszystkie Twoje pytania</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

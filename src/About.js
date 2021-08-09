import './About.css'

export default function About() {
    return (
        <section className="about-section section-padding about-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="img-block">
                            <img src="assets/images/lifelong-learning.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <span className="subheading">Co nami kieruje?</span>
                            <h3>Idea lifelong learning</h3>
                        </div>

                        <p>W szkole językowej rozmowni.pl wierzymy w uczenie się przez całe życie (tzw. lifelong learning).
                            Edukacja i ciągły rozwój są nam potrzebne, aby w szybko zmieniającym się świecie, czuć się
                            jak ryba w wodzie.
                            Pozwalają nam budować kompetencje przyszłości.</p>

                        <p>
                            Staramy się rozmawiać na istotne tematy, które dotyczą nas wszystkich.
                            Chcemy, aby nasi uczniowie umieli dobrze poradzić sobie w różnych sytuacjach życiowych
                            oraz prowadzili wzbogacające dyskusje, poznawali odmienne punkty widzenia i wyrażali swoją
                            opinię na różne tematy.
                        </p>

                        <p>Uważamy, że rozmowa może być niczym fascynująca podróż w nieznane, która poszerza horyzonty,
                            pozwala nam lepiej poznać siebie i otaczający nas świat.</p>

                        <p className="no-mb">W naszej szkole językowej:</p>
                        <ul>
                            <li>chcemy Was poznać</li>
                            <li>chcemy Was uczyć i uczyć się od Was</li>
                            <li>chcemy być rozmowni</li>
                        </ul>
                        <p>dlatego będziemy poruszać tematy związane ze światem relacji społecznych, biznesu, coachingu
                            czy filozofii.</p>

                        <a href="#" className="btn btn-main"><i className="fa fa-check mr-2" />Dołącz do nas</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

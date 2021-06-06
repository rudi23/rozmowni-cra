import './Banner.css';

export default function Banner() {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-xl-6">
                        <div className="banner-content">
                            <h1>Mów co chcesz. <br/>Po angielsku. <br/>Coraz lepiej!</h1>
                            <p>Czy dobra znajomość angielskiego jest Ci niezbędna do zdobycia pracy marzeń?<br/>
                            A może uczysz się lub studiujesz i zależy Ci na dobrych ocenach lub po prostu chcesz bez ograniczeń podróżować po świecie?<br/>
                            Niezależnie jaka jest Twoja motywacja - z chęcią będziemy Ci towarzyszyć w drodze do upragnionej płynności językowej.</p>
                            <a href="#" className="btn btn-main">Ucz się razem z nami</a>
                        </div>
                    </div>

                    {/*<div className="col-xl-6">*/}
                    {/*    <div className="banner-img">*/}
                    {/*        <img src="assets/images/banner/banner-8.png" alt="" className="img-fluid" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

import './Banner.css';

export default function Banner() {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-8 order-lg-2">
                        <div className="img-block ml-n3 mr-n3">
                            <img src="assets/images/main.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 col-xl-4 order-md-1">
                        <div className="banner-content">
                            <h1>Mów płynnie po angielsku!</h1>
                            <p>Czy dobra znajomość angielskiego jest Ci niezbędna do zdobycia pracy marzeń?<br />
                                A może uczysz się lub studiujesz i zależy Ci na dobrych ocenach lub po prostu chcesz bez
                                ograniczeń podróżować po świecie?<br />
                                Niezależnie jaka jest Twoja motywacja - z chęcią będziemy Ci towarzyszyć w drodze do
                                upragnionej płynności językowej.</p>
                            <a href="#" className="btn btn-main">Ucz się razem z nami <i
                                className="fa fa-angle-right ml-2" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

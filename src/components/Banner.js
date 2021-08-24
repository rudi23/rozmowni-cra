import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Banner.module.scss';

export default function Banner() {
    return (
        <section className={styles.bannerSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-8 order-lg-2">
                        <div className="img-block">
                            <img src="/assets/images/main.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 col-xl-4 order-md-1">
                        <div className={styles.bannerContent}>
                            <h1>Mów swobodnie po angielsku!</h1>
                            <h2>Indywidualne oraz grupowe kursy online</h2>
                            <Link to="/kontakt" className="btn btn-main mt-4">
                                Ucz się razem z nami <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

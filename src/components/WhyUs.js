import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Section from './Section';

export default function WhyUs() {
    return (
        <Section background="gray">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="img-block">
                        <img src="assets/images/why-us.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <SectionHeading heading="Czy do siebie pasujemy?" subheading="Dlaczego my?" />

                    <p className="mb-2">
                        Nudzą Cię sztampowe tematy dyskusji typu "Czy lepiej mieszkać na wsi czy w mieście?"
                    </p>
                    <p className="mb-2">
                        Chcesz nie tylko uczyć się angielskiego, ale także rozwijać się w innych obszarach.
                    </p>
                    <p className="mb-2">Ważne są dla Ciebie kompetencje przyszłości.</p>
                    <p className="mb-2">Masz dość szkolnych testów i ocen.</p>

                    <p>Dobrze trafiłeś!</p>

                    <Link to="#" className="btn btn-main">
                        <i className="fa fa-check mr-2" />
                        Sprawdź co nas wyróżnia
                    </Link>
                </div>
            </div>
        </Section>
    );
}

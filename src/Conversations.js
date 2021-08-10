import SectionHeading from './components/SectionHeading';
import Section from './components/Section';
import Accordion from './components/Accordion';

export default function Conversations() {
    return (
        <Section background="gray">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <SectionHeading heading="Konwersacje" subheading="Jak uczymy?" />

                    <p>
                        Specjalizujemy się w nauczaniu angielskiego praktycznego, z dużym naciskiem na ćwiczenie
                        konwersacji.
                        Na zajęciach korzystamy nie tylko z podręczników, ale także oglądamy ciekawe filmiki i gramy
                        w gry po angielsku,
                        ćwiczymy nowe słownictwo, przydatne zwroty oraz zagadnienia gramatyczne.
                        Od pierwszych zajęć staramy się aby uczniowie jak najwięcej mówili po angielsku.
                    </p>

                    <p>Tematy konwersacji są dobrane do poziomu, wieku oraz zainteresowań uczniów.</p>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="img-block">
                        <img src="assets/images/conversations.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-12">
                    <h3 className="mb-3">Tematy konwersacji</h3>

                    <Accordion
                        id="conversationTopics"
                        cards={[
                            {
                                title: 'Poziom podstawowy',
                                id: '1',
                                items: [
                                    'Scenki sytuacyjne: poznawanie nowej osoby (zadawanie pytań oraz opowiadanie o swoich zainteresowaniach, miejscu zamieszkania, rodzinie, pracy lub szkole)',
                                    'Scenki sytuacyjne: jak poradzić sobie na lotnisku, w hotelu lub podczas wizyty u lekarza zamawianie jedzenia w restauracji?',
                                ]
                            },
                            {
                                title: 'Poziom średnio zaawansowany',
                                id: '2',
                                items: [
                                    'Social media - jaki wpływ ma na nasze życie?',
                                    'Czy edukacja jest najpotężniejszą bronią?',
                                    'Rozmawiamy o stereotypach dotyczących poszczególnych krajów',
                                    'Najbardziej radioaktywne miejsca na ziemi. Czy katastrofa w Czarnobylu może się powtórzyć?',
                                ]
                            },
                            {
                                title: 'Poziom zaawansowany',
                                id: '3',
                                items: [
                                    'Dyskusje na podstawie TED talks (np przemówienie Steve\'a Jobsa na Stanford University)',
                                    'Czym jest dobre życie?',
                                    'Robimy test osobowości i go omawiamy',
                                    'Zastanawiamy się czy wszechobecny monitoring, urządzenia z rozpoznawaniem twarzy odbiera nam prywatność',
                                ]
                            }
                        ]}
                    />

                    <a href="#contact" className="btn btn-main"><i className="fa fa-check mr-2" />Porozmawiaj z nami</a>
                </div>
            </div>
        </Section>
    )
}

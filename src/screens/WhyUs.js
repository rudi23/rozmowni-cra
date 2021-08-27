import Section from '../components/Section';
import PageHeader from '../components/PageHeader';

export default function WhyUs() {
    return (
        <>
            <PageHeader title="Dlaczego my?" />
            <Section backgsround="gray">
                <div className="row">
                    <div className="col-lg-12 col-md-12 order-md-1">
                        <p>
                            Szkoła rozmowni.pl jest dla Ciebie, jeśli chcesz nie tylko podnosić swój poziom
                            angielskiego, ale także rozmawiać swobodnie po angielsku na ważne dla Ciebie tematy związane
                            z:
                        </p>
                        <ul className="pt-2">
                            <li>rozwojem osobistym</li>
                            <li>psychologią</li>
                            <li>filozofią</li>
                            <li>coachingiem</li>
                            <li>relacjami międzyludzkimi</li>
                            <li>wiedzą ogólną o otaczającym nas świecie</li>
                            <li>zdrowym sposobem życia</li>
                            <li>bieżącymi wydarzeniami w kraju i za granicą</li>
                        </ul>

                        <p>
                            Na zajęciach często rozmawiamy na tematy <strong>kontrowersyjne</strong> z poszanowanie
                            poglądów innych rozmówców.
                        </p>

                        <p>
                            Szkoła rozmowni.pl jest dla Ciebie, jeśli chcesz uczyć się angielskiego i równocześnie
                            ćwiczyć KOMPETENCJE PRZYSZŁOŚCI takie jak:
                        </p>
                        <ul className="pt-2">
                            <li>radzenie sobie z trudnymi emocjami np wstydem (przełamywanie bariery językowej)</li>
                            <li>ciekawość świata i kreatywność (nasze lekcje będą dotyczyć różnych kultur)</li>
                            <li>efektywna komunikacja( dyskusje, konwersacje i dialogi)</li>
                            <li>
                                bycie spójnym, autentycznym i szczerym (budujemy relacje opartą na naszych wartościach i
                                wzajemnym zaufaniu)
                            </li>
                            <li>
                                korzystanie ze świata technologii (zajęcia odbywają się na platformie Zoom, Skype lub
                                Teams a zadania często będą czekać na ciebie na naszych Social Media)
                            </li>
                        </ul>

                        <p>
                            Szkoła rozmowni.pl jest dla Ciebie, jeśli odpowiada Ci przyjazna atmosfera bez szkolnych
                            ocen i testów, za to ze wsparciem i uśmiechem. W przyjaznym środowisku, zachęcającym do
                            otwarcia się, popełniania błędów i eksperymentowania!
                        </p>

                        <p>Szkoła rozmowni.pl jest dla Ciebie, jeśli przygotowujesz się do egzaminu:</p>
                        <ul className="pt-2">
                            <li>ósmoklasisty</li>
                            <li>maturalnego</li>
                            <li>Cambridge (np. B2 First Certificate)</li>
                            <li>na studia zagraniczne</li>
                        </ul>

                        <p>Szkoła rozmowni.pl jest dla Ciebie, jeśli:</p>
                        <ul className="pt-2">
                            <li>dobra znajomość angielskiego jest Ci potrzebna do zdobycia pracy marzeń</li>
                            <li>uczysz się lub studiujesz i zależy Ci na dobrych ocenach</li>
                            <li>chcesz bez ograniczeń podróżować po świecie</li>
                        </ul>

                        <p>
                            Niezależnie jaka jest Twoja motywacja - z chęcią będziemy Ci towarzyszyć w drodze do
                            upragnionej płynności językowej.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}

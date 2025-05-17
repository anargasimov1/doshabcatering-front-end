import './Faq.css';
import { Navbar } from '../../components/navbar/Navbar'

export const Faq = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2>Tez-tez Verilən Suallar</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    1. Sual 1: React.js nədir?
                                </button>
                            </h5>
                        </div>

                        <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                React.js, istifadəçi interfeyslərini qurmaq üçün JavaScript kitabxanasıdır.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    2. Sual 2: React komponentləri nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                Komponentlər, tətbiqinizin müstəqil və təkrar istifadə oluna bilən hissələridir.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    3. Sual 3: Bootstrap nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                Bootstrap, veb saytları sürətli inkişaf etdirmək üçün istifadə olunan açıq mənbəli bir CSS framework-dür.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    4. Sual 4: React-da State nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                State, React komponentlərinin öz daxilində saxladığı məlumatlardır.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    5. Sual 5: React Router nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseFive"
                            className="collapse"
                            aria-labelledby="headingFive"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                React Router, React tətbiqinizdə səhifələr arasında naviqasiyanı təmin edən bir kitabxanadır.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingSix">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                >
                                    6. Sual 6: React ilə formalar necə işləyir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseSix"
                            className="collapse"
                            aria-labelledby="headingSix"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                React-də formalar komponentlər olaraq idarə olunur və istifadəçi daxil etdiyi məlumatları state ilə izləyirik.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingSeven">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven"
                                >
                                    7. Sual 7: React ilə listələr necə göstərilir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseSeven"
                            className="collapse"
                            aria-labelledby="headingSeven"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                React-də listələr `map()` funksiyası ilə render edilir, hər bir element üçün unikal bir `key` verilməlidir.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingEight">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseEight"
                                    aria-expanded="false"
                                    aria-controls="collapseEight"
                                >
                                    8. Sual 8: React Hooks nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseEight"
                            className="collapse"
                            aria-labelledby="headingEight"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                Hooks, React-də sinif komponentləri əvəzinə funksional komponentlərdə state və digər React xüsusiyyətlərini istifadə etməyə imkan verən funksiyalardır.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingNine">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseNine"
                                    aria-expanded="false"
                                    aria-controls="collapseNine"
                                >
                                    9. Sual 9: JSX nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseNine"
                            className="collapse"
                            aria-labelledby="headingNine"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                JSX, JavaScript-də HTML-like sintaksis istifadə etməyə imkan verən bir təkrarlayıcıdır.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTen">
                            <h5 className="mb-0">
                                <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTen"
                                    aria-expanded="false"
                                    aria-controls="collapseTen"
                                >
                                    10. Sual 10: React-də prop-lar nədir?
                                </button>
                            </h5>
                        </div>
                        <div
                            id="collapseTen"
                            className="collapse"
                            aria-labelledby="headingTen"
                            data-parent="#faqAccordion"
                        >
                            <div className="card-body">
                                Props (properties), bir komponentdən digərinə məlumat göndərməyə imkan verən xüsusiyyətlərdir.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

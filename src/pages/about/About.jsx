import React from 'react';
import './About.css';
import { Navbar } from '../../components/navbar/Navbar';

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <section className="about-section py-5">
                    <div className="container">
                        <h1 className="text-center mb-4 fw-bold">Haqqımızda</h1>

                        {/* 1-ci blok */}
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={require('../../images/1689229526267493808_n.jpg')}
                                    alt="Komanda şəkli"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h4 className="fw-semibold mb-3">Biz kimik və niyə seçilirik?</h4>
                                <p>
                                    Doshabcatering.az olaraq 2022-ci ildən bəri yemək çatdırılmasına yeni bir nəfəs gətirmək üçün yola çıxmışıq. Ənənəvi dadları müasir təqdimatla birləşdirərək, müştərilərimizə həm ləzzətli, həm də sağlam alternativlər təqdim edirik. Sürətli həyat tərzində vaxtınıza qənaət edərək evinizə və ofisinizə restoran keyfiyyətində yeməklər çatdırırıq.
                                </p>
                            </div>
                        </div>

                        {/* 2-ci blok */}
                        <div className="row mb-5 align-items-center flex-md-row-reverse">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={require('../../images/Pəhriz çörək.jpg')}
                                    alt="Ərzaqlar"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h4 className="fw-semibold mb-3">Dəyərlərimiz və yanaşmamız</h4>
                                <p>
                                    Bizim üçün yemək sadəcə qida deyil – bu sevgi, diqqət və məsuliyyətin bir ifadəsidir. Hər sifarişi elə hazırlayırıq ki, onu öz ailəmizə təqdim edirmişik kimi hiss edək.
                                </p>
                                <p>
                                    Mətbəximizdə istifadə olunan hər bir ərzaq yerli fermerlərdən və təsdiqlənmiş təchizatçılardan alınır. Menyumuzda yer alan bütün yeməklər təzə, balanslaşdırılmış və qidalandırıcıdır.
                                </p>
                            </div>
                        </div>

                        {/* 3-cü blok */}
                        <div className="row mb-5 align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={require('../../images/9.jpg')}
                                    alt="Texnologiya"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h4 className="fw-semibold mb-3">Texnologiya ilə ləzzəti birləşdiririk</h4>
                                <p>
                                    Biz yalnız bir yemək brendi deyilik — biz rəqəmsal platforma üzərindən yemək mədəniyyəti yaradırıq. İstər mobil tətbiqimiz, istərsə də Wolt platforması üzərindən, sifarişlərinizi bir neçə toxunuşla verə bilərsiniz.
                                </p>
                                <p>
                                    Ofislər üçün korporativ paketlər, həftəlik abunə menyular və xüsusi diyetik seçimlərlə, fərdi və şirkət ehtiyaclarını eyni dərəcədə qarşılayırıq.
                                </p>
                            </div>
                        </div>

                        {/* 4-cü blok - Sertifikat */}
                        <div className="row mb-5 align-items-center flex-md-row-reverse">
                            <div className="col-md-6 mb-4 mb-md-0 text-center">
                                <img
                                    src={require('../../images/sertifikat.jpg')}
                                    alt="Sertifikat"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                <h4 className="fw-semibold mb-3">Sağlamlıq və təhlükəsizlik ön plandadır</h4>
                                <p>
                                    Doshabcatering.az olaraq, qida təhlükəsizliyi sahəsində ciddi standartlara əməl edirik. ISO 22000:2018 qida təhlükəsizliyi menecment sisteminə uyğun fəaliyyət göstəririk. Hər işçimiz gigiyena və qida təhlükəsizliyi üzrə təlimlər alır.
                                </p>
                                <p>
                                    Məqsədimiz sadəcə doyuzdurmaq deyil — sizi sağlam saxlamaq, rahatlaşdırmaq və sevindirməkdir.
                                </p>
                            </div>
                        </div>

                        {/* 5-ci blok */}
                        <div className="row mb-4">
                            <div className="col text-center">
                                <h4 className="fw-semibold mb-3">Niyə bizi seçməlisiniz?</h4>
                                <ul className="list-unstyled fs-5">
                                    <li>✅ Gündəlik təzə və keyfiyyətli məhsullar</li>
                                    <li>🚚 Sürətli və etibarlı çatdırılma xidməti</li>
                                    <li>🧑‍🍳 Peşəkar aşbaz və təcrübəli personal</li>
                                    <li>🏆 Sertifikatlı və gigiyenik mətbəx</li>
                                    <li>📱 Rahat sifariş sistemi (veb, mobil, Wolt)</li>
                                    <li>🧘‍♀️ Sağlamlıq və balanslı qida prioriteti</li>
                                    <li>💼 Korporativ və fərdi müştərilər üçün fərqli menyular</li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="row">
                            <div className="col text-center">
                                <h5 className="fw-bold">Siz də dadın fərqini hiss edin!</h5>
                                <a href="/contact" className="btn btn-warning mt-3 px-4 py-2">
                                    Əlaqə Saxla
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

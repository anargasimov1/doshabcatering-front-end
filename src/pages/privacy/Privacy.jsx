import React from 'react';
import './Privacy.css';
import { Navbar } from '../../components/navbar/Navbar';

export const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className="privacy-page container py-5">
                <h1 className="fw-bold text-center mb-4">Məxfilik Siyasəti</h1>
                <p className="text-muted text-center">Son yenilənmə tarixi: 19 Aprel 2025</p>

                <div className="privacy-content mt-4">

                    <section>
                        <h4>1. Giriş</h4>
                        <p>
                            Bu Məxfilik Siyasəti “Doshab Catering MMC” (bundan sonra “biz”, “bizim”, “şirkət”) tərəfindən idarə olunan **www.doshabcatering.az** saytında və xidmətlərimizdə istifadəçilərdən toplanan məlumatların necə toplanması, istifadəsi, saxlanması və qorunması ilə bağlı məlumat verir. Saytdan istifadə etməklə, bu siyasətlə razı olduğunuzu qəbul edirsiniz.
                        </p>
                    </section>

                    <section>
                        <h4>2. Topladığımız Məlumatlar</h4>
                        <p>
                            Biz istifadəçilərdən aşağıdakı məlumatları toplaya bilərik:
                            <ul>
                                <li>Şəxsi məlumatlar: Ad, soyad, telefon nömrəsi, email ünvanı</li>
                                <li>Çatdırılma məlumatları: Ünvan, şirkət/iş yeri adı, ofis və ya mənzil nömrəsi</li>
                                <li>Sifariş məlumatları: Seçilmiş yeməklər, ödəniş üsulu, sifariş tarixçəsi</li>
                                <li>Texniki məlumat: IP ünvanı, cihaz və brauzer tipi, əməliyyat sistemi</li>
                                <li>Cookies və analitik məlumatlar: Sayt istifadəsi, baxış tarixçəsi, yerləşdiyiniz ölkə/şəhər</li>
                                <li>Lokasiya məlumatı (yalnız siz razılıq verdikdə)</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h4>3. Məlumatların Necə Toplanır</h4>
                        <p>
                            Məlumatlar aşağıdakı vasitələrlə toplanır:
                            <ul>
                                <li>Saytda qeydiyyat və sifariş formalarının doldurulması</li>
                                <li>Əlaqə forması vasitəsilə bizimlə yazışma</li>
                                <li>Cookies və digər izləmə texnologiyaları</li>
                                <li>Tərəfdaş sistemlər (məsələn, Wolt inteqrasiyası və ödəniş platformaları) vasitəsilə</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h4>4. Məlumatların İstifadəsi</h4>
                        <p>
                            Topladığımız məlumatlardan aşağıdakı məqsədlərlə istifadə edirik:
                            <ul>
                                <li>Sifarişlərin icrası və çatdırılması</li>
                                <li>Müştəri dəstəyi və əlaqə məqsədilə</li>
                                <li>Saytın texniki inkişafı və xidmətlərin təkmilləşdirilməsi</li>
                                <li>Hüquqi öhdəliklərə əməl etmək</li>
                                <li>Marketinq və kampaniyalar haqqında bildiriş göndərmək (yalnız icazə verdiyiniz halda)</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h4>5. Məlumatların Saxlanma Müddəti</h4>
                        <p>
                            Məlumatlar yalnız xidmət məqsədilə və qanunvericiliyə uyğun olaraq müəyyən müddətə saxlanılır:
                            <ul>
                                <li>Sifariş məlumatları – minimum 1 il (vergi və audit səbəbi ilə)</li>
                                <li>Hesab silindikdən sonra bəzi məlumatlar 90 günə qədər saxlanıla bilər</li>
                                <li>Cookies – 6 aya qədər (və ya istifadəçinin brauzer seçimlərinə əsasən)</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h4>6. Məlumatların Qorunması</h4>
                        <p>
                            Biz sizin məlumatlarınızın təhlükəsizliyini təmin etmək üçün aşağıdakı tədbirləri görürük:
                            <ul>
                                <li>SSL sertifikatı ilə bütün məlumatların şifrələnməsi</li>
                                <li>Şifrəli ödəniş sistemləri</li>
                                <li>Server və məlumat bazalarının mühafizəsi</li>
                                <li>Məlumatlara yalnız icazəli şəxslərin çıxışı</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h4>7. Məlumatların Üçüncü Tərəflərlə Paylaşılması</h4>
                        <p>
                            Sizin məlumatlarınız aşağıdakı hallar istisna olmaqla üçüncü tərəflərlə paylaşılmır:
                            <ul>
                                <li>Ödəniş sistemləri (banklar) | Kartla ödənişlərin icrası</li>
                                <li>Çatdırılma partnyorları (məsələn, Wolt) | Sifarişlərin çatdırılması</li>
                                <li>Texniki xidmət tərəfdaşları | Server hostinq və IT dəstək</li>
                                <li>Hüquq-mühafizə və dövlət orqanları | Qanunla tələb olunduqda</li>
                            </ul>
                            Məlumatlar heç bir halda kommersiya məqsədilə satılmır.
                        </p>
                    </section>

                    <section>
                        <h4>8. İstifadəçi Hüquqları</h4>
                        <p>
                            Siz aşağıdakı hüquqlara maliksiniz:
                            <ul>
                                <li>Məlumatlarınızı görmək və düzəltmək</li>
                                <li>Məlumatlarınızın silinməsini tələb etmək</li>
                                <li>Məlumatların istifadə və emalına etiraz etmək</li>
                                <li>Razılığınızı geri çəkmək</li>
                            </ul>
                            Bu hüquqlardan istifadə üçün bizimlə <strong>support@doshabcatering.az</strong> ünvanına yazaraq əlaqə saxlaya bilərsiniz.
                        </p>
                    </section>

                    <section>
                        <h4>9. Cookies Siyasəti</h4>
                        <p>
                            Saytımız sizə daha fərdiləşdirilmiş təcrübə təqdim etmək üçün cookies istifadə edir. İstədiyiniz halda cookies istifadəsini brauzerinizdə deaktiv edə bilərsiniz, lakin bu sayt funksionallığına təsir edə bilər.
                        </p>
                    </section>

                    <section>
                        <h4>10. Uşaqlara Aid Məlumatlar</h4>
                        <p>
                            Saytımız 16 yaşdan aşağı şəxslər üçün nəzərdə tutulmayıb. Əgər təsadüfən bu yaş qrupuna aid şəxslərin məlumatları toplanarsa, həmin məlumatlar dərhal silinir.
                        </p>
                    </section>

                    <section>
                        <h4>11. Dəyişikliklər və Yeniləmələr</h4>
                        <p>
                            Biz bu Məxfilik Siyasətini zaman-zaman yeniləyə bilərik. Yenilənmələr barədə sizi veb sayt və ya email vasitəsilə məlumatlandıracağıq. Ən son versiya həmişə <strong>www.doshabcatering.az/privacy</strong> ünvanında əlçatan olacaq.
                        </p>
                    </section>

                    <section>
                        <h4>12. Əlaqə</h4>
                        <p>
                            Əgər bu Məxfilik Siyasəti ilə bağlı hər hansı sual və ya narahatlığınız varsa, bizimlə əlaqə saxlayın:
                            <br /><strong>Email:</strong> support@doshabcatering.az
                            <br /><strong>Telefon:</strong> +994 99 808 98 88
                            <br /><strong>Ünvan:</strong> Bakı şəhəri, Azərbaycan
                        </p>
                    </section>

                </div>
            </div>
        </>
    );
}

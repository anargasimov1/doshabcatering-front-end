import { Navbar } from '../../components/navbar/Navbar'

const faqData = [
    {
        question: "Sifarişi hansı bölgələrə çatdırırsınız?",
        answer:
            "Hazırda Bakı şəhəri və ətraf ərazilərə xidmət göstəririk. Digər bölgələr üçün çatdırılma imkanlarımız haqqında əlavə məlumat almaq üçün bizimlə əlaqə saxlayın.",
    },
    {
        question: "Texniki dəstək və suallar üçün necə əlaqə saxlaya bilərəm?",
        answer:
            "Hər hansı texniki problem və ya sualınız üçün bizim texniki dəstək komandamızla support@doshabcatering.az ünvanı vasitəsilə əlaqə saxlaya bilərsiniz.",
    },
    {
        question: "Sifarişi necə verə bilərəm?",
        answer:
            "Saytda qeydiyyatdan keçdikdən sonra məhsulları seçib səbətə əlavə edin və ödənişi tamamlayın. Sifarişiniz təsdiq olunduqdan sonra kurierlərmiz ünvana çatdırılma edəcək.",
    },
    {
        question: "Korporativ sifarişlər üçün xüsusi endirimlər mövcuddurmu?",
        answer:
            "Bəli, böyük həcmdə sifariş verən korporativ müştərilərimiz üçün xüsusi endirimlər və fərdi təkliflər hazırlanır. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
    },
    {
        question: "Sifarişimi necə izləyə bilərəm?",
        answer:
            "Sifarişiniz təsdiq olunduqdan sonra, çatdırılma statusu barədə məlumatı saytdan izləyə bilərsiz.",
    },
    {
        question: "Sifarişi dəyişmək və ya ləğv etmək mümkündürmü?",
        answer:
            "Sifariş çatdırılmadan əvvəl dəyişiklik və ləğv etmək mümkündür. Bunun üçün bizimlə əlaqə saxlayın.",
    },
    {
        question: "Çatdırılma zamanı məhsullarda problem yaranarsa nə etməliyəm?",
        answer:
            "Əgər çatdırılan məhsullarda hər hansı problem və ya qüsur aşkar etsəniz, dərhal support@doshabcatering.az ünvanına müraciət edin. Problemi ən qısa zamanda həll etməyə çalışacağıq.",
    },
];

export const Faq = () => {
    return (
        <>
            <Navbar />

            <div className="container my-5">
                <h2 className="mb-4 text-center">Tez-tez Verilən Suallar</h2>
                <div className="accordion" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
};


import './HomePage.css';
import { Navbar } from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import Features from '../../components/features/Features'
import BusinessLunch from '../../components/businessLunch/BusinessLunch'
import { useEffect } from 'react';

export const HomePage = () => {

    useEffect(() => {getData()}, []);

    function getData() {
        const itemStr = localStorage.getItem("time");
        if (!itemStr) {
            return null;
        }
        let time = new Date().getTime();
        if (itemStr < time) {
            localStorage.removeItem("logged")
            localStorage.removeItem("email")
        }
    }

    return (
        <div>
            <Navbar />

            <div>

                <section className="bg-dark text-white text-center py-5 hero-section b-image">
                    <div className="container">
                        <h1 className="display-4 fw-bold">Ləzzətin Ünvanı</h1>
                        <p className="lead">Tədbirlər üçün yüksək keyfiyyətli iaşə xidmətləri</p>
                        <a href="/products" className="btn btn-warning btn-lg mt-3">Menyuya Bax</a>
                    </div>
                </section>

                <section id="services" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Xidmətlərimiz</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img style={{ minHeight: "232px" }} src="https://www.lavanguardia.com/files/image_449_220/uploads/2020/05/11/5f15f206de817.jpeg" className="card-img-top" alt="Buffet" />
                                    <div className="card-body">
                                        <h5 className="card-title">Buffet Xidmətləri</h5>
                                        <p className="card-text">Tədbirlər üçün geniş və dadlı menyular.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img style={{ minHeight: "232px" }} src="https://lux-life.digital/wp-content/uploads/2019/09/7-quirky-catering-ideas-for-corporate-events.jpg" className="card-img-top" alt="Wedding" />
                                    <div className="card-body">
                                        <h5 className="card-title">Ad günü və Nişan</h5>
                                        <p className="card-text">Özəl günlər üçün mükəmməl ləzzətlər.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img style={{ minHeight: "232px" }} src={require('../../images/cooprative.jpg')} className="card-img-top" alt="Corporate" />
                                    <div className="card-body">
                                        <h5 className="card-title">Korporativ Tədbirlər</h5>
                                        <p className="card-text">Ofis və iş görüşmələri üçün rahat iaşə.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="bg-light py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={require('../../images/logo.jpg')}
                                    alt="Chef"
                                    style={{ maxHeight: "400px" }}
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2>Biz Kimik?</h2>
                                <p>
                                    Çox illik təcrübəyə malik komandamızla sizə ən yüksək keyfiyyətli və dadlı iaşə xidmətləri təqdim edirik. Müştəri məmnuniyyəti bizim üçün prioritetdir.
                                </p>
                                <a href="/about" className="btn btn-outline-dark">Ətraflı</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Features />
            <BusinessLunch />
            <HeroSection />
            <Footer />
        </div>
    )
}

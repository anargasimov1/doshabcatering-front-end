import './HomePage.css';
import { Navbar } from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HeroSection from '../../components/heroSection/HeroSection'
import Features from '../../components/features/Features'
import BusinessLunch from '../../components/businessLunch/BusinessLunch'

export const HomePage = () => {
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

                {/* Services Section */}
                <section id="services" className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Xidmətlərimiz</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3WzjgSiFYnE-FnrUkWbr5x3BIYUKs3XZWQ&s" className="card-img-top" alt="Buffet" />
                                    <div className="card-body">
                                        <h5 className="card-title">Buffet Xidmətləri</h5>
                                        <p className="card-text">Tədbirlər üçün geniş və dadlı menyular.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img src="https://source.unsplash.com/400x250/?wedding-food" className="card-img-top" alt="Wedding" />
                                    <div className="card-body">
                                        <h5 className="card-title">Toy və Nişan</h5>
                                        <p className="card-text">Özəl günlər üçün mükəmməl ləzzətlər.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    <img src="https://source.unsplash.com/400x250/?corporate-event" className="card-img-top" alt="Corporate" />
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
                                    src="https://source.unsplash.com/600x400/?chef,catering"
                                    alt="Chef"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2>Biz Kimik?</h2>
                                <p>
                                    10 illik təcrübəyə malik komandamızla sizə ən yüksək keyfiyyətli və dadlı iaşə xidmətləri təqdim edirik. Müştəri məmnuniyyəti bizim üçün prioritetdir.
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

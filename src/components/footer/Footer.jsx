import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row">

                    {/* Brend və təsvir */}
                    <div className="col-md-4 mb-4">
                        <h4 className="text-warning">Doshabcatering</h4>
                        <p>
                            Keyfiyyətli və dadlı yeməklərin ünvanı. Ləzzətin fəqrini hiss et!.
                        </p>
                    </div>

                    {/* Linklər */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Faydalı Linklər</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-decoration-none text-light">Haqqımızda</a></li>
                            <li><a href="/products" className="text-decoration-none text-light">Məhsullar</a></li>
                            <li><a href="/contact" className="text-decoration-none text-light">Əlaqə</a></li>
                            <li><a href="/faq" className="text-decoration-none text-light">Sual-Cavab</a></li>
                            <li><a href="/privacy" className="text-decoration-none text-light">Məxfilik siyasəti</a></li>
                        </ul>
                    </div>

                    {/* Sosial media */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Bizi izləyin</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light fs-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-light fs-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-light fs-4">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="#" className="text-light fs-4">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-light" />

                <div className="text-center">
                    <small>&copy; {new Date().getFullYear()} Doshabcatering. Bütün hüquqlar qorunur. <a target='_blank' href="https://anargasimov.42web.io">Powered by Anar Gasimov</a></small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

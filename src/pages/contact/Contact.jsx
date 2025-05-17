import React from 'react';
import './Contact.css';
import { Navbar } from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-page">
             
                <section className="contact-header text-white text-center d-flex align-items-center">
                    <div className="container bg-primary-subtle text-white py-4 rounded">
                        <h1 className="fw-bold display-5">Əlaqə</h1>
                        <p className="lead">Bizimlə əlaqə saxlayın – suallarınızı və təkliflərinizi gözləyirik.</p>
                    </div>

                </section>

            
                <section className="contact-content py-5">
                    <div className="container">
                        <div className="row g-4">
                       
                            <div className="col-md-5">
                                <h3>Bizimlə əlaqə</h3>
                                <p>Hər hansı sualınız, təklifiniz və ya sifariş üçün bizimlə əlaqə saxlaya bilərsiniz.</p>
                                <ul className="list-unstyled fs-5">
                                    <li><strong>📍 Ünvan:</strong> Bakı, Azərbaycan</li>
                                    <li><strong>📞 Telefon:</strong> +994 99 808 98 88</li>
                                    <li><strong>📧 Email:</strong> info@doshabcatering.az</li>
                                    <li><strong>⏰ İş saatları:</strong> B.e - Şənbə / 08:00 - 19:00</li>
                                </ul>
                            </div>

                          
                            <div className="col-md-7">
                                <h3>Bizə yazın</h3>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Ad Soyad</label>
                                        <input type="text" className="form-control" id="name" placeholder="Adınızı və soyadınızı yazın" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="nümunə: siz@mail.com" required />
                                    </div>
                                     <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Telefon</label>
                                        <input type="number" className="form-control" id="phone" placeholder="nümunə: 994123456789" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Mövzu</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Mövzunu yazın" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Mesajınız</label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Mesajınızı daxil edin..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-warning px-4">Göndər</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

              
                <section className="map-section">
                    <iframe
                        title="Baki Xəritə"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7754733318424!2d49.85198217583516!3d40.37719487144512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d74b6a7e29b%3A0xf5f8dbf76c5a51c4!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1713534240000"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </div>

            <Footer />
        </>
    );
}

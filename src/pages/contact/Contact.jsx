import './Contact.css';
import { Navbar } from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';

export const Contact = () => {

    const url = process.env.REACT_APP_URL;

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [toggle, setToggle] = useState(false)

    const sendMessage = () => {



        let messageDetalis = { fullName, email, phone, subject, message };

        try {
            if (fullName !== "" && email !== "" && message !== "") {
                setToggle(true)
                fetch(`${url}/public/message`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(messageDetalis)
                }).then(r => {
                    if (r.ok) {
                        setToggle(false)
                        Swal.fire('Uğur!', 'Mesaj uğurla göndərildi ✅', 'success');
                        setFullName("")
                        setEmail("")
                        setPhone("")
                        setSubject("")
                        setMessage("")

                    }
                    else {
                        Swal.fire('Xəta', 'Mesaj göndərilə bilmədi', 'error');
                    }
                })
            }
            else {
                Swal.fire('Xəbərdarlığ', 'Zəhmət olmasa xanaları doldurun', 'info');
            }

        } catch (error) {
            setToggle(false)
            Swal.fire('Server Xətası', 'Zəhmət olmasa yenidən cəhd edin.', 'warning');
        }
    }



    return (
        <>
            <Navbar />

            {toggle && <div className='d-flex justify-content-center align-items-center' style={{ zIndex: "55", position: "absolute", height: "130vh", width: "100%" }}>
                <HashLoader color="#fbbf24" size={250} />
            </div>}



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
                                        <input onChange={e => setFullName(e.target.value)} value={fullName} type="text" className="form-control" id="name" placeholder="Adınızı və soyadınızı yazın" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" placeholder="nümunə: siz@mail.com" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Telefon</label>
                                        <input onChange={e => setPhone(e.target.value)} value={phone} type="number" className="form-control" id="phone" placeholder="nümunə: 994123456789" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Mövzu</label>
                                        <input onChange={e => setSubject(e.target.value)} value={subject} type="text" className="form-control" id="subject" placeholder="Mövzunu yazın" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Mesajınız</label>
                                        <textarea onChange={e => setMessage(e.target.value)} value={message} className="form-control" id="message" rows="5" placeholder="Mesajınızı daxil edin..." required></textarea>
                                    </div>
                                    <button onClick={sendMessage} type="button" className="btn btn-warning px-4">Göndər</button>
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

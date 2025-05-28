import './Register.css';
import { useState, useContext, useEffect } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { AuthContext } from '../../contex/AuthContext';
import { HashLoader } from 'react-spinners';

export const Register = () => {
    const [checked, setChecked] = useState(false);
    const { handleRegistSubmit, error, setName, setSurname, setEmail, setPassword, setPhone_number, toggle } = useContext(AuthContext);

    const handleChange1 = e => setChecked(e.target.checked);

    useEffect(() => {
        let isLogged = localStorage.getItem('logged')
        if (isLogged) {
            window.location.href = "/"
        }

    }, [])

    return (
        <>
            <Navbar />

            {toggle && <div className='d-flex justify-content-center align-items-center' style={{ zIndex: "55", position: "absolute", height: "100vh", width: "100%" }}>
                <HashLoader color="#fbbf24" size={150} />
            </div>}

            <div className="register-page d-flex align-items-center justify-content-center" style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #74EBD5 0%, #9FACE6 100%)",
                padding: "30px"
            }}>
                <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px" }}>
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">Qeydiyyat</h2>
                        <p className="text-muted">Yeni hesab yaradın</p>
                    </div>

                    <form>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className='form-control'
                                id="name"
                                placeholder="Ad"
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name">Ad</label>
                            {error.name && <div className="text-danger">{error.name}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="surname"
                                placeholder="Soyad"
                                onChange={e => setSurname(e.target.value)}
                                required
                            />
                            <label htmlFor="surname">Soyad</label>
                            {error.surname && <div className="text-danger">{error.surname}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className='form-control'
                                id="email"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            {error.email && <div className="text-danger">{error.email}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className='form-control'
                                id="phone"
                                placeholder="+994551234567"
                                onChange={e => setPhone_number(e.target.value)}
                                required
                            />
                            <label htmlFor="phone">Telefon nömrəsi</label>
                            {error.phone_number && <div className="text-danger">{error.phone_number}</div>}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className='form-control'
                                id="password"
                                placeholder="Şifrə"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password">Parol</label>
                            {error.password && <div className="text-danger">{error.password}</div>}
                            <div className="form-text mt-1">
                                6-12 simvol arası, rəqəm və hərf olmalıdır.
                            </div>
                        </div>

                        <div className="form-check mb-4 custom-formChek">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="check"
                                checked={checked}
                                onChange={handleChange1}
                                required
                            />
                            <label className="form-check-label custom" htmlFor="check">
                                İstifadəçi şərtlərini qəbul edirəm (<a href="/privacy" className="text-decoration-none">məxfilik siyasəti</a>)
                            </label>
                        </div>

                        <div className="d-grid">
                            <button type="button" className="btn btn-primary btn-lg" onClick={e => checked ? handleRegistSubmit(e) : alert("Zəhmət olmasa istifadəçi şərtlərini qəbul edin!")}>
                                Qeydiyyatdan Keç
                            </button>
                        </div>

                        <p className="text-center text-muted mt-3">
                            Artıq hesabınız var? <a href="/login" className="text-decoration-none fw-bold">Daxil olun</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

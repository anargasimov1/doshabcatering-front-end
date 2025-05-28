import './Sendotp.css';
import { Navbar } from '../../components/navbar/Navbar'
import { AuthContext } from '../../contex/AuthContext';
import { useContext, useEffect } from 'react';
import { HashLoader } from 'react-spinners';

export const SendOtp = () => {

    useEffect(() => {
        const isLogged = localStorage.getItem('logged');
        if (isLogged) {
            window.location.href = '/'
        }

    }, [])

    const { setEmail, error, sendotpForUpdatePassword, toggle } = useContext(AuthContext)

    return (
        <>
            <Navbar />

            {toggle && <div className='loading'>
                <HashLoader  color="#fbbf24" size={150} />
            </div>}

            <div className="otp bg-light">

                <form className="container-card container">
                    <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px", alignItems: "center" }}>
                        <p className="fw-medium">Zəhmət olmasa emailnizi daxil edin</p>

                        <div className="form-floating mb-3 ">
                            <input
                                style={{ width: "300px" }}
                                type="email"
                                className='form-control'
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            {error.email && <div className="text-danger">{error.email}</div>}
                        </div>

                        <div className="d-grid btn-send">
                            <button type='button' onClick={e => sendotpForUpdatePassword(e)} className="btn btn-primary btn-lg" style={{ width: "300px" }} >
                                Göndər
                            </button>
                        </div>

                    </div>
                </form>

            </div>


        </>
    )
}

import './Sendotp.css';
import { Navbar } from '../../components/navbar/Navbar'
import { AuthContext } from '../../contex/AuthContext';
import { useContext } from 'react';

export const SendOtp = () => {

    const { setEmail, error } = useContext(AuthContext)

    return (
        <>
            <Navbar />

            <div className="otp bg-light">

                <form className="container-card container">
                    <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px", alignItems: "center" }}>
                        <p className="fw-medium">Zəhmət olmasa emailnizi daxil edin</p>

                        <div className="form-floating mb-3 ">
                            <input
                                style={{ width: "400px" }}
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
                            <button type="button" className="btn btn-primary btn-lg" style={{ width: "400px" }} >
                                Göndər
                            </button>
                        </div>

                    </div>
                </form>

            </div>


        </>
    )
}

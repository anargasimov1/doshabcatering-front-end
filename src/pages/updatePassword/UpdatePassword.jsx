import { Navbar } from '../../components/navbar/Navbar'
import './UpdatePassword.css'

export const UpdatePassword = () => {
    return (
        <>

            <Navbar />
            <div className="otp bg-light">

                <form className="container-card container">
                    <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px", alignItems: "center" }}>
                        <p class="fw-medium text-info">Zəhmət olmasa emailinizə göndərilən 6 rəqəmli otp kodu və yeni parolu daxil edin!</p>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="otp">OTP Kod</label>
                            <input
                                style={{ width: "400px" }}
                                type="text"
                                className='form-control'
                                id="otp"
                                name="otp"
                                placeholder="Otp Kod"
                                // onChange={e => setEmail(e.target.value)}
                                required
                            />

                            {/* {error.email && <div className="text-danger">{error.email}</div>} */}
                        </div>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="otp">Yeni Parol</label>
                            <input
                                style={{ width: "400px" }}
                                type="password"
                                className='form-control'
                                id="otp"
                                name="otp"
                                placeholder="Yeni Parol"
                                // onChange={e => setEmail(e.target.value)}
                                required
                            />

                            {/* {error.email && <div className="text-danger">{error.email}</div>} */}
                        </div>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="otp">Parolu təkrar edin</label>
                            <input
                                style={{ width: "400px" }}
                                type="password"
                                className='form-control'
                                id="otp"
                                name="otp"
                                placeholder="Parolu təkrar edin"
                                // onChange={e => setEmail(e.target.value)}
                                required
                            />

                            {/* {error.email && <div className="text-danger">{error.email}</div>} */}
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

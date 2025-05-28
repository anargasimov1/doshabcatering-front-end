import { useContext, useEffect } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { AuthContext } from '../../contex/AuthContext'

export const UpdatePassword = () => {

    useEffect(() => {
        const isLogged = localStorage.getItem('logged');
        if (isLogged) {
            window.location.href = '/'
        }

    }, [])


    const { setOtp, setPassword, setConformPassword, updatepassword, error } = useContext(AuthContext)

    return (
        <>

            <Navbar />
            <div className="otp bg-light">

                <form className="container-card container">
                    <div className="card p-5 shadow-lg" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px", alignItems: "center" }}>
                        <p className="fw-medium text-info">Zəhmət olmasa emailinizə göndərilən 6 rəqəmli otp kodu və yeni parolu daxil edin!</p>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="otp">OTP Kod</label>
                            <input
                                style={{ width: "300px" }}
                                type="text"
                                className='form-control'
                                id="otp"
                                placeholder="Otp Kod"
                                onChange={e => setOtp(e.target.value)}
                                required
                            />

                        </div>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="password">Yeni Parol</label>
                            <input
                                style={{ width: "300px" }}
                                type="password"
                                className='form-control'
                                id="password"
                                name="otp"
                                placeholder="Yeni Parol"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            {error.password && <div className="text-danger">{error.password}</div>}
                            <div className="form-text mt-1">
                                6-12 simvol arası, rəqəm və hərf olmalıdır.
                            </div>
                        </div>

                        <div className="form-label mb-4 ">
                            <label className="mb-2" htmlFor="c-password">Parolu təkrar edin</label>
                            <input
                                style={{ width: "300px" }}
                                type="password"
                                className='form-control'
                                id="c-password"
                                name="otp"
                                placeholder="Parolu təkrar edin"
                                onChange={e => setConformPassword(e.target.value)}
                                required
                            />

                        </div>

                        <div className="d-grid btn-send">
                            <button onClick={updatepassword} type="button" className="btn btn-primary btn-lg" style={{ width: "300px" }} >
                                Göndər
                            </button>
                        </div>

                    </div>
                </form>

            </div>

        </>
    )
}

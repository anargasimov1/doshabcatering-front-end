import './Login.css'
import { Navbar } from '../../components/navbar/Navbar'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contex/AuthContext'
import { HashLoader } from 'react-spinners';

export const Login = () => {

  useEffect(() => {
    let isLogged = localStorage.getItem('logged')
    if (isLogged) {
      window.location.href = "/"
    }

  }, []);

  const { handleLoginSubmit, toggle, error, setEmail, setPassword } = useContext(AuthContext)

  return (
    <>
      <Navbar />
      {toggle && <div className='d-flex justify-content-center align-items-center' style={{ zIndex: "55", position: "absolute", height: "100vh", width: "100%" }}>
        <HashLoader color="#fbbf24" size={150} />
      </div>}

      <div className="login-page" style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-lg p-4" style={{ borderRadius: "20px" }}>
                <div className="text-center mb-4">
                  <h2 className="fw-bold">Xoş Gəldiniz!</h2>
                  <p className="text-muted">Hesabınıza daxil olun</p>
                </div>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Email daxil edin" required />
                    {error.email && <div className="text-danger">{error.email}</div>}
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label">Şifrə</label>
                    <input name="password" onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Şifrənizi daxil edin" required />
                    {error.password && <div className="text-danger">{error.password}</div>}
                  </div>
                  <div className="d-grid mb-3">
                    <button onClick={handleLoginSubmit} type="submit" className="btn btn-primary btn-lg">Daxil Ol</button>
                  </div>

                  <p style={{ display: 'flex', flexDirection: "column" }} className="text-center text-muted">
                    <a className="text-decoration-none" href="/sendotp">Parolu unutdum</a>
                    Hesabın yoxdur? <a href="/register" className="text-decoration-none">Qeydiyyatdan keç</a>
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

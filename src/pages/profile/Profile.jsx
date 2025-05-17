import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';
import './Profile.css';



export const Profile = () => {

    useEffect(() => {

        let login = localStorage.getItem("login")
        if (login === null || login === false) {
            window.location.href = "/login"
        }
    }, [])

    const user = {
        name: "Əli Vəliyev",
        email: "ali@example.com",
        bio: "Mən bir Fullstack Developerəm. React və Node.js sahəsində ixtisaslaşmışam 🚀",
        avatar: "https://i.pravatar.cc/300?img=13"
    };

    const logout = () => {
        localStorage.setItem("login", false);
        window.location.href = "/"
    }

    return (
        <>
            <Navbar />
            <div className="profile-page" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)", paddingTop: "60px" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="card shadow-lg p-4" style={{ borderRadius: "20px", backgroundColor: "white" }}>
                                <div className="text-center">
                                    <p className='profile_name'>{user.name.substring(0, 1)}</p>
                                    <h2 className="fw-bold">{user.name}</h2>
                                    <p className="text-muted">{user.email}</p>
                                    <p className="mt-3">{user.bio}</p>
                                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                                        <button onClick={logout} type="button" className="btn btn-outline-danger btn-lg px-4">Çıxış Et</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-white mt-4">
                                <small>© 2025 Əli Vəliyev tərəfindən hazırlanıb</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};


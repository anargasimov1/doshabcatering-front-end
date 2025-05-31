import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import { Navbar } from '../../components/navbar/Navbar';


export const Profile = () => {

  const url = process.env.REACT_APP_URL;
  let email = localStorage.getItem('email');

  const sendotp = () => {
    fetch(`${url}/auth/otpCode/${email}`, {
      method: "GET",
      credentials: "include"
    }).then(r => {
      if (r.ok) {
        alert("Göndərildi")
      }
      else {
        alert("Xəta oldu birazdan birdə cəhd edin")
      }
    }).catch(e => { })

  }


  useEffect(() => {

    if (email) {
      fetch(`${url}/auth/${email}`).then(r => r.json())
        .then(r => {
          if (r !== null) {
            setOrders(r.orders);
            setUser(r.userInfo)
          }
        }).catch(e => { });
    }

  }, [])



  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    phone_number: '',
    verified: '',
    created_at: '',
  })


  const [orders, setOrders] = useState([])

  useEffect(() => {

    let login = localStorage.getItem("logged")
    if (login === null || login === false) {
      window.location.href = "/login"
    }
  }, [])




  const completedOrders = orders !== undefined && orders.filter((o) => o.status === 'COMPLATE');
  const activeOrders = orders !== undefined && orders.filter((o) => o.status !== 'COMPLATE');

  const stats = [
    { label: 'Sifarişlər', value: orders.length },
    { label: 'Xərclənmiş', value: `${orders.reduce((sum, o) => (sum + Number(o.prince)), 0).toFixed(2)} ₼` },
  ];


  const logout = () => {

    fetch(`${url}/auth/logout`)
      .then(r => {
        if (r.ok) {
          localStorage.removeItem("logged");
          localStorage.removeItem("email");
          window.location.href = "/"
        }
      }).catch(e => { })


  }

  return (
    <>
      <Navbar />

      {user.verified ? "" : <div className="alert alert-danger" role="alert">
        <p> Zəhmat olmasa emailnizi tesdiq edin!</p>
        <button onClick={sendotp} className='btn btn-primary'>Yenidən göndər</button>
      </div>
      }
      <div className="container my-5">
        {/* Profile Header */}
        <div style={{ maxWidth: "640px" }} className="card mb-4 shadow-sm">
          <div className="card-body d-flex align-items-center">
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
              style={{ width: 80, height: 80, fontSize: '1.5rem' }}
            >
              {user.name && user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h4>{user.name} &nbsp; {user.surname}</h4>
              <p className="text-muted mb-0">{user.email}</p>
            </div>
          </div>
          <button onClick={logout} style={{ maxWidth: "800px" }} className='btn btn-danger'// onClick={handleLogout}
          >
            🔒 Çıxış Et
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="row mb-4">
          {stats.map((stat, idx) => (
            <div className="col-md-3 mb-2" key={idx}>
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{stat.value}</h5>
                  <p className="card-text text-muted">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Info */}
        <ul className="list-group mb-4 shadow-sm">
          <li className="list-group-item">📞 Telefon: {user.phone_number}</li>
          <li className="list-group-item">🕓 Qeydiyyat: {user.created_at}</li>
        </ul>

        {/* Active Orders */}
        <div className="mb-4">
          <h5 className="text-warning">🟡 Aktiv Sifarişlər</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Tarix</th>
                <th>Mehsul</th>
                <th>Məbləğ</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.meals.split("Məhsul")}</td>
                  <td>{order.prince} ₼</td>
                  <td style={{
                    fontWeight: "bold",
                    color: order.status === "SENDING" && "#314FE8" ||
                      order.status === "APPROVED" && "#31E837" ||
                      order.status === "PENDING" && "#9C132E"
                  }}>
                    {order.status === "PENDING" && "Gözləyir"}
                    {order.status === "SENDING" && "Göndərildi"}
                    {order.status === "APPROVED" && "Təsdiq edildi"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Completed Orders */}
        <div className="mb-4">
          <h5 className="text-success">✅ Tamamlanmış Sifarişlər</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Tarix</th>
                <th>Mehsul</th>
                <th>Məbləğ</th>
              </tr>
            </thead>
            <tbody>
              {completedOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.meals}</td>
                  <td>{order.prince} ₼</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};


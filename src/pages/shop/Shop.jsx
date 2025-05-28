import { useContext, useEffect, useState } from 'react';
import './Shop.css'
import { HashLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { Navbar } from '../../components/navbar/Navbar';
import { ProductsContext } from '../../contex/ProductsContext';

export const Shop = () => {

  const [products, setProdutcs] = useState([]);


  const { getLocalStronge, countPlus, toggle, countMinus, sum, getSum, send, removeProductIsLocal, modal } = useContext(ProductsContext);

  useEffect(() => {
    setProdutcs(getLocalStronge);
  }, [toggle, modal]);


  const conformOrder = () => {
    Swal.fire({
      title: 'Sifarişi təsdiq edirsiniz?',
      html: `
        <strong>Cəmi məbləğ:</strong> <strong style="color:red">${sum.toFixed(2)} AZN</strong><br/>
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Bəli, təsdiq edirəm',
      cancelButtonText: 'Xeyr, ləğv et'
    }).then((result) => {
      if (result.isConfirmed) {
        send()
      } else {
        Swal.fire(
          'Ləğv edildi',
          '',
          'info'
        );
      }
    });
  };

  return (
    <>
      <Navbar />


      {modal && <div className='d-flex justify-content-center align-items-center' style={{ zIndex: "55", position: "absolute", height: "100vh", width: "100%" }}>
        <HashLoader color="#fbbf24" size={150} />
      </div>}

      {
        products !== null && products.length !== 0 ? <div className="container mt-2">
          <div className='row shop'>

            {
              products.map((product, index) => {
                return (
                  <div style={{ margin: "10px", maxWidth: '380px', fontSize: '14px', height: "300px" }} className="col-md-3 mb-3" key={index}>
                    <div style={{}} className="card product-card text-center h-100">

                      <div className="card-body">
                        <div>
                          <img style={{ width: "60%", marginBottom: "5px" }} src={product.imageUrl} alt="##" />
                        </div>
                        <div>
                          <h5 className="card-title">{product.name}</h5>
                          <p className="text-success fw-bold">{(product.price * product.count).toFixed(2)} ₼ </p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button onClick={() => { countPlus(product.id); getSum() }} className='btn btn-primary'>
                            <i className="fa-solid fa-circle-plus"></i>
                          </button>
                          <span className='text-dark-emphasis' style={{ fontWeight: 'bold', fontStyle: 'italic' }}> {product.count} </span>
                          <button onClick={() => { countMinus(product.id); getSum() }} className='btn btn-primary'>
                            <i className="fa-solid fa-circle-minus"></i>
                          </button>
                          <button onClick={() => removeProductIsLocal(product.id)} className='btn btn-danger ms-2'>
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
          <p style={{ textAlign: 'center', fontSize: "19px", fontWeight: 'bolder', border: "2px solid grey" }} className='text-success p-3 mt-3'>Cəmi: {sum.toFixed(2)} AZN</p>

          <div className="container d-flex justify-content-center align-items-center p-5">
            <button onClick={conformOrder} style={{ width: "500px", alignSelf: 'center', fontSize: "21px", fontWeight: 'bold' }} type='submit' className='btn btn-primary'>Sifarişi təsdiqlə</button>
          </div>

        </div> :
          <div className="container text-center py-5 mt-5">
            <div className="mb-4">
              <i className="bi bi-cart-x-fill" style={{ fontSize: '80px', color: '#6c757d' }}></i>
            </div>
            <h2 className="mb-3">Səbətiniz boşdur</h2>
            <p className="text-muted">Səbətə hələ heç bir məhsul əlavə olunmayıb.</p>
            <a href="/products" className="btn btn-primary btn-lg mt-3">
              Məhsullara bax
            </a>
          </div>

      }
    </>
  );
}

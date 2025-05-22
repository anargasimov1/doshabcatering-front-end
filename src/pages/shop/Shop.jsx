import { useContext, useEffect, useState } from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { ProductsContext } from '../../contex/ProductsContext';

export const Shop = () => {

  const [products, setProdutcs] = useState([]);

  const { getLocalStronge, countPlus, toggle, countMinus, sum, getSum, send } = useContext(ProductsContext);

  useEffect(() => {
    setProdutcs(getLocalStronge);
  }, [toggle]);


  return (
    <>
      <Navbar />
      {
        products !== null && products.length !== 0 ? <div className="container">
          <div className='row'>

            {
              products.map((product, index) => {
                return (
                  <div className="col-md-3 mb-3" key={index}>
                    <div className="card product-card text-center h-100">
                      <div className="position-relative">

                        <img src={product.img} className="card-img-top p-4" alt={product.name} />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="text-success fw-bold">{(product.price * product.count).toFixed(2)} ₼ </p>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button onClick={() => { countPlus(product.id); getSum() }} className='btn btn-primary'>+</button>
                          <span> {product.count} </span>
                          <button onClick={() => { countMinus(product.id); getSum() }} className='btn btn-primary'>-</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <p className='text-success'>cemi {sum.toFixed(2)} AZN</p>
            <button onClick={send} style={{ width: "500px", alignSelf: 'center' }} type='submit' className='btn btn-primary'>sifaris et</button>
          </div>
        </div> :
          <div>
            <p className='text-priamry'>mehsul secmemsiz</p>

          </div>

      }

    </>
  );
}

import React, { useEffect } from 'react'
import { Navbar } from "../../components/navbar/Navbar"
import "./Product.css"

export const Product = () => {

    const categorys = ["isti yemaxlar", "supalr", "yemekler", "diyetik", "sdvfg", "qwdqdertg"]

    const products = [
        { id: 1, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/I3FjZ8Z.png", ing: "duyu muyu nese " },
        { id: 2, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/5FzCqZr.png", ing: "un mun ng difi" },
        { id: 3, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/l5HNkMB.png", ing: "terkib nes elave grkir" },
        { id: 4, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/lqKLBTU.png", ing: "ddvfbg rkib l lerofro krkr" },
        { id: 1, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/I3FjZ8Z.png", ing: "vfkgk  frgkr ef  efrf rf" },
        { id: 2, name: "Fresh Tomato", price: 19, img: "https://i.imgur.com/5FzCqZr.png", ing: "fvbb rfro  ekrkr fkfeoef" },

    ];

    useEffect(() => {
        fetch("http://localhost:8080/public/meals").then(r => r.json()).then(g => console.log(g))
    }, [])

    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h2 className="fw-bold">Bizim Məhsullar</h2>
                <p className="text-muted">
                    İstədiyiniz məhsul növünü və kateqoriyanı seçərək seçimlərinizi fərdiləşdirin.
                </p>

                <div className="md-5">
                    {
                        categorys.map((i, index) => {
                            return (
                                <button className="btn btn-success me-2 category">{i}</button>
                            )
                        })
                    }
                </div>

                <div className="row">
                    {products.map(product => (
                        <div className="col-md-3 mb-3" key={product.id}>
                            <div className="card product-card text-center h-100">
                                <div className="position-relative">

                                    <img src={product.img} className="card-img-top p-4" alt={product.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="text-success fw-bold">{product.price.toFixed(2)} ₼ </p>
                                    <p>{product.ing}</p>
                                    <div className="d-flex justify-content-center gap-2">
                                        <button className="btn btn-success"><i className="bi bi-cart"></i> Səbətə əlavə et</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

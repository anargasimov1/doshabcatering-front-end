import { useContext, useState, useEffect } from 'react'
import { Navbar } from "../../components/navbar/Navbar"
import "./Product.css"
import { ProductsContext } from '../../contex/ProductsContext'
export const Product = () => {

    const { categorys, select, category, setCategory, addProductToLocalStronge, getLocalStronge } = useContext(ProductsContext);


    const [clickedButtons, setClickedButtons] = useState({});

    useEffect(() => {
        const storedClicks = localStorage.getItem("clickedButtons");
        if (storedClicks) {
            setClickedButtons(JSON.parse(storedClicks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("clickedButtons", JSON.stringify(clickedButtons));
    }, [clickedButtons]);

    const handleButtonClick = (product) => {
        addProductToLocalStronge(product);
        setClickedButtons(prev => ({
            ...prev,
            [product.id]: true
        }));
    };

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
                                <button onClick={() => setCategory(i)} key={index} className="btn btn-success me-2 category">{i}</button>
                            )
                        })
                    }
                </div>

                <div className="row">

                    {select(category).map((product, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <div className="card product-card text-center h-100">
                                <div className="position-relative">
                                    <img style={{ height: "200px", maxWidth: "250px", objectFit: "cover" }} src={product.imageUrl} className="card-img-top p-4" alt={product.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="text-success fw-bold">{product.price.toFixed(2)} ₼ </p>
                                    <p>{product.ingredients}</p>
                                    <div className="d-flex justify-content-center gap-2">
                                        <button style={{ fontWeight: "bold" }}
                                            onClick={() => handleButtonClick(product)} className={`btn ${clickedButtons[product.id] ? 'btn-primary' : 'btn-success'}`}>
                                            <i className="bi bi-cart"></i>
                                            {clickedButtons[product.id] ? 'Əlavə edildi' : 'Əlavə et'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div >

        </>
    )
}

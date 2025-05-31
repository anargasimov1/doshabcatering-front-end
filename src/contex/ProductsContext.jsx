import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const url = process.env.REACT_APP_URL

    const [categorys, setCategorys] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("suplar");
    const [toggle, setToggle] = useState(false);
    const [modal, setModal] = useState(false);
    const [sum, setSum] = useState(0.00);


    useEffect(() => { getCategorys(); getProducts(); getSum() }, []);

    const getProducts = () => fetch(`${url}/public/meals`).then(r => r.json()).then(g => setProducts(g));

    const getCategorys = () => {
        fetch(`${url}/public/category`)
            .then(res => res.json())
            .then(data => data.forEach(i => setCategorys(prew => [...prew, i.name])))
    }

    const getLocalStronge = () => {
        let stored = localStorage.getItem("products");
        let products = stored ? JSON.parse(stored) : [];
        return products;
    }

    const getLocationAsync = () => {
        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        resolve({
                            lat: position.coords.latitude,
                            lon: position.coords.longitude,
                        });
                    },
                    (error) => {
                        reject(error.message);
                    }
                );
            } else {
                reject("Geolocation not supported");
            }
        });
    };



    const countPlus = id => {
        getSum();
        let seleceteds = getLocalStronge();
        let findById = seleceteds.find(i => i.id === id)
        findById.count++;
        if (findById.count <= 10) {
            localStorage.setItem('products', JSON.stringify(seleceteds));
            setToggle(!toggle)
        }

        else {
            alert("maxsimum 10")
        }

    }

    const countMinus = id => {
        getSum()
        let seleceteds = getLocalStronge();
        let findById = seleceteds.find(i => i.id === id)
        findById.count--;
        if (findById.count >= 1) {
            localStorage.setItem('products', JSON.stringify(seleceteds));
            setToggle(!toggle)
        }
        else {
            alert("minumum 1")
        }
    }

    const getSum = () => {
        let select = getLocalStronge()
        let sum = 0;
        for (let i = 0; i < select.length; ++i) {
            sum += select[i].price * select[i].count
        }
        setSum(sum)
    }


    const addProductToLocalStronge = product => {
        setToggle(!toggle)
        let products = getLocalStronge();
        const alreadyExists = products.some((p) => p.id === product.id);

        if (!alreadyExists) {
            product.count = 1;
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));

        }
        else {
            alert("mehsul elave olunub")
        }

    }

    const removeProductIsLocal = id => {
        let allProducts = getLocalStronge();
        let ids = localStorage.getItem("clickedButtons");
        let parsedIds = JSON.parse(ids);
        parsedIds[id] = false;
        localStorage.setItem("clickedButtons", JSON.stringify(parsedIds))

        let filtered = allProducts.filter(i => i.id !== id);
        localStorage.setItem("products", JSON.stringify(filtered));
        setToggle(!toggle);
        getSum()

    }

    const select = category => products.filter(i => i.category.name.includes(category));

    const send = async () => {

        setModal(true);

        let email = localStorage.getItem("email");
        if (!email) {
            alert("Zəhmət olmasa login olun!");
            setModal(false);
            return;
        }

        let meals = getLocalStronge();
        let copyMeals = meals.map(m => `Məhsul: ${m.name} sayı: ${m.count}`);

        let location;
        try {
            location = await getLocationAsync();
        } catch (err) {
            setModal(false);
            alert("Geolokasiya alınmadı: " + err);
            return;
        }

        let details = {
            meals: copyMeals.toString(),
            prince: sum.toFixed(2),
            lat: location.lat,
            lng: location.lon,
        };


        fetch(`${url}/orders/${email}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        }).then((r) => {
            if (r.ok) {
                localStorage.removeItem("products");
                localStorage.setItem("clickedButtons", JSON.stringify({}));
                setModal(false);
                Swal.fire(
                    "Təşəkkürlər!",
                    "Sifarişiniz qəbul olundu 🚀",
                    "success"
                );
            } else if (r.status === 403) {
                setModal(false);
                alert("Zəhmət olmasa emaili təsdiq edin!");
            } else if (r.status === 401) {
                setModal(false);
                Swal.fire(
                    "Xəta!",
                    "Sifarişiniz qəbul olunmadı",
                    "warning"
                );
            }
        }).catch(e => { })
    };




    return (
        <ProductsContext value={{
            categorys, select, category,
            setCategory, addProductToLocalStronge,
            getLocalStronge, countPlus, toggle, countMinus,
            sum, getSum, send, removeProductIsLocal, modal
        }}>
            {children}
        </ProductsContext>
    )

}

export default ProductsProvider;

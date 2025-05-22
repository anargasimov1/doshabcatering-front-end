import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const url = process.env.REACT_APP_URL

    const [categorys, setCategorys] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("suplar");
    const [toggle, setToggle] = useState(false);
    const [sum, setSum] = useState(0);

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

    const countPlus = id => {
        getSum()
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

    const select = category => products.filter(i => i.category.name.includes(category));

    const send = () => {

        let details = {
            meals: getLocalStronge(),
            sum: sum,
            location: "49.25, 49.44"

        }

        console.log(details)

    }

    return (
        <ProductsContext value={{ categorys, select, category, setCategory, addProductToLocalStronge, getLocalStronge, countPlus, toggle, countMinus, sum, getSum, send }}>
            {children}
        </ProductsContext>
    )
}

export default ProductsProvider;
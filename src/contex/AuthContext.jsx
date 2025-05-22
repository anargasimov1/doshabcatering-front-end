import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthPrivader = ({ children }) => {

    const url = process.env.REACT_APP_URL;

    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState();
    const [phone_number, setPhone_number] = useState("");
    const [password, setPassword] = useState("");

    const [loginForm, SetLoginForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone_number: ""
    });



    const handleChangeLogin = e => {
        const { name, value } = e.target;
        SetLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleRegistSubmit = e => {
        e.preventDefault();
        let formdata;
        if (name !== "" && surname !== "" & email !== "" & password !== "") {
            formdata = { name, surname, email, password, phone_number }

            fetch(`${url}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            }).then(r => {
                if (r.ok) {
                    alert("uğurlu qeydiyyat!")
                    setTimeout(() => {
                        window.location.href = "/login"
                    }, 1000)
                }
                else {
                    r.json().then(r => {
                        setError(prevState => ({
                            ...prevState,
                            name: r.name,
                            surname: r.surname,
                            email: r.email,
                            password: r.password,
                            phone_number: r.phone_number
                        }));
                    })
                }

            })
        }
        else {
            alert("Zəhmət olmasa bütün xanaları doldurun")
        }

        setToggle(false)
    };

    const handleLoginSubmit = e => {
        e.preventDefault();

        let loginform;

        if (email !== "" & password !== "") {

            setToggle(true)
            loginform = { email, password }

            fetch(`${url}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginform)
            }).then(r => {

                if (r.ok) {
                    // localStorage.setItem("135678", true)
                    window.location.href = "/"

                    setToggle(false)
                    r.json().then(r => console.log(r.userInfo))

                }
                else if (r.status === 400) {
                    r.json().then(r => {
                        setError(prevState => ({
                            ...prevState,
                            email: r.email,
                            password: r.password,

                        }));
                        if (!r.email) {
                            alert(r.errorMessage)
                        }

                    })
                    setToggle(false)
                }
            })

        }
        else {
            alert("Zəhmət olmasa xanaları doldurun!")
        }

    }

    return (
        <AuthContext.Provider value={{ setName, error, setSurname, setPassword, setEmail, setPhone_number, handleRegistSubmit, handleLoginSubmit, handleChangeLogin, toggle }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthPrivader; 
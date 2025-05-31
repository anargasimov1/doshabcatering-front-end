import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthPrivader = ({ children }) => {

    const url = process.env.REACT_APP_URL;

    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState("");
    const [password, setPassword] = useState("");
    const [conformPassword, setConformPassword] = useState('')
    const [otp, setOtp] = useState('')

    const [error, setError] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone_number: ""
    });


    const handleRegistSubmit = e => {
        e.preventDefault();

        if (name !== "" && surname !== "" & email !== "" & password !== "") {
            let formdata = { name, surname, email, password, phone_number }
            setToggle(true)
            fetch(`${url}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            }).then(r => {
                if (r.ok) {
                    alert("uğurlu qeydiyyat!")
                    setToggle(false)
                    window.location.href = "/login"

                }
                if (r.status === 409) {
                    alert("Bu email ilə artiq qeydiyyat olunub!");
                    setToggle(false)
                }
                else {
                    r.json().then(r => {
                        setToggle(false)
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
            }).catch(e)
        }
        else {
            alert("Zəhmət olmasa bütün xanaları doldurun")
        }

    };

    const handleLoginSubmit = e => {
        e.preventDefault();

        if (email !== "" & password !== "") {

            setToggle(true)
            let loginform = { email, password }

            fetch(`${url}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginform)
            }).then(r => {

                if (r.ok) {
                    window.location.href = "/profile"
                    setToggle(false)
                    localStorage.setItem("time", new Date().getTime() + (4 * 60 * 60 * 1000))
                    r.json().then(r => {
                        localStorage.setItem("logged", true)
                        localStorage.setItem('email', r.email)
                    })

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
            }).catch(e => { })

        }
        else {
            alert("Zəhmət olmasa xanaları doldurun!")
        }

    }


    const sendotpForUpdatePassword = () => {
        setToggle(true)
        if (email === "") {
            alert("Zəhmət olmasa email xanasını doldurun!");
            setToggle(false)
            return;
        }

        fetch(`${url}/auth/send-otp/${email}`).then(r => {
            if (r.ok) {
                window.location.href = "/updatepassword";
                setToggle(false)
            } else {
                setToggle(false);
                alert("Xəta baş verdi biraz sonra yenidən cəhd edin")
            }
        }).catch(e => { });


    }


    const updatepassword = () => {

        if (otp === "" || password === "" || conformPassword == "") {
            alert("Zəhmət olmasa xanaları doldurun!");
            return;
        }
        if (password != conformPassword) {
            alert("Parollar uyğun gəlmir");
        }

        let updatePasswordForm = { otp, password }

        fetch(`${url}/auth/update-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatePasswordForm)
        }).then(r => {
            if (r.ok) {
                alert("ugurlu")
                window.location.href = "/login"
            }
            else {
                r.json().then(r => {
                    setError(prevState => ({
                        ...prevState,
                        otp: r.otp,
                        password: r.password,
                    }));
                })
            }
        }).catch(e => { })
    }

   


    return (
        <AuthContext.Provider value={{
            setName, error, setSurname, setPassword, setEmail, setPhone_number,
            handleRegistSubmit, handleLoginSubmit, toggle,
            sendotpForUpdatePassword, setOtp, updatepassword, setConformPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthPrivader; 
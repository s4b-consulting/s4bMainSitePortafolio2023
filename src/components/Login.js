import './Login.css';
import { variables } from '../utils/Variables';
import { Fragment, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//importing components here ---------------------------------------------

//imports for Design-----------------------------------------------------
import Alert from 'react-bootstrap/Alert'


export default function Login() {

    

    const navigate = useNavigate();

    const loginForm = useRef(null);
    const [notification, setNotification] = useState(null);
    const [user, setUser] = useState(null);



    const logginIn = (e) => {

        e.preventDefault();
        const dataForm = new FormData(loginForm.current)
        const formToObject = Object.fromEntries(dataForm.entries());
        console.log("formdata...", formToObject)

        console.log("path for axios...", variables.API_URL + 'auth/login')

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const data = {
            email: formToObject.email,
            password: formToObject.password
        };

        //axios.post(variables.API_URL + 'auth/login', {
        axios.post('http://localhost:5000/auth/login', data, config)

            .then(function (response) {
                setNotification("Welcome back " + response.data[0].name);
                setUser(response.data[0]);
                //window.location.href = "https://mini-erp.s4b-consulting.de";
                navigate("/main", { userInfo: { user } });

            })
            .catch(function (error) {
                setNotification(error.response.data.error);
                setTimeout(() => {
                    setNotification(null);
                }, 6000);
            })
            .then(function () {
                console.log("process completed all steps")
            })

    }

    return (
        <Fragment>

            {notification && 
            <Alert variant='danger'>
            <h2>{notification}</h2>
            </Alert>
            }

                <main className="form-signin">
                    <form ref={loginForm} onSubmit={logginIn}>



                        <div className="img-logo2"></div>



                        <h3 className="h3 mb-3 text-center " style={{ color: "#212529", fontWeight:"900", margin:"auto" }}>Members Area</h3>

                        <div className="form-floating">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            //onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            //onChange={(e) => setPass(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label  style={{ color: "#ffffff"}}>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit"
                        //onClick={logginIn}
                        >
                            Sign in
                        </button>
                    </form>
                </main>

        </Fragment>
    )
}
import axios from 'axios';
import { useNavigate, Routes, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";




const Main = ()=>{

    const navigate = useNavigate();

    const logoutHandler = () => {
        axios
          .get("http://localhost:5000/auth/logout", { withCredentials: true })
          .then((res) => {
            navigate("/", { userInfo: {} });
          });
      };

    return(
        <>
        <h1>DashBoard here...</h1>
        <Button variant="contained" onClick={logoutHandler}>
              Logout
            </Button>
        </>
    )
}

export default Main;
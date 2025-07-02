import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/login.css'
const Login = () => {
  return (
    <div  >

        <div className="login"> 
            <h3><Link className="coaa" to="/Beranda">Back to Home</Link> </h3>
      <h2 className="h23">LOGIN</h2>
      <form>
        <input className="input1" type="text" placeholder="Username" /> <br /><br />
        <input className="input1" type="password" placeholder="Password" /> <br /><br />
        <button className="button1" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;

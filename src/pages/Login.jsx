import React from "react";
 
import '../assets/css/login.css'
const Login = () => {
  return (
    <div  >

        <div className="login"> 
            <h3><a className="coaa" href="/Beranda">Back to Home</a> </h3>
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

import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import "./index.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useNavigate();

  const userFunction = (event) => {
    setUsername(event.target.value);
  };

  const passwordFunction = (event) => {
    setPassword(event.target.value);
  };

  const submitFunction = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      const { jwtToken } = response.data;
      Cookies.set("jwtToken", jwtToken, { expires: 1 });
      localStorage.setItem("userdetails",username)
      history("/home");
      console.log(jwtToken)
    } catch (error) {
      setError(true);
      
    }
  };

  return (
    <div>
      <div className="main">
        <form onSubmit={submitFunction}>
          <div className="design">  
          <BiUser className="icon"/></div>
          <h1 className="head">Welcome!</h1>
          <h1></h1>
          <p>Let's connect to your workspace. <br/>
          please enter your email to continue.</p>
         
          <br />
          <input id="username" placeholder="Email Address" onChange={userFunction} value={username} />
          <br />
         
          <br />
          <input id="password" placeholder="Password" onChange={passwordFunction} value={password} />
          <br />
          <Link>
          <p className="para"> 
          Forgot Password?
          </p>
          </Link>
          <button type="submit">Sign In</button>
          {error ? <p>username and password incorrect</p> : null}
        </form>
        </div>
      </div>
    
  );
};

export default LoginPage;

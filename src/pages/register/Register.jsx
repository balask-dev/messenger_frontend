import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Route } from "react-router-dom";
 
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:4000/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc">
          <img src="https://www.kindpng.com/picc/m/226-2262868_messenger-icon-with-text-salesforce-appexchange-logo-hd.png"></img>
           </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Enter your Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Enter your Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Enter your Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirm Your Password  "
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
              <button className="loginRegisterButton">Log into Account</button>
             
          </form>
        </div>
      </div>
    </div>
  );
}

import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
           <img src="https://www.kindpng.com/picc/m/226-2262868_messenger-icon-with-text-salesforce-appexchange-logo-hd.png"></img>
         </div>
        <div  style={{height:"200px",marginTop:"250px"}} className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Enter Your Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
            style={{marginTop:"12px"}}
              placeholder="Enter Your Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button style={{marginTop:"12px"}} className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span style={{marginTop:"12px"}} className="loginForgot">Forgot Password?</span>
            <button style={{marginTop:"12px"}} className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

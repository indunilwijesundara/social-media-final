import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/register");
  };

  console.log(user);
  return (
    <div className="login">
      <div
        className="loginWrapper"
        style={{
          backgroundImage: `url(${PF + "background2.jpg"})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="loginLeft">
          <form className="loginBox" onSubmit={handleClick}>
            <span className="SignInName">Sign In Now.</span>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />

            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                "Sign In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <div className="loginRegister">
              <span className="notamem">Not a member?</span>
              <Link to={"/register"}>
                <button className="loginRegisterButton" onClick={routeChange}>
                  {/* {isFetching ? (
                  <CircularProgress color="secondary" size="20px" />
                ) : (
                  "Create a New Account"
                )} */}
                  Create a New Account
                </button>
              </Link>
            </div>
            <div className="Logodiv">
              <img src={PF + "/logo.png"} alt="" className="LogoImg" />
              <div className="LogoName">
                <span className="loginLogo">SL GUIDER</span>
                <span className="details">
                  Share Your Taveling Idea With Friends
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="loginRight">
          {/* <h3 className="loginLogo">SL GUIDER</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span> */}
        </div>
      </div>
    </div>
  );
}

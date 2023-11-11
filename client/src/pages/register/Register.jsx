import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Link } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const routeChange = () => {
    navigate("/login");
  };
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
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <span className="SignInName">Sign Up Now.</span>
            <span className="details">Enter your details below.</span>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
            />

            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="secondary" size="20px" />
              ) : (
                "Sign Up"
              )}
            </button>
            <div className="loginRegister">
              <span className="notamem">Not a member?</span>
              <Link to="/login">
                <button className="loginRegisterButton" onClick={routeChange}>
                  Log into Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

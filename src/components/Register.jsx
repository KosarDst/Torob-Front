import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { signup } from "../features/userSlice";
import { signin } from "../features/userSlice";
import "../assets/css/Register.css";

const Register = () => {
  const dispatch = useDispatch();

  /*  */
  const [registerSwitch, setRegisterSwitch] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  /* error */
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [loginEmailErr, setLoginEmailErr] = useState("");

  /* user info */
  const [singup, setSignup] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  /* handle onChange user info */
  const handleOnChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignup((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleOnChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  /* handle signup and login */
  const handleSignup = (e) => {
    e.preventDefault();
    const user = {
      email: singup.email,
      password: singup.password,
      profile: {
        username: singup.username,
      },
    };
    /*  */
    dispatch(
      signup({
        username: singup.username,
        email: singup.email,
        password: singup.password,
        isLogged: true,
      })
    );
    const success = true;
    const data = {
      email: "hosein@gmail.com",
    };

    // axios
    //   .post("http://localhost:8000/api/vO/auth/signup", user)
    //   .then((info) => {
    //     const { success, status_code, message, data } = info;
    //     if (success) {
    //       adjustCurrentUser(data.email);
    //     }
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: login.email,
      password: login.password,
    };
    const success = true;
    const data = {
      email: "hosein@gmail.com",
    };
    dispatch(
      signin({
        email: login.email,
        password: login.password,
        isLogged: true,
      })
    );
    // axios
    //   .post("http://localhost:8000/api/vO/auth/signin", user)
    //   .then((info) => {
    //     //const { success, status_code, message, data } = info;
    //     const success = true;
    //     const data = {
    //       email: "hosein@gmail.com",
    //     };
    //     if (success) {
    //       adjustCurrentUser(data.email);
    //     }
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
  };
  return (
    <div className="register">
      <div className="register-header">
        <h3>{registerSwitch ? "ثبت نام" : "ورود"}</h3>
        <div className="header-line"></div>
      </div>
      <div className="forms-container">
        {registerSwitch ? (
          <form className="signup">
            <div className="signup-inputs">
              <div className="username">
                <label htmlFor="username">نام کاربری</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleOnChangeSignup}
                  value={singup.username}
                />
                <p>{usernameErr}</p>
              </div>
              <div className="password">
                <label htmlFor="password">رمز عبور</label>
                <div className="pass-input">
                  <input
                    type={`${isVisible ? "text" : "password"}`}
                    name="password"
                    id="password"
                    autoComplete="off"
                    spellCheck="false"
                    onChange={handleOnChangeSignup}
                    value={singup.password}
                  />
                  <i
                    className={`fa-solid fa-eye ${
                      isVisible ? "visible-eye" : null
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  ></i>
                </div>
                <p>{passwordErr}</p>
              </div>
              <div className="email">
                <label htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleOnChangeSignup}
                  value={singup.email}
                />
                <p>{emailErr}</p>
              </div>
            </div>
            <div className="signup-cta">
              <button className="cta-sned" onClick={(e) => handleSignup(e)}>
                ارسال
              </button>
              <p>ثبت نام در ترب به معنی موافقت با شرایط استفاده از ترب است.</p>
              <button
                className="cta-switch"
                onClick={(e) => {
                  e.preventDefault();
                  setRegisterSwitch(false);
                }}
              >
                قبلا در ترب حساب کاربری داشتم.
              </button>
            </div>
          </form>
        ) : null}

        {registerSwitch ? null : (
          <form className="login">
            <div className="signup-inputs">
              <div className="email">
                <label htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleOnChangeLogin}
                  value={login.email}
                />
                <p>{loginEmailErr}</p>
              </div>
              <div className="password">
                <label htmlFor="password">رمز عبور</label>
                <div className="pass-input">
                  <input
                    type={`${isVisible ? "text" : "password"}`}
                    name="password"
                    id="password"
                    autoComplete="off"
                    spellCheck="false"
                    onChange={handleOnChangeLogin}
                    value={login.password}
                  />
                  <i
                    className={`fa-solid fa-eye ${
                      isVisible ? "visible-eye" : null
                    }`}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  ></i>
                </div>
                <p>{passwordErr}</p>
              </div>
            </div>
            <div className="signup-cta">
              <button className="cta-sned" onClick={(e) => handleLogin(e)}>
                ارسال
              </button>
              <button
                className="cta-switch"
                onClick={(e) => {
                  e.preventDefault();
                  setRegisterSwitch(true);
                }}
              >
                حساب کاربری جدید میسازم
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Register;

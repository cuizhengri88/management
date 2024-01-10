import React from 'react'
import styles from "../assets/css/Login.css";
import { Link,BrowserRouter as Router, Routes, Route , useNavigate, Navigate ,useLocation} from 'react-router-dom';
import Session from 'react-session-api';
const Login = () => {

  const navigate = useNavigate();
  const { state } = useLocation();


  const handleLogin = () => {
    window.sessionStorage.setItem('userkey', "cuizhengri");
    console.log("로그인상태");
    console.log(state);

    if(window.sessionStorage.getItem("userkey")){
        if (state) {
            console.log("기존에 진입할려는 url");
            navigate(state);
        } else {
            console.log("기존에 진입할려는 url 없으면 메인페이지로");
            navigate("/");
        }
    }else{
        navigate("/login");
    }

  };

  return (
    <div className="login-box">
    <h2>Aspn</h2>
    <form>
        <div className="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
        </div>
        <div className="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
        </div>
        <a  onClick={() => handleLogin()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
         Submit
        </a>
    </form>
    </div>
  )
}

export default Login
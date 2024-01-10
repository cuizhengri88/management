import React, { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Session from 'react-session-api';


const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(window.sessionStorage.getItem('userkey'));

    console.log(pathname);

    if (window.sessionStorage.getItem('userkey') != undefined) {

      if(pathname != undefined){
        navigate(pathname);
      }else{
        navigate("/", { state: false });
      }
      
    }else {
        navigate("/Login");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
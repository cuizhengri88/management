import './App.css';
import { render } from '@testing-library/react';
import Customer from './components/Customer';
import Loading from './components/Loading';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarElements from './components/NavBarElements';
import { Link,BrowserRouter as Router, Routes, Route , Navigate ,useNavigate } from 'react-router-dom';
import Session from 'react-session-api';

import Home from './Pages/Home';
import Wwreport from './Pages/Wwreport';
import Wmreport from './Pages/Wmreport';
import Rmp from './Pages/Rmp';
import Rokr from './Pages/Rokr';
import Login from './Pages/Login';
import AuthLayout from './Pages/AuthLayout'


function App(){
  const [loginflag, setLoginflag] = useState(false);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true); 
	// 	const fetchData = async() => {
  //         const res = await axios.get('/api/customers');
  //         setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
  //         return res.data;
  //       }	
        
  //       fetchData().then(res => setData(res));
  //   }, []);



  
  return (
    <Router  >
      <NavBarElements />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/' element = {<Home/>} />
          <Route path='/Wwreport' element = {<Wwreport/>} />
          <Route path='/Wmreport' element = {<Wmreport/>} />
          <Route path='/Rokr' element = {<Rokr/>} />
          <Route path='/Rmp' element = {<Rmp/>} />
        </Route>
        <Route path='/Login' element = {<Login/>} />
      </Routes>
    </Router>
    // <div className={styles.main_div}>
    //   <NavBarElements/>
    //    {loading ? <Loading /> : null}
    //   {
    //     data.map(c => {
    //       return(
            
    //         <Customer key={c.ID} name={c.NAME} position = {c.POSITION}   id = {c.ID}/>

    //       )
    //     })
    //   }

    // </div>
  )

}

export default App;

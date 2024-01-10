import React , { useState, useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Session from 'react-session-api';
import { Link,BrowserRouter as Router, Routes, Route , useNavigate, Navigate ,useLocation} from 'react-router-dom';

const NavBarElements = () => {
    const [loginflag, setLoginflag] = useState(true);
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState();
    let button ;

    useEffect(() => {

        if (window.sessionStorage.getItem('userkey') == null) {
            console.log("로그인 아님");
            setLoginflag(false);

        }else{
            console.log("로그인 완료");
            setLoginId(window.sessionStorage.getItem('userkey'));
            setLoginflag(true);

        }

    });

    const logOut = () => {
        setLoginflag(false);
        window.sessionStorage.clear();
        navigate("/Login");

    };

    const logIn = () => {
        navigate("/Login");
    };

    if (!loginflag) {

        button = <Navbar.Text><a href="#logout" onClick={() => logIn()} >로그인</a></Navbar.Text>;
    }else{
        //Signed in as: <a href="#login"> {loginId} </a>
        button = <Navbar.Text>Signed in as: <a href="#login"> {loginId} </a>&nbsp;&nbsp;&nbsp;<a href="#logout" onClick={() => logOut()} >로그아웃</a></Navbar.Text>;
    }
    
  if(!loginflag){
    return null;
  }else{
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Aspn</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
    
                    <NavDropdown title="보고서 작성" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/Wwreport">주간 보고서</NavDropdown.Item>
                    <NavDropdown.Item href="/Wmreport">
                    투입 내역서
                    </NavDropdown.Item>
                    </NavDropdown>
    
                    <NavDropdown title="레포트" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="/Rokr">OKR 조회</NavDropdown.Item>
                    <NavDropdown.Item href="/Rmp">
                        핵심지표 조회
                    </NavDropdown.Item>
                    </NavDropdown>
    
                    <NavDropdown title="기타" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                 
                    {button}
         
                </Navbar.Collapse>
             
                </Navbar.Collapse>
            </Container>
        </Navbar>
      )
    }
  }
  

export default NavBarElements
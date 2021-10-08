import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
    BrowserRouter,
    Link,
    Route,
    Switch,
    useHistory,
  } from "react-router-dom";
  
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {

    return (
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">클린한끼</Navbar.Brand>
            <Nav className="me-auto">
              {/* 
                  Nav.Link에서는 a 태그를 포함하기 때문에 새로고침을 막기 위해 react-router-dom에서 Link 사용
                  react-router-dom에서 Link를 가져와 링크를 변경하면 SPA 특성 유지하면서 새로고침은 안하게 함.
              */}
              <Link to="/CleanStore" className="nav-link">
                빅데이터
              </Link>
              <Link to="/menuHunt" className="nav-link">
                메뉴추천
              </Link>
              <Link to="/StoreDetail" className="nav-link">
                가게추천
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

export default Header;
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import menu from '../images/menu11.jpg';

// 이미지 올리기
const Menu = () => {
  return (
    <div role="main">
      <WrapOfMainWrap>
        <MainWrap>
          <MenuImage alt="메뉴 이미지" src={menu} />
          <br/>
          <Wrap>
            <div className="menu-title">위생등급 우수식당 보러가기
              <hr className="hr"/>
              <div className="menu-list">
                <Link to="/issue" >위생 이슈</Link>
                <br/> 
                <br/>
                <Link to="/cleanStore" >위생 가게 현황</Link>
              </div>
            </div>
            
            <div className="menu-title">먹고싶은 메뉴 고르러가기
              <hr className="hr"/>
              <div className="menu-list">
                <Link to="/menuHunt" >메뉴 지뢰 찾기</Link>
                <br/>
                <br/>
                <Link to="/menuCup" >메뉴 월드컵 16강</Link>
              </div>
            </div>
          </Wrap>
        </MainWrap>
      </WrapOfMainWrap>
    </div>
  )
}

const WrapOfMainWrap = styled.div`
  border: 2px solid #8B4513;
  margin: 2% 2%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-53%, -50%);
`

const MainWrap = styled.div`
  border: 5px solid #8B4513;
  margin: 0.5% 0.5%;
  padding: 40px;
`

const MenuImage = styled.img`
  display: block;
  margin: 1% auto 2% auto;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  .menu-title {
    width: 500px;
    font-size: 37px;
    font-weight: bold;
    margin: 20px 20px;
  }
  .hr {
    border: solid 1px #000000;
    color: #000000;    
    border-color: #000000;  
    background-color: #000000;  
  }
  .menu-list {
    font-size: 30px;
    font-weight: normal;
    margin-left: 4.3%;
  }
`;

export default Menu;
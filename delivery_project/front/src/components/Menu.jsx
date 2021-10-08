import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
        <p >

        <StyleBox>

        Q1. 코로나로 인해 온라인으로 음식 주문하는 늘어나고 있는데, 위생가게에 대해 관심 있으세요?
        </StyleBox>
         <br/>
      <StyleBox2>

        <Link to="/issue" > 이슈확인하기

        </Link>      
          <br/>
          <br/>
        <Link to="/cleanStore" > 대시보드
        </Link>
        </StyleBox2>

      </p>
      
      <p><br/><br/><br/>
      <StyleBox>
  
      Q2. 평소 우리동네에서 어떤 메뉴를 드실 지 고민이 많으신가요?
      </StyleBox>

      <StyleBox2>

      <Link to="/menuHunt" >메뉴 지뢰찾기</Link> <br/><br/>
      <Link to="/menuCup" >메뉴 월드컵</Link>
      </StyleBox2>

        
      </p>

      </div>
    )
}

const StyleBox = styled.div`
  font-size: 40px;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(119, 58, 58, 0.3);
  padding: 30px;

  color:grey;
`;

const StyleBox2 = styled.div`
  font-size: 30px;
  padding: 30px;
  margin-left: 4.3%;
  color:black;
`;

export default Menu;
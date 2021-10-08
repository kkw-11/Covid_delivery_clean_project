import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
        <p>
  
        <Link to="/issue"> Q1 . 코로나로 인해 온라인으로 음식 주문하는 늘어나고 있는데, 위생가게에 대해 관심 있으세요? </Link>
      </p>
      <p>
  
      Q2  평소 우리동네에서 어떤 메뉴를 드실 지 고민이 많으신가요?
      <p><Link to="/menuHunt">16강</Link></p> <br/>
      <Link to="/menuCup">지뢰찾기</Link>
        
      </p>
      </div>
    )
}

export default Menu;
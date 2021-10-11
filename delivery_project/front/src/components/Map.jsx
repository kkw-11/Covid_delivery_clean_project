import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import loading from '../images/67225-delivery-food-interaction.gif';
import SeoulExpansion from "./MapData/seoul/SeoulExpansion"
import MapView from "./MapData/MapView"
import "./MapData/area/area.css";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

import {BACKEND_URL} from "../env";


const Map = ({ setArea }) => {

  const [isSeoul, setIsSeoul] = useState(false) 
  // 서울시 클릭했을 때 서울시 지도 나타내기
  
  const [franchise, setFranchise] = useState(null);
  const [allstore, setAllstore] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await axios.post(`${BACKEND_URL}/regioncount`);
          setFranchise(response.data);
          const response2 = await axios.post(`${BACKEND_URL}/allstorecount`);
          setAllstore(response2.data);
      };
      fetchData()
  }, []);

  const handlerAreaSelect = (region) => {
    
    if (region == "서울특별시") {setIsSeoul(true)} // 서울 지도 확대해서 보여주기

    window.scrollTo(0,50)

    // setSelectArea({
    //   area: region,
    //   num: franchise.data['all'][region],
    // });

    setArea(region)
  };

  //////////////////////////////////////////////
  //모달 창 외부영역 클릭했을 때 돌아가는 기능 //
  ////////////////////////////////////////////
  
  // const outsideRef = useRef(null); // useRef를 사용하여 ref를 생성합니다.
  // useOutsideClick(outsideRef);

  // function useOutsideClick(ref) {
  //   useEffect(() => {
  
  //     function handleClickOutside(event) {
  //       console.log(ref);
  
  //       // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setIsSeoul(false)
  //       }
  //     }
  
  //     // 현재 document에 이벤트리스너를 추가합니다.
  //     document.addEventListener("mousedown", handleClickOutside);
  
  //     // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
  //     // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
  //     // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]); // ref가 변경되면 useEffect를 다시 생성합니다.
  // }

  return (
    <>
        {franchise === null || allstore === null ? (
          <img src={loading} style= {{display: "block", margin: "5% auto"}} width={500} height={500}></img>
      ) : (
        <StyleMap>
          {isSeoul ? (
            <SeoulMap visible={isSeoul}>
              <SeoulExpansion 
                franchise={franchise.data}
                allstore={allstore.data}
                onAreaClick={handlerAreaSelect}
              />
              <Button 
                style={{ margin:"1%" }} 
                floated="right"
                onClick={() => {setIsSeoul(false)}} 
              >전국</Button>
            </SeoulMap>
          ) : (
            <>
              <Button 
                style={{ margin:"2%" }} 
                floated="right"
                onClick={() => {setIsSeoul(true)}} 
              >서울</Button>
              <MapView
                franchise={franchise.data}
                allstore={allstore.data}
                onAreaClick={handlerAreaSelect}
              />
            </>
          )}
        </StyleMap>
      )}
    </>
  );
}


export default Map;


const StyleMap = styled.div`
  border: 5px solid blue;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

`;

const SeoulMap = styled.div`
    border: 5px solid orange;
    height: 700px;
    display: ${props => (props.visible ? "block" : "none")};
`;




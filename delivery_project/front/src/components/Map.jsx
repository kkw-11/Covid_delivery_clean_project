import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SeoulExpansion from "./MapData/seoul/SeoulExpansion"
import MapView from "./MapData/MapView"
import MapInfo from "./MapData/MapInfo"
import "./MapData/area/area.css";

import {BACKEND_URL} from "../env";


const Map = () => {

  const [isClicked, setIsClicked] = useState(false) // 서울시 클릭했을 때 서울시 지도 나타내기
  const [mapData, setMapData] = useState(null);
  const [selectArea, setSelectArea] = useState({
    area: "",
  });
  
  
  useEffect(() => {
    let isComponentMounted = true // 무한 재렌더링 방지용
    
    const fetchData = async () => {
        const response = await axios.post(`${BACKEND_URL}/gradecount`);
        console.log(response.data)
        if (isComponentMounted) {
            setMapData(response.data);
        }
      };
    fetchData()

    return () => {
        isComponentMounted = false
      }
  }, []);

  const handlerAreaSelect = (area) => {
    
    if (area == "서울특별시") {setIsClicked(true)} // 서울 지도 확대해서 보여주기

    window.scrollTo(0,150) // 클릭시 최상단으로 이동

    setSelectArea({
      area: area,
      num: mapData.data[area],
    });
    
  };

  //////////////////////////////////////////////
  //모달 창 외부영역 클릭했을 때 돌아가는 기능 //
  ////////////////////////////////////////////
  
  const outsideRef = useRef(null); // useRef를 사용하여 ref를 생성합니다.
  useOutsideClick(outsideRef);

  function useOutsideClick(ref) {
    useEffect(() => {
  
      function handleClickOutside(event) {
        console.log(ref);
  
        // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(false)
        }
      }
  
      // 현재 document에 이벤트리스너를 추가합니다.
      document.addEventListener("mousedown", handleClickOutside);
  
      // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
      // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
      // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]); // ref가 변경되면 useEffect를 다시 생성합니다.
  }

  return (
    <StyleMap>
        <h4>지역별 위생가게수 현황</h4> <br />
      {mapData === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <MapInfo
            area={selectArea.area}
            num={selectArea.num}
          />
          {isClicked ? (
            <SeoulMap visible={isClicked} ref={outsideRef}>
              <SeoulExpansion 
                color={mapData.data}
                onAreaClick={handlerAreaSelect}
              />
            </SeoulMap>
          ) : (
            <MapView
              color={mapData.data}
              onAreaClick={handlerAreaSelect}
          />
          )}
        </>
      )}
    </StyleMap>
  );
}


export default Map;


const StyleMap = styled.div`
  border: 5px solid blue;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

`;

const SeoulMap = styled.div`
    display: ${props => (props.visible ? "block" : "none")};
    z-index: 100;
`;




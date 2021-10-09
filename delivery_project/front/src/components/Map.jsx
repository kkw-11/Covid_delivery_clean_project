import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SeoulExpansion from "./MapData/seoul/SeoulExpansion"
import MapView from "./MapData/MapView"
import MapInfo from "./MapData/MapInfo"
import "./MapData/area/area.css";

import {BACKEND_URL} from "../env";


const Map = ({ setArea }) => {

  const [isSeoul, setIsSeoul] = useState(false) 
  // 서울시 클릭했을 때 서울시 지도 나타내기

  const [selectArea, setSelectArea] = useState({
    area: "",
  });
  
  const [franchise, setFranchise] = useState(null);
  const [allstore, setAllstore] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await axios.post(`${BACKEND_URL}/gradecount`);
          setFranchise(response.data);
          const response2 = await axios.post(`${BACKEND_URL}/allstorecount`);
          setAllstore(response2.data);
      };
      fetchData()
  }, []);

  const handlerAreaSelect = (area) => {
    
    if (area == "서울특별시") {setIsSeoul(true)} // 서울 지도 확대해서 보여주기

    window.scrollTo(0,150) // 클릭시 최상단으로 이동

    setSelectArea({
      area: area,
      num: franchise.data['all'][area],
    });

    setArea(area)
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
          setIsSeoul(false)
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
      {franchise === null || allstore === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <MapInfo
            className="text-box"
            area={selectArea.area}
            num={selectArea.num}
          />
          {isSeoul ? (
            <SeoulMap visible={isSeoul} ref={outsideRef}>
              <SeoulExpansion 
                franchise={franchise.data}
                allstore={allstore.data}
                onAreaClick={handlerAreaSelect}
              />
            </SeoulMap>
          ) : (
            <MapView
              franchise={franchise.data}
              allstore={allstore.data}
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
  /* border: 5px solid blue; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

`;

const SeoulMap = styled.div`
    display: ${props => (props.visible ? "block" : "none")};
    z-index: 100;
`;




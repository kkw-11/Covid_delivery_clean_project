import React, { useRef, useState, useEffect } from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import SeoulExpansion from "./area/Seoul/SeoulExpansion"
import axios from "axios";
import styled from "styled-components";
import "./area/area.css";

import {BACKEND_URL} from "../env";


// 코로나 단계별 색상 
const fillColor = "#cdcccc";


function CovidView({ onAreaClick }) {
  
  return (
    <svg width="800px" height="900px" viewBox="0 0 800 1200">
      <Seoul
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeonggi
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gangwon
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Incheon
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Chungnam
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Chungbuk
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Sejong
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Daejeon
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeongnam
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeongbuk
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeonbuk
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeonnam
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Ulsan
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Busan
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Daegu
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gwangju
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeju
        fill={fillColor}
        onClick={(e) => onAreaClick(e.target.id)}
      />
    </svg>
  );
}

const StyleBox = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: 800px;
  padding: 10px;
`;

function CovidInfo({ area, num }) {

  return (
    <StyleBox>
      {area !== "" && (
        <>
          <h2>
            {area} 위생가게 정보
          </h2>
          <p>위생가게 수 : {num}</p>
        </>
      )}
    </StyleBox>
  );
}

const StyleMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Map() {

  const [covidData, setCovidData] = useState(null);
  const [selectArea, setSelectArea] = useState({
    area: "",
  });

  // 서울시 클릭했을 때 서울시 지도 나타내기
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    // covidData가 업데이트 될 때마다 실행되는 함수

    if (covidData !== null) { // 처음 covidData가 null이기 때문에 if로 확인
      console.log("covidData", covidData.data); 

      const data = covidData.data;

      // Object.keys(객체) 배열로 키 값이 들어옴.
      // 해당 키 배열로 map 반복하면서 지역별 확진자 수 num만 뽑아옴
      const numArr = Object.keys(data).map((key) => {
        return data[key].num;
      });

    }
  }, [covidData]);

  

  useEffect(() => {
    let isComponentMounted = true
    
    const fetchData = async () => {
        const response = await axios.post("http://localhost:1234/gradecount");
        console.log(response.data)
        if (isComponentMounted) {
            setCovidData(response.data);
        }
      };
    fetchData()
    console.log(covidData)
    return () => {
        isComponentMounted = false
      }
  }, []);

  const handlerAreaSelect = (area) => {
    // 서울 지도 확대해서 보여주기
    if (area == "서울") {
      setIsClicked(true)
    }

    // 클릭시 최상단으로 이동
    window.scrollTo(0,0)

    setSelectArea({
      area: area,
      num: covidData.data[area],
    });
    console.log(selectArea)
  };

  // useRef를 사용하여 ref를 생성합니다.
  // null로 초기화합니다.
  const outsideRef = useRef(null);
  useOutsideClick(outsideRef);

  // 최초 실행시 null임을 확인할 수 있습니다.
  console.log(outsideRef);

  function useOutsideClick(ref) {
    useEffect(() => {
  
      function handleClickOutside(event) {
        console.log(ref);
        console.log(event.target);
  
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
      <h1>우리지역 클린한끼</h1>
      {covidData === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <CovidInfo
            area={selectArea.area}
            num={selectArea.num}
          />
          {isClicked ? (
            <LayerPopup visible={isClicked} ref={outsideRef}>
              <SeoulExpansion 
                onAreaClick={handlerAreaSelect}
              />
            </LayerPopup>
          ) : (
            <CovidView
            onAreaClick={handlerAreaSelect}
          />
          )}
        </>
      )}
    </StyleMap>
  );
}

const LayerPopup = styled.div`
    display: ${props => (props.visible ? "block" : "none")};
    z-index: 100;
`;

export default Map;

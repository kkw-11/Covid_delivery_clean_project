import React from "react";
import styled from "styled-components";
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
import "./area/area.css";



// 위생가게별 수치별 색상
const fillColor = ["#4088da"];


const MapView = ({ onAreaClick }) => {
  
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

export default MapView;
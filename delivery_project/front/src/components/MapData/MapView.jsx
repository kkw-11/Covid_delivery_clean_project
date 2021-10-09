import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { BACKEND_URL } from "../../env";
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
import MapLegend from "./MapLegend"

const fillColor = [
  "rgb(244, 249, 160)",
  "rgb(204, 241, 140)",
  "rgb(176, 233, 89)",
  "rgb(6, 208, 176)",
  "rgb(2, 207, 178)",
  "rgb(0, 209, 241)",
  "rgb(0, 169, 211)",
  "rgb(1, 108, 213)",
  "rgb(0, 81, 243)",
  "rgb(0, 79, 207)",
  "rgb(0, 24, 146)",
];

const colorSpectrum = (num) => {
  if (num < 50) return 0
  else if (num < 100) return 1
  else if (num < 150) return 2
  else if (num < 200) return 3
  else if (num < 300) return 4
  else if (num < 500) return 5
  else if (num < 800) return 6
  else if (num < 1200) return 7
  else if (num < 2000) return 8
  else if (num < 3000) return 9
  else return 10
}

const relativeColorSpectrum  = (num) => {
  if (num < 0.005) return 0
  else if (num < 0.01) return 1
  else if (num < 0.015) return 2
  else if (num < 0.02) return 3
  else if (num < 0.025) return 4
  else if (num < 0.03) return 5
  else if (num < 0.035) return 6
  else if (num < 0.04) return 7
  else if (num < 0.045) return 8
  else if (num < 0.5) return 9
  else return 10
}

const MapView = ({ franchise, allstore, onAreaClick }) => {

  const [isRelative, setIsRelative] = useState(true)
 
  return (
    <>
      <MapLegend isRelative={isRelative}/>
      <button 
          style={{position: "relative", margin:"1% 0 0 1%"}}
          onClick={() => {setIsRelative(!isRelative)}}
      >
          {isRelative ? "위생가게수치" : "위생가게비율"}
      </button>   
      
      <svg width="100%" height="1000px" viewBox="0 0 800 1900">
        <Seoul
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["서울특별시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["서울특별시"] / allstore["서울특별시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeonggi
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["경기도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["경기도"] / allstore["경기도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gangwon
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["강원도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["강원도"] / allstore["강원도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Incheon
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["인천광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["인천광역시"] / allstore["인천광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Chungnam
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["충청남도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["충청남도"] / allstore["충청남도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Chungbuk
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["충청북도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["충청북도"] / allstore["충청북도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Sejong
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["세종특별자치시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["세종특별자치시"] / allstore["세종특별자치시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Daejeon
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["대전광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["대전광역시"] / allstore["대전광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeongnam
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["경상남도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["경상남도"] / allstore["경상남도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeongbuk
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["경상북도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["경상북도"] / allstore["경상북도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeonbuk
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["전라북도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["전라북도"] / allstore["전라북도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeonnam
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["전라남도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["전라남도"] / allstore["전라남도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Ulsan
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["울산광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["울산광역시"] / allstore["울산광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Busan
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["부산광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["부산광역시"] / allstore["부산광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Daegu
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["대구광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["대구광역시"] / allstore["대구광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gwangju
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["광주광역시"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["광주광역시"] / allstore["광주광역시"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeju
          fill={
            isRelative ? 
              fillColor[colorSpectrum(franchise["all"]["제주특별자치도"])] : 
              fillColor[relativeColorSpectrum(franchise["all"]["제주특별자치도"] / allstore["제주특별자치도"])]
          }
          onClick={(e) => onAreaClick(e.target.id)}
        />
      </svg>
    </>
  ); 
}

export default MapView;

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

const MapView = ({ color, onAreaClick }) => {

  return (
    <>
      <MapLegend />
      <svg width="100%" height="1000px" viewBox="0 0 800 1200">
        <Seoul
          fill={fillColor[colorSpectrum(color['all']["서울특별시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeonggi
          fill={fillColor[colorSpectrum(color['all']["경기도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gangwon
          fill={fillColor[colorSpectrum(color['all']["강원도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Incheon
          fill={fillColor[colorSpectrum(color['all']["인천광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Chungnam
          fill={fillColor[colorSpectrum(color['all']["충청남도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Chungbuk
          fill={fillColor[colorSpectrum(color['all']["충청북도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Sejong
          fill={fillColor[colorSpectrum(color['all']["세종특별자치시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Daejeon
          fill={fillColor[colorSpectrum(color['all']["대전광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeongnam
          fill={fillColor[colorSpectrum(color['all']["경상남도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gyeongbuk
          fill={fillColor[colorSpectrum(color['all']["경상북도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeonbuk
          fill={fillColor[colorSpectrum(color['all']["전라북도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeonnam
          fill={fillColor[colorSpectrum(color['all']["전라남도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Ulsan
          fill={fillColor[colorSpectrum(color['all']["울산광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Busan
          fill={fillColor[colorSpectrum(color['all']["부산광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Daegu
          fill={fillColor[colorSpectrum(color['all']["대구광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Gwangju
          fill={fillColor[colorSpectrum(color['all']["광주광역시"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
        <Jeju
          fill={fillColor[colorSpectrum(color['all']["제주특별자치도"])]}
          onClick={(e) => onAreaClick(e.target.id)}
        />
      </svg>
    </>
  );
}

export default MapView;

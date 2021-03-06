import React, { useState } from "react";
import styled from "styled-components";
import "./SeoulExpansion.css";
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import SeoulMapLegend from "./SeoulMapLegend"

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
    "rgb(1, 43, 230)",
  ];
  
const colorSpectrum = (num) => {
    if (num < 50) return 0
    else if (num < 100) return 1
    else if (num < 150) return 2
    else if (num < 200) return 3
    else if (num < 250) return 4
    else if (num < 300) return 5
    else if (num < 350) return 6
    else if (num < 400) return 7
    else if (num < 450) return 8
    else if (num < 500) return 9
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

const SeoulExpansion = ({ setIsSeoul, franchise, allstore, onAreaClick, setArea }) => {

    const [isRelative, setIsRelative] = useState(true);

    const ButtonClick = (e) => {
        setIsSeoul(false);
        setArea(e.target.value);
    }

    return (
    <>
        <SeoulMapLegend isRelative={isRelative} />
        <Button
          inverted
          color="brown"
          size='mini'
          style={{position: "relative", margin:"1% 0 0 3%"}}
          onClick={() => {setIsRelative(!isRelative)}}
      >{isRelative ? "위생가게수치" : "위생가게비율"}</Button>  
        <Button 
            inverted
            color="brown"
            size='mini'
            value='전국'
            floated="right"
            style={{ margin:"1% 3% 0 0" }} 
            onClick={ButtonClick} 
        >전국</Button>

        <svg height= { 650 } width= { 750 } margin= { 100 } viewBox="0 0 900 700" style={{position:'absolute', display:'flex'}}>
            <defs>
                <filter id="dropshadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                    <feOffset dx="0" dy="0" result="offsetblur" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="dropshadow2">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="0" />
                    <feOffset dx="0" dy="0" result="offsetblur" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs> 

            <g filter="url(#dropshadow)">
            <path 
                id="종로구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["종로구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["종로구"] / allstore["종로구"])]
                  }
                d="M 455 297 l 4 -2 1 0 1 0 3 -1 4 5 7 3 2 6 0 8 -11 2 -11 1 -8 0 -9 1 -8 1 -9 1 -9 -2 -10 -1 -9 1 -4 3 -2 3 -6 -6 -3 -4 -5 -6 -4 -5 -2 -5 5 -3 0 -6 0 -10 0 -9 1 -9 -3 -4 -2 0 -2 0 -1 -4 0 -9 -5 -9 1 -10 -1 -11 -1 -6 2 -6 5 -2 7 -3 10 -2 2 -1 3 0 1 0 4 -2 8 -1 3 6 4 1 3 8 3 10 1 6 3 5 0 9 0 7 -1 5 -6 3 -6 4 -1 5 6 4 5 3 5 4 9 1 10 0 4 4 3 4 5 10 1 3 z ">
                    <title>
                        종로구{"\n"}위생가게수 : {franchise["all"]["종로구"]}
                    </title>
            </path>
            <path 
                id="중구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["중구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["중구"] / allstore["중구"])]
                  }
                d="M 477 316 l 0 9 5 5 -1 3 -4 5 -4 5 -5 4 -4 7 -3 4 -4 3 -4 10 -2 -1 -3 -7 -2 -5 -2 1 -1 0 -2 -1 -3 1 0 0 -3 1 -4 2 -5 -5 -6 -3 -10 -3 -4 -1 -3 -1 -2 2 -4 -1 -3 -1 -9 0 -2 2 -4 3 0 -7 1 -4 -2 -2 0 -1 6 -3 6 -4 -1 -2 -2 -5 2 -3 4 -3 9 -1 10 1 9 2 9 -1 8 -1 9 -1 8 0 11 -1 z " >
                    <title>
                        중구{"\n"}위생가게수 : {franchise["all"]["중구"]}
                    </title>
            </path>
            <path 
                id="용산구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["용산구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["용산구"] / allstore["용산구"])]
                  }
                d="M 394 349 l 3 1 4 1 2 -2 3 1 4 1 10 3 6 3 5 5 4 -2 3 -1 0 0 3 -1 2 1 1 0 2 -1 2 5 3 7 2 1 5 9 6 2 2 9 -4 5 -4 5 -5 6 -3 4 -5 4 -5 5 -5 4 -5 3 -8 8 -5 8 -7 3 -7 -1 -10 -4 -3 -1 -6 -3 -6 -5 -5 -3 -6 -3 -9 -3 1 -5 0 -10 -2 -8 -6 -11 5 -2 4 -1 5 -4 5 -6 2 -5 3 -6 6 -5 0 -3 -2 -3 4 -3 2 -2 z " >
                    <title>
                        용산구{"\n"}위생가게수 : {franchise["all"]["용산구"]}
                    </title>
            </path>
            <path 
                id="성동구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["성동구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["성동구"] / allstore["성동구"])]
                  }
                d="M 511 315 l 7 4 6 6 4 4 6 5 2 0 15 3 4 0 -5 20 -3 5 -5 12 -3 7 -10 20 -7 -4 -5 -3 -4 -4 -10 -3 -10 0 -7 0 -12 0 -8 4 -2 -9 -6 -2 -5 -9 4 -10 4 -3 3 -4 4 -7 5 -4 4 -5 4 -5 1 -3 -5 -5 0 -9 6 1 11 -1 5 -2 2 -1 6 0 z " >
                    <title>
                        성동구{"\n"}위생가게수 : {franchise["all"]["성동구"]}
                    </title>
            </path>
            <path 
                id="광진구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["광진구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["광진구"] / allstore["광진구"])]
                  }
                d="M 605 315 l 1 1 -1 4 -1 7 -2 9 3 6 4 4 3 -3 9 -1 3 3 -4 10 -2 10 -2 5 -2 4 -4 5 -5 5 -5 4 -11 12 -3 3 -3 2 -8 5 -6 3 -5 1 -5 -1 -5 -1 -6 -2 -12 -5 -7 -4 13 -27 5 -12 3 -5 5 -20 3 -8 4 -5 4 -9 7 1 11 3 9 -3 4 -3 4 -2 z " >
                    <title>
                        광진구{"\n"}위생가게수 : {franchise["all"]["광진구"]}
                    </title>
            </path>
            <path 
                id="동대문구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["동대문구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["동대문구"] / allstore["동대문구"])]
                  }
                d="M 554 245 l 2 10 -2 5 -3 6 2 9 1 6 3 9 3 6 2 3 1 11 3 5 -4 9 -4 5 -3 8 -4 0 -15 -3 -2 0 -6 -5 -4 -4 -6 -6 -7 -4 -4 -2 -6 0 -2 1 -5 2 -11 1 -6 -1 0 -8 -2 -6 6 -4 6 -5 4 -6 3 -4 4 -5 2 -3 6 -8 4 -2 8 -3 4 -5 7 -1 7 -2 4 -6 7 -2 z " >
                    <title>
                        동대문구{"\n"}위생가게수 : {franchise["all"]["동대문구"]}
                    </title>
            </path>
            <path 
                id="중랑구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["중랑구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["중랑구"] / allstore["중랑구"])]
                  }
                d="M 621 218 l 5 3 1 6 0 10 2 8 -3 8 -3 5 0 3 3 4 -1 6 -4 2 -5 9 0 5 -4 6 -4 3 -4 5 -3 10 -4 2 -4 3 -9 3 -11 -3 -7 -1 -3 -5 -1 -11 -2 -3 -3 -6 -3 -9 -1 -6 -2 -9 3 -6 2 -5 -2 -10 0 -8 2 -11 6 -3 4 -1 9 -4 9 1 10 1 6 -2 9 -1 z " >
                    <title>
                        중랑구{"\n"}위생가게수 : {franchise["all"]["중랑구"]}
                    </title>
            </path>
            <path 
                id="성북구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)}
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["성북구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["성북구"] / allstore["성북구"])]
                  }
                d="M 455 297 l -3 -2 -1 -3 -5 -10 -3 -4 -4 -4 -10 0 -9 -1 -5 -4 -5 -3 -6 -4 1 -5 6 -4 6 -3 1 -5 0 -7 0 -9 -3 -5 -1 -6 -3 -10 -3 -8 -4 -1 -3 -6 9 -5 4 -3 4 1 5 4 6 4 3 2 4 5 5 5 7 3 5 2 -1 3 0 0 0 2 1 3 5 6 9 3 4 3 5 3 8 -1 6 4 9 -4 4 -6 4 -4 4 -4 4 -6 4 -3 5 4 4 5 5 5 5 4 9 0 9 -2 -2 11 0 8 -7 1 -7 2 -4 6 -7 2 -7 1 -4 5 -8 3 -4 2 -6 8 -2 3 -4 5 -3 4 -4 6 -6 5 -6 4 -7 -3 -4 -5 -3 1 -1 0 -1 0 z " >
                    <title>
                        성북구{"\n"}위생가게수 : {franchise["all"]["성북구"]}
                    </title>
            </path>
            <path 
                id="강북구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["강북구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["강북구"] / allstore["강북구"])]
                  }
                d="M 448 87 l 2 0 1 0 0 0 4 4 3 7 4 5 4 7 3 5 1 2 -2 4 -2 6 -2 9 -2 8 -1 5 0 4 2 4 5 3 3 0 2 -1 3 2 7 5 3 3 7 6 2 6 5 4 3 7 6 6 7 6 3 6 -4 3 -4 6 -4 4 -4 4 -4 6 -9 4 -6 -4 -8 1 -5 -3 -4 -3 -9 -3 -4 -6 -2 -3 0 -2 0 0 1 -3 -5 -2 -7 -3 -5 -5 -4 -5 -3 -2 -6 -4 -5 -4 -4 -1 3 -4 0 -6 -3 -4 1 -3 2 -3 -2 -4 -3 -7 -4 -9 4 -1 7 -7 4 -8 6 -4 2 -5 0 -13 -1 -7 2 -5 6 -5 7 -2 z " >
                    <title>
                        강북구{"\n"}위생가게수 : {franchise["all"]["강북구"]}
                    </title>
            </path>
            <path 
                id="도봉구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["도봉구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["도봉구"] / allstore["도봉구"])]
                  }
                d="M 463 157 l -2 -4 0 -4 1 -5 2 -8 2 -9 2 -6 2 -4 -1 -2 -3 -5 -4 -7 -4 -5 -3 -7 -1 -9 0 -8 4 -11 8 -8 10 1 9 0 3 4 1 6 3 5 9 -1 4 -2 4 -1 4 4 5 0 5 13 0 9 -1 5 -4 12 0 8 3 9 2 9 3 10 1 9 2 7 -2 13 -3 -4 -2 -3 -2 3 -5 5 -1 6 -4 9 -1 7 -6 -6 -3 -7 -5 -4 -2 -6 -7 -6 -3 -3 -7 -5 -3 -2 -2 1 -3 0 z " >
                    <title>
                        도봉구{"\n"}위생가게수 : {franchise["all"]["도봉구"]}
                    </title>
            </path>
            <path 
                id="노원구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["노원구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["노원구"] / allstore["노원구"])]
                  }
                d="M 619 183 l 1 7 -3 7 -6 5 -3 7 1 8 -9 1 -6 2 -10 -1 -9 -1 -9 4 -4 1 -6 3 -9 2 -9 0 -5 -4 -5 -5 -4 -5 -5 -4 -3 -6 -7 -6 1 -7 4 -9 1 -6 5 -5 2 -3 2 3 3 4 2 -13 -2 -7 -1 -9 -3 -10 -2 -9 -3 -9 0 -8 4 -12 1 -5 0 -9 6 -4 5 -2 4 -4 4 -6 6 0 3 1 4 0 5 -1 4 -2 7 -1 5 8 5 5 5 0 3 -1 5 4 -3 10 -2 7 -1 2 1 3 3 7 2 8 -2 11 -2 5 -3 4 0 4 2 6 1 6 0 10 3 5 7 0 5 -2 5 0 4 4 4 3 z " >
                    <title>
                        노원구{"\n"}위생가게수 : {franchise["all"]["노원구"]}
                    </title>
            </path>
            <path 
                id="은평구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["은평구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["은평구"] / allstore["은평구"])]
                  }
                d="M 368 148 l 3 2 1 3 2 11 2 9 2 8 3 5 0 5 -3 3 -5 5 -7 3 -5 2 -2 6 1 6 1 11 -1 10 -7 6 -4 3 -4 7 0 7 -5 2 -9 4 -4 4 -3 5 -3 7 -5 4 -3 4 -8 -1 0 -3 -1 0 -3 -2 -3 2 -4 5 -4 5 -5 5 -1 5 -9 -8 -12 -9 -1 -2 -6 -6 -4 -5 6 -9 1 2 -2 5 2 5 8 0 9 -1 3 -6 1 -4 2 -5 -1 -9 2 -8 -2 -10 2 -10 4 -7 3 -4 2 -6 2 -9 -1 -10 5 -4 0 -1 -1 -5 1 -4 1 -4 0 -5 -5 -3 -5 -5 0 -1 1 1 5 3 6 4 11 -1 10 -3 3 -3 4 -2 9 -4 4 -5 3 -5 5 -2 6 -2 3 4 z " >
                    <title>
                        은평구{"\n"}위생가게수 : {franchise["all"]["은평구"]}
                    </title>
            </path>
            <path 
                id="서대문구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["서대문구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["서대문구"] / allstore["서대문구"])]
                  }
                d="M 365 255 l 1 4 2 0 2 0 3 4 -1 9 0 9 0 10 0 6 -5 3 2 5 4 5 5 6 3 4 6 6 2 5 1 2 -6 4 -6 3 -3 3 -8 0 -10 1 -11 1 -7 2 -10 -4 -7 -6 -2 -10 -6 -3 -6 -2 -4 -2 -8 -4 -5 -5 -7 -5 1 -5 5 -5 4 -5 4 -5 3 -2 3 2 1 0 0 3 8 1 3 -4 5 -4 3 -7 3 -5 4 -4 9 -4 5 -2 0 -7 4 -7 4 -3 7 -6 5 9 z " >
                    <title>
                        서대문구{"\n"}위생가게수 : {franchise["all"]["서대문구"]}
                    </title>
            </path>
            <path 
                id="마포구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["마포구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["마포구"] / allstore["마포구"])]
                  }
                d="M 263 289 l 12 9 9 8 7 5 5 5 8 4 4 2 6 2 6 3 2 10 7 6 10 4 7 -2 11 -1 10 -1 8 0 3 -3 0 1 2 2 -1 4 0 7 2 3 0 3 -6 5 -3 6 -2 5 -5 6 -5 4 -4 1 -5 2 -7 -4 -5 -4 -5 -3 -5 -2 -4 1 -4 2 -6 -4 -11 0 -12 0 -5 -2 -6 -7 -6 -6 -8 -4 -8 -4 -5 -4 -5 -3 -11 -7 -8 -5 -4 -2 -6 -4 -4 -4 -4 -3 -6 -6 -1 -3 8 -4 4 -2 4 -2 10 -2 10 -2 3 -2 0 -1 -1 -6 0 -5 4 -5 5 -4 4 5 6 6 z " >
                    <title>
                        마포구{"\n"}위생가게수 : {franchise["all"]["마포구"]}
                    </title>
            </path>
            <path 
                id="양천구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["양천구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["양천구"] / allstore["양천구"])]
                  }
                d="M 240 363 l 8 -1 5 5 2 5 4 8 4 9 -2 3 2 2 0 2 -8 3 -5 4 -3 4 -2 12 0 4 -2 7 -4 6 -1 8 -2 6 -1 -1 -4 -2 -10 -2 -6 -2 -4 -5 -8 -1 -8 2 -4 4 -7 3 -4 3 -5 1 -3 -1 -4 -5 -4 -4 -4 -2 -3 -12 2 -9 1 -7 4 -5 0 -4 -4 -4 -4 -6 -2 -11 4 -7 3 -7 5 -2 1 6 5 5 2 6 3 9 3 7 3 4 12 1 7 -2 11 -1 7 -2 1 -8 0 -7 -1 -9 0 -10 2 -8 5 2 5 4 z " >
                    <title>
                        양천구{"\n"}위생가게수 : {franchise["all"]["양천구"]}
                    </title>
            </path>
            <path 
                id="강서구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["강서구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["강서구"] / allstore["강서구"])]
                  }
                d="M 134 254 l 3 3 6 4 4 4 4 6 4 3 6 4 5 4 6 4 5 3 4 4 6 5 3 2 6 5 9 6 1 3 6 6 4 3 4 4 6 4 4 2 8 5 11 7 -4 8 3 9 -8 1 -8 -2 -5 -4 -5 -2 -2 8 0 10 1 9 0 7 -1 8 -7 2 -11 1 -7 2 -12 -1 -3 -4 -3 -7 -3 -9 -2 -6 -5 -5 -1 -6 -5 2 -3 7 -10 2 -9 -1 -7 -4 -3 -2 0 1 -9 5 -2 5 -6 2 -2 -6 -4 -5 -5 -4 -7 -2 -9 -2 -7 -4 -4 1 -1 -2 -2 -2 1 -1 -3 -2 -2 -7 8 -4 2 -5 6 -2 -1 -5 -2 -5 0 -3 2 1 0 1 5 -3 3 -3 -1 -2 2 -1 1 -5 8 -4 1 -1 1 1 2 -5 2 -6 1 3 1 2 2 -9 2 -4 2 2 1 -4 5 -5 0 -6 -3 -5 -1 -6 0 -5 3 -4 4 -6 4 2 z " >
                    <title>
                        강서구{"\n"}위생가게수 : {franchise["all"]["강서구"]}
                    </title>
            </path>
            <path 
                id="구로구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["구로구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["구로구"] / allstore["구로구"])]
                  }
                d="M 245 419 l 6 7 4 4 5 2 4 4 4 9 -1 9 2 9 1 6 1 5 3 7 5 5 4 3 -3 5 -4 5 -10 1 -7 -3 -4 -5 -5 -4 -5 -3 -2 0 -2 1 -3 -5 -4 -2 3 -2 0 -1 -3 0 -3 2 -1 -5 -2 -6 -2 1 -1 1 1 1 -4 4 -5 3 -4 5 -4 4 -6 6 -9 2 -2 4 -1 10 -6 0 -8 -1 -5 -4 -4 0 -4 2 -9 0 -5 1 -8 1 2 -4 4 -5 2 -8 2 -5 3 -4 -2 -5 -3 -1 -8 -5 -1 -7 6 -3 4 -6 2 -4 2 -6 5 -6 4 2 4 4 4 5 3 1 5 -1 4 -3 7 -3 4 -4 8 -2 8 1 4 5 6 2 10 2 4 2 1 1 2 -6 1 -8 4 -6 2 -7 z " >
                    <title>
                        구로구{"\n"}위생가게수 : {franchise["all"]["구로구"]}
                    </title>
            </path>
            <path 
                id="금천구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["금천구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["금천구"] / allstore["금천구"])]
                  }
                d="M 241 486 l 2 -1 2 0 5 3 5 4 4 5 7 3 10 -1 11 -1 6 1 3 10 -3 8 3 6 3 6 1 6 4 8 8 3 3 4 5 4 2 6 -7 7 -2 5 -3 6 -8 1 -5 4 -4 7 -9 -1 -4 -4 -3 -4 -2 -9 -3 -5 -2 -3 1 -3 -1 -3 -3 -4 -6 -3 -4 -6 -1 -9 -4 -4 -1 -4 2 -2 -2 -3 -3 -5 -4 -6 -2 -4 -4 -9 -3 -8 -1 -4 1 -2 z " >
                    <title>
                        금천구{"\n"}위생가게수 : {franchise["all"]["금천구"]}
                    </title>
            </path>
            <path 
                id="영등포구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["영등포구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["영등포구"] / allstore["영등포구"])]
                  }
                d="M 249 345 l 5 3 5 4 8 4 8 4 6 6 6 7 5 2 12 0 11 0 6 4 4 -2 4 -1 5 2 5 3 5 4 7 4 6 11 2 8 0 10 -1 5 -11 2 -8 1 -9 1 -8 2 -2 5 -3 8 -2 3 -3 10 -2 8 -9 2 -3 1 -4 7 -4 5 -3 5 -4 6 -4 -3 -5 -5 -3 -7 -1 -5 -1 -6 -2 -9 1 -9 -4 -9 -4 -4 -5 -2 -4 -4 -6 -7 2 -12 3 -4 5 -4 8 -3 0 -2 -2 -2 2 -3 -4 -9 -4 -8 -2 -5 -5 -5 -3 -9 z " >
                    <title>
                        영등포구{"\n"}위생가게수 : {franchise["all"]["영등포구"]}
                    </title>
            </path>
            <path 
                id="동작구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["동작구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["동작구"] / allstore["동작구"])]
                  }
                d="M 367 426 l 6 3 5 3 6 5 6 3 3 1 10 4 7 1 -3 4 0 0 4 5 2 8 -2 11 0 6 -1 11 0 8 0 9 -5 -2 -14 0 -3 -2 -5 -4 -6 -10 0 -11 -2 -6 -7 3 -3 1 -2 -2 -7 -3 -9 1 -7 0 -11 -2 -6 -1 -6 7 -6 1 -10 4 -4 3 -2 1 -12 3 4 -6 3 -5 4 -5 4 -7 3 -1 9 -2 2 -8 3 -10 2 -3 3 -8 2 -5 8 -2 9 -1 8 -1 11 -2 z " >
                    <title>
                        동작구{"\n"}위생가게수 : {franchise["all"]["동작구"]}
                    </title>
            </path>
            <path 
                id="관악구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["관악구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["관악구"] / allstore["관악구"])]
                  }
                d="M 323 470 l 6 1 11 2 7 0 9 -1 7 3 2 2 3 -1 7 -3 2 6 0 11 6 10 5 4 3 2 14 0 5 2 2 8 4 6 3 4 0 11 1 5 -9 4 -7 2 -3 1 -5 4 -5 7 -8 5 -2 7 -1 5 -5 2 -9 2 -9 1 -10 2 -4 2 -2 0 -3 -5 -2 -6 -5 -4 -5 -7 -4 -4 -2 -6 -5 -4 -3 -4 -8 -3 -4 -8 -1 -6 -3 -6 -3 -6 3 -8 -3 -10 -6 -1 -11 1 4 -5 3 -5 12 -3 2 -1 4 -3 10 -4 6 -1 z " >
                    <title>
                        관악구{"\n"}위생가게수 : {franchise["all"]["관악구"]}
                    </title>
            </path>
            <path 
                id="서초구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["서초구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["서초구"] / allstore["서초구"])]
                  }
                d="M 460 413 l 1 0 2 -3 6 9 1 6 0 1 3 9 5 15 5 13 6 17 7 10 6 -1 5 5 1 3 4 9 7 13 3 5 6 -2 4 0 6 -1 9 -2 8 -4 5 -3 2 -2 11 0 4 8 2 3 5 6 2 7 4 4 1 7 -5 8 -6 10 0 6 -6 4 -4 4 -5 0 -4 -1 -4 0 -2 6 -2 8 -1 4 -1 2 1 3 -4 0 -10 2 -9 0 -8 0 -7 -4 -4 -6 -5 -5 -4 -2 -5 -4 1 -5 2 -4 -1 -8 0 -5 -2 -4 2 -5 0 -1 -3 -4 -2 -9 -2 -6 -5 0 -2 7 -3 6 -6 4 -8 2 -4 1 -2 0 -6 -3 -3 -3 0 0 -1 -2 -3 -6 -2 -8 -8 -2 -5 3 1 3 0 1 -4 4 -6 3 -4 3 -1 -5 0 -11 -3 -4 -4 -6 -2 -8 0 -9 0 -8 1 -11 0 -6 2 -11 -2 -8 -4 -5 0 0 3 -4 7 -3 5 -8 8 -8 5 -3 5 -4 5 -5 5 -4 3 -4 z " >
                    <title>
                        서초구{"\n"}위생가게수 : {franchise["all"]["서초구"]}
                    </title>
            </path>
            <path 
                id="강남구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["강남구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["강남구"] / allstore["강남구"])]
                  }
                d="M 503 387 l 10 3 4 4 5 3 7 4 7 4 12 5 0 10 0 4 1 13 1 6 1 10 6 2 7 1 6 2 3 2 12 4 5 2 5 3 6 3 5 4 5 5 3 6 3 5 3 5 4 7 2 2 5 10 3 4 4 5 -10 11 -2 6 -4 0 -3 -4 -9 -2 -4 0 0 2 -1 1 -3 3 -11 3 -1 -7 -4 -4 -2 -7 -5 -6 -2 -3 -4 -8 -11 0 -2 2 -5 3 -8 4 -9 2 -6 1 -4 0 -6 2 -3 -5 -7 -13 -4 -9 -1 -3 -5 -5 -6 1 -7 -10 -6 -17 -5 -13 -5 -15 -3 -9 0 -1 -1 -6 -6 -9 -2 3 -1 0 -7 -6 5 -6 4 -5 4 -5 8 -4 12 0 7 0 z " >
                    <title>
                        강남구{"\n"}위생가게수 : {franchise["all"]["강남구"]}
                    </title>
            </path>
            <path 
                id="송파구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["송파구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["송파구"] / allstore["송파구"])]
                  }
                d="M 621 374 l 6 2 4 2 4 4 0 8 -2 5 -1 3 0 7 5 2 8 5 5 3 8 4 3 2 5 3 5 2 -4 3 0 6 -3 10 4 5 5 3 10 0 9 3 5 5 -1 4 -2 7 -3 9 -4 3 -5 4 -5 5 -2 6 -3 7 -5 5 -10 0 -6 0 0 8 -4 5 -6 -2 -2 -1 -1 4 -4 -5 -3 -4 -5 -10 -2 -2 -4 -7 -3 -5 -3 -5 -3 -6 -5 -5 -5 -4 -6 -3 -5 -3 -5 -2 -12 -4 -3 -2 -6 -2 -7 -1 -6 -2 -1 -10 -1 -6 -1 -13 0 -4 0 -10 6 2 5 1 5 1 5 -1 6 -3 8 -5 3 -2 3 -3 11 -12 5 -4 5 -5 4 -5 z " >
                    <title>
                        송파구{"\n"}위생가게수 : {franchise["all"]["송파구"]}
                    </title>
            </path>
            <path 
                id="강동구" 
                className="OUTLINE" 
                onClick={(e)=>onAreaClick(e.target.id)} 
                fill={
                    isRelative ? 
                      fillColor[colorSpectrum(franchise["all"]["강동구"])] : 
                      fillColor[relativeColorSpectrum(franchise["all"]["강동구"] / allstore["강동구"])]
                  }
                d="M 726 320 l 1 7 3 9 0 9 1 9 1 10 1 5 -1 -1 -5 -1 -3 0 -4 2 -11 0 -8 1 -5 6 -4 5 -4 6 -2 4 -1 8 -4 7 -3 2 1 1 -1 2 -6 7 -1 8 -5 -2 -5 -3 -3 -2 -8 -4 -5 -3 -8 -5 -5 -2 0 -7 1 -3 2 -5 0 -8 -4 -4 -4 -2 -6 -2 -7 0 2 -4 2 -5 2 -10 4 -10 1 -1 4 -6 7 -6 5 -3 6 -3 8 -3 4 -1 5 0 11 0 9 -4 7 -5 8 -6 11 -6 11 0 0 7 3 6 z " >
                    <title>
                        강동구{"\n"}위생가게수 : {franchise["all"]["강동구"]}
                    </title>
            </path>
            </g>
            
            <g filter="url(#dropshadow2)">
            <text id="LCD11110" className="TEXT" x="399" y="277">종로구</text>
            <text id="LCD11140" className="TEXT" x="433" y="338">중구</text>
            <text id="LCD11170" className="TEXT" x="407" y="395">용산구</text>
            <text id="LCD11200" className="TEXT" x="505" y="356">성동구</text>
            <text id="LCD11215" className="TEXT" x="577" y="365">광진구</text>
            <text id="LCD11230" className="TEXT" x="528" y="294">동대문구</text>
            <text id="LCD11260" className="TEXT" x="589" y="270">중랑구</text>
            <text id="LCD11290" className="TEXT" x="466" y="258">성북구</text>
            <text id="LCD11305" className="TEXT" x="459" y="181">강북구</text>
            <text id="LCD11320" className="TEXT" x="494" y="125">도봉구</text>
            <text id="LCD11350" className="TEXT" x="560" y="153">노원구</text>
            <text id="LCD11380" className="TEXT" x="323" y="218">은평구</text>
            <text id="LCD11410" className="TEXT" x="342" y="302">서대문구</text>
            <text id="LCD11440" className="TEXT" x="293" y="339">마포구</text>
            <text id="LCD11470" className="TEXT" x="209" y="421">양천구</text>
            <text id="LCD11500" className="TEXT" x="156" y="334">강서구</text>
            <text id="LCD11530" className="TEXT" x="199" y="470">구로구</text>
            <text id="LCD11545" className="TEXT" x="279" y="537">금천구</text>
            <text id="LCD11560" className="TEXT" x="295" y="413">영등포구</text>
            <text id="LCD11590" className="TEXT" x="361" y="461">동작구</text>
            <text id="LCD11620" className="TEXT" x="353" y="529">관악구</text>
            <text id="LCD11650" className="TEXT" x="481" y="515">서초구</text>
            <text id="LCD11680" className="TEXT" x="533" y="464">강남구</text>
            <text id="LCD11710" className="TEXT" x="624" y="448">송파구</text>
            <text id="LCD11740" className="TEXT" x="675" y="358">강동구</text>
            </g>
        </svg>
    </>
  )
}

export default SeoulExpansion;
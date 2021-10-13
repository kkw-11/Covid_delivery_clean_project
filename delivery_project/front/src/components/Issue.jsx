import { Link } from "react-router-dom";
import Modal from "react-modal";
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Graph1 from "./GraphsData/Graphs/Graph1";
import Graph2 from "./GraphsData/Graphs/Graph2";
import Graph3 from "./GraphsData/Graphs/Graph3";

const Issue = () => {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <TitleStyle><h1>[속보] 코로나 이후 배달 위생상태 민원 31.6% 最大... 충격!</h1></TitleStyle>

      <TextStyle>
        최근, 외식 대신 배달음식 서비스 이용자가 늘어나면서&nbsp;   
        <ClickGraph onClick={() => setIsOpen1(true)}>
          배달 대행 건수
        </ClickGraph>
        가 급격하게 증가하였습니다.
        <Modal isOpen={modalIsOpen1} onRequestClose={() => setIsOpen1(false)} style={customStyles}>
          <Graph1 /> 
        </Modal>
      </TextStyle>

      <TextStyle>
        코로나 발생직후인 2020년 기준 전년 대비 무려 134.0%나 늘었습니다.
      </TextStyle>

      <TextStyle>
        그와 함께&nbsp;
        <ClickGraph onClick={() => setIsOpen2(true)}>
          배달음식 민원
        </ClickGraph>
        도 증가하였고, 특히 위생상태 민원이 31.6%로 가장 많았습니다.
        <Modal isOpen={modalIsOpen2} onRequestClose={() => setIsOpen2(false)} style={customStyles}>
          <Graph2 />
        </Modal>
      </TextStyle>

      <TextStyle> 
        2020년 한 해 동안,
        <ClickGraph onClick={() => setIsOpen4(true)}>
          식품 적발건수
        </ClickGraph>
        는 전년 대비 무려 12배나 증가했습니다.
        <Modal isOpen={modalIsOpen4} onRequestClose={() => setIsOpen4(false)} style={customStyles}>
          <Graph3 />
        </Modal>
      </TextStyle>
    
      {/* <TextStyle style={{textDecoration:"underline"}}> */}
      <TextStyle>
          <span style={{fontWeight:"bold"}}>클린한끼</span>에서 많은 소비자들이 위생에 대한 정보를 정확하게 알 수 있도록, 
      </TextStyle>

      {/* <TextStyle style={{fontWeight:'bold'}}> */}
      {/* <TextStyle style={{textDecoration:"underline"}}> */}
      <TextStyle>
          <Link to="/cleanStore" > 우리나라 위생 음식점 현황</Link>과  
          <Link to="/storeDetail" > 식약처에서 위생 인증을 받은 음식점</Link>에 대한 정보를 제공하고 있습니다.
      </TextStyle>
    </>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-10%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "60px",
    height: "60%",
  },
};

const TitleStyle = styled.div`
  font-size: 40px;
  border-radius: 1px;
  padding: 30px;
  text-align: center;
  color: #8B4513;
  font-weight: bolder;
`

const ClickGraph = styled.div`
  display: inline-block;
  color: rgb(61, 131, 196);
  cursor: pointer;
`

const TextStyle = styled.div`
  font-size: 29px;
  padding: 30px;
  color: black;
  text-align: center;
`

export default Issue;

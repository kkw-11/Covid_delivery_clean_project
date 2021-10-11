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
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <br />
      <p>
        <StyleBox>
          <h1>*클린한끼 궁금증*</h1>
        </StyleBox>

        <br />
        <br />
        <StyleBox2>
          <div
            className="Q1"
            onClick={() => {
              setIsOpen1(true);
            }}
          >
            1) 코로나 이후 온라인 음식 주문량은?
          </div>

          <Modal
            isOpen={modalIsOpen1}
            onRequestClose={() => {
              setIsOpen1(false);
            }}
            style={customStyles}
          >
            <Graph1 />
            <button
              onClick={() => {
                setIsOpen1(false);
              }}
            ></button>
          </Modal>
        </StyleBox2>

        <br />
        <StyleBox2>
          <div
            className="Q2"
            onClick={() => {
              setIsOpen2(true);
            }}
          >
            2) 이것에 따른 이슈는 무엇일까요?
          </div>
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={() => {
              setIsOpen2(false);
            }}
            style={customStyles}
          >
            동영상
            <button
              onClick={() => {
                setIsOpen2(false);
              }}
            ></button>
          </Modal>
        </StyleBox2>

        <br />
        <StyleBox2>
          <div
            className="Q3"
            onClick={() => {
              setIsOpen3(true);
            }}
          >
            3) 어떤 민원이 있었을까요?
          </div>
          <Modal
            isOpen={modalIsOpen3}
            onRequestClose={() => {
              setIsOpen3(false);
            }}
            style={customStyles}
          >
            <Graph2 />
            <button
              onClick={() => {
                setIsOpen3(false);
              }}
            ></button>
          </Modal>
        </StyleBox2>

        <br />
        <StyleBox2>
          <div
            className="Q4"
            onClick={() => {
              setIsOpen4(true);
            }}
          >
            4) 식품 위생법 적발건수는?
          </div>
          <Modal
            isOpen={modalIsOpen4}
            onRequestClose={() => {
              setIsOpen4(false);
            }}
            style={customStyles}
          >
            <Graph3 />
            <button
              onClick={() => {
                setIsOpen4(false);
              }}
            ></button>
          </Modal>
        </StyleBox2>

        <br />
        <StyleBox2>
          <Link to="/cleanStore">
            식약처에서 위생 인증을 받은 음식점을 지도에서 찾아보실래요?
          </Link>
        </StyleBox2>
      </p>
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
    height: "auto",
  },
};

const StyleBox = styled.div`
  font-size: 40px;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(119, 58, 58, 0.3);
  padding: 30px;
  text-align: center;
  color: grey;
`;

const StyleBox2 = styled.div`
  font-size: 30px;
  padding: 30px;
  margin-left: 4.3%;
  color: black;
`;

export default Issue;

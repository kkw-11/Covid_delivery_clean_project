import { Link } from "react-router-dom";
import Modal from "react-modal";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.css";
import { ProgressBar } from "react-bootstrap";

import "semantic-ui-css/semantic.min.css";
import { Progress } from "semantic-ui-react";

import ReactApexChart from "react-apexcharts";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2018년",
    "배달 대행건수": 3032,
  },
  {
    name: "2019년",
    "배달 대행건수": 5692,
  },
  {
    name: "2020년",
    "배달 대행건수": 13322,
  },
];
const data2 = [
  {
    name: "1월",
    "2020년 대행건수": 630,
  },
  {
    name: "2월",
    "2020년 대행건수": 690,
  },
  {
    name: "3월",
    "2020년 대행건수": 980,
  },
  {
    name: "4월",
    "2020년 대행건수": 980,
  },
  {
    name: "5월",
    "2020년 대행건수": 1050,
  },
  {
    name: "6월",
    "2020년 대행건수": 1060,
  },
  {
    name: "7월",
    "2020년 대행건수": 1130,
  },
  {
    name: "8월",
    "2020년 대행건수": 1350,
  },
  {
    name: "9월",
    "2020년 대행건수": 1260,
  },
  {
    name: "10월",
    "2020년 대행건수": 1200,
  },
  {
    name: "11월",
    "2020년 대행건수": 1310,
  },
  {
    name: "12월",
    "2020년 대행건수": 1670,
  },
];
const data3 = [
  {
    name: "2017년",
    "식품위생법 위반건수": 53,
  },
  {
    name: "2018년",
    "식품위생법 위반건수": 1103,
  },
  {
    name: "2019년",
    "식품위생법 위반건수": 328,
  },
  {
    name: "2020년",
    "식품위생법 위반건수": 2388,
  },
];
{
  /* 
function Test() {
    return (
        <div style={{ width: '100%', height: '90%', backgroundColor: 'gray' }}></div>
    );
}
function Test2() {
    return (
        <div style={{ width: '100%', height: '90%', backgroundColor: 'green' }}></div>
    );
}
*/
}
// 배달 대행 건수 그래프
const Graphs1 = () => {
  {
    /* 
    const [check, setCheck] = useState(1);

    const Click = (e) => {
        setCheck(e.target.id);
    };
    useEffect(() => {
    }, [check])
    */
  }
  return (
    <div>
      <div style={{ height: "5vh" }}>
        <div
          style={{
            width: "49%",
            float: "left",
            height: "100%",
            textAlign: "center",
            lineHeight: "5vh",
          }}
        >
          <p>
            <span
              style={{
                borderRadius: "15px 15px 15px 0",
                border: "3px solid #FFAD5B",
                padding: "0.5em 0.6em",
                textAlign: "center",
                color: "#FF8000",
              }}
            >
              배달 대행 건수
            </span>
          </p>
        </div>
        <div
          style={{
            width: "49%",
            float: "right",
            height: "100%",
            textAlign: "center",
            lineHeight: "5vh",
          }}
        >
          <p>
            <span
              style={{
                borderRadius: "15px 15px 15px 0",
                border: "3px solid #FFAD5B",
                padding: "0.5em 0.6em",
                color: "#FF8000",
              }}
            >
              온라인 음식서비스 거래액
            </span>
          </p>
        </div>
      </div>
      <div style={{ height: "35vh" }}>
        <div style={{ width: "49%", float: "left", height: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="배달 대행건수"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: "49%", float: "right", height: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="2020년 대행건수"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/*
                <div style={{ width: '70%', float: 'right', height: '100%' }}>
                    <button id='1' onClick={Click}>버튼</button>
                    <button id='2' onClick={Click}>버튼2</button>
                    {check == 1 ? (<Test></Test>) : (<Test2></Test2>)}
                </div>
                    */}
      </div>
    </div>
  );
};
// 배달 음식 민원 그래프
const Graphs2 = () => {
  return (
    <div>
      <div style={{ height: "5vh" }}>
        <div
          style={{
            width: "100%",
            float: "left",
            height: "100%",
            textAlign: "center",
            lineHeight: "5vh",
          }}
        >
          <p>
            <span
              style={{
                borderRadius: "15px 15px 15px 0",
                border: "3px solid #FFAD5B",
                textAlign: "center",
                padding: "0.5em 0.6em",
                color: "#FF8000",
              }}
            >
              배달 음식 민원
            </span>
          </p>
        </div>
      </div>
      <div style={{ height: "35vh" }}>
        <div
          style={{
            width: "70%",
            float: "left",
            height: "70%",
            textAlign: "-webkit-center",
          }}
        >
          <ReactApexChart
            options={{
              chart: {
                width: "100%",
                type: "pie",
              },
              labels: [
                "위생상태",
                "주문·환불처리",
                "원산지·허위광고",
                "가격·배달비 이의",
                "기타",
              ],
              theme: {
                palette: "palette2",
              },
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -5,
                  },
                },
              },
              dataLabels: {
                formatter(val, opts) {
                  const name = opts.w.globals.labels[opts.seriesIndex];
                  return [name, val.toFixed(1) + "%"];
                },
              },
              legend: {
                show: false,
              },
            }}
            series={[31.6, 21.1, 15.8, 15.8, 15.7]}
            type="pie"
            width="85%"
          />
        </div>
      </div>
    </div>
  );
};
//식품위생 적발건수
const Graphs3 = () => {
  return (
    <div>
      <div style={{ height: "5vh" }}>
        <div
          style={{
            width: "100%",
            float: "right",
            height: "100%",
            textAlign: "center",
            lineHeight: "5vh",
          }}
        >
          <p>
            <span
              style={{
                borderRadius: "15px 15px 15px 0",
                border: "3px solid #FFAD5B",
                padding: "0.5em 0.6em",
                textAlign: "center",
                color: "#FF8000",
              }}
            >
              식품위생 적발건수
            </span>
          </p>
        </div>
      </div>
      <div style={{ height: "35vh" }}>
        <div style={{ width: "100%", float: "right", height: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data3}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="식품위생법 위반건수" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const Issue = () => {
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  const [modalIsOpen4, setIsOpen4] = useState(false);
  const [modalIsOpen5, setIsOpen5] = useState(false);

  return (
    <>
      <br />
      <br />
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
          <Graphs1 />
          <button
            onClick={() => {
              setIsOpen1(false);
            }}
          >
            X
          </button>
          {/* <img src={}></img> */}
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
          >
            X
          </button>
          {/* <img src={}></img> */}
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
          <Graphs2 />
          <button
            onClick={() => {
              setIsOpen3(false);
            }}
          >
            X
          </button>
          {/* <img src={}></img> */}
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
          4) 식품 위생법 적발건수는??
        </div>
        <Modal
          isOpen={modalIsOpen4}
          onRequestClose={() => {
            setIsOpen4(false);
          }}
          style={customStyles}
        >
          <Graphs3 />
          <button
            onClick={() => {
              setIsOpen4(false);
            }}
          >
            X
          </button>
          {/* <img src={}></img> */}
        </Modal>
      </StyleBox2>

      <br />
      <StyleBox2>
        <Link to="/cleanStore">
          식약처에서 위생 인증을 받은 음식점을 지도에서 찾아보실래요?
        </Link>
      </StyleBox2>
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

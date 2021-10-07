import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';
import ReactApexChart from 'react-apexcharts';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "2018년",
        '배달 대행건수': 3032
    },
    {
        name: "2019년",
        '배달 대행건수': 5692
    },
    {
        name: "2020년",
        '배달 대행건수': 13322
    }
];
const data2 = [
    {
        name: "1월",
        '2020년 대행건수': 630
    },
    {
        name: "2월",
        '2020년 대행건수': 690
    },
    {
        name: "3월",
        '2020년 대행건수': 980
    },
    {
        name: "4월",
        '2020년 대행건수': 980
    },
    {
        name: "5월",
        '2020년 대행건수': 1050
    },
    {
        name: "6월",
        '2020년 대행건수': 1060
    },
    {
        name: "7월",
        '2020년 대행건수': 1130
    },
    {
        name: "8월",
        '2020년 대행건수': 1350
    },
    {
        name: "9월",
        '2020년 대행건수': 1260
    },
    {
        name: "10월",
        '2020년 대행건수': 1200
    },
    {
        name: "11월",
        '2020년 대행건수': 1310
    },
    {
        name: "12월",
        '2020년 대행건수': 1670
    }
];
const data3 = [
    {
        name: "2017년",
        "식품위생법 위반건수": 53
    },
    {
        name: "2018년",
        "식품위생법 위반건수": 1103
    },
    {
        name: "2019년",
        "식품위생법 위반건수": 328
    },
    {
        name: "2020년",
        "식품위생법 위반건수": 2388
    }
];
{/* 
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
*/}

const Graphs1 = () => {
    {/* 
    const [check, setCheck] = useState(1);

    const Click = (e) => {
        setCheck(e.target.id);
    };
    useEffect(() => {
    }, [check])
    */}
    return (
        <div>
            <div style={{ height: '5vh' }}>
                <div style={{ width: '50%', float: 'left', height: '100%', textAlign: 'center', lineHeight: '5vh' }}>
                    <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>배달 대행 건수</span></p>
                </div>
                <div style={{ width: '50%', float: 'right', height: '100%', textAlign: 'center', lineHeight: '5vh' }}>
                    <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>온라인 음식서비스 거래액</span></p>
                </div>
            </div>
            <div style={{ height: '35vh' }}>
                <div style={{ width: '50%', float: 'left', height: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
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
                <div style={{ width: '50%', float: 'right', height: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data2}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
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
                <div style={{ width: '50%', float: 'right', height: '100%' }}>
                    <button id='1' onClick={Click}>버튼</button>
                    <button id='2' onClick={Click}>버튼2</button>
                    {check == 1 ? (<Test></Test>) : (<Test2></Test2>)}
                </div>
                    */}
            </div>
        </div>
    );
}

const Graphs2 = () => {
    return (
        <div>
            <div style={{ height: '5vh' }}>
                <div style={{ width: '50%', float: 'left', height: '100%', textAlign: 'center', lineHeight: '5vh' }}>
                    <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>배달 음식 민원</span></p>
                </div>
                <div style={{ width: '50%', float: 'right', height: '100%', textAlign: 'center', lineHeight: '5vh' }}>
                    <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>식품위생 적발건수</span></p>
                </div>
            </div>
            <div style={{ height: '35vh' }}>
                <div style={{ width: '50%', float: 'left', height: '100%', textAlign: '-webkit-center' }}>
                    <ReactApexChart
                        options={{
                            chart: {
                                width: '100%',
                                type: 'pie',
                            },
                            labels: ["위생상태", "주문·환불처리", "원산지·허위광고", "가격·배달비 이의", "기타"],
                            theme: {
                                palette: 'palette2'
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        offset: -5
                                    }
                                }
                            },
                            dataLabels: {
                                formatter(val, opts) {
                                    const name = opts.w.globals.labels[opts.seriesIndex]
                                    return [name, val.toFixed(1) + '%']
                                }
                            },
                            legend: {
                                show: false
                            }
                        }}
                        series={[31.6, 21.1, 15.8, 15.8, 15.7]}
                        type="pie"
                        width="85%"
                    />
                </div>
                <div style={{ width: '50%', float: 'right', height: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data3}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
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
}

const Graphs3 = ({area}) =>{
    
    return (
        <div>
            <h4>지도 눌렀을 때 나오는 그래프</h4>
            {area}
        </div>
    )
}

const Graphs4 = () =>{
    return (
        <div>
            <h4>매우우수 / 우수 / 좋음</h4>
        </div>
    )
}

////////////////////////////////////////
// 그래프 보여지는 화면 한번에 정리하기//
//////////////////////////////////////
const Graphs = ({area}) =>{

    return (
        <GraphWrap>
            <GraphBox1>
                <Graphs1/>
            </GraphBox1>
            <GraphBox2>
                <Graphs2/>
            </GraphBox2>
            <GraphBox3>
                <Graphs3 area={area}/>
            </GraphBox3>
            <GraphBox4>
                <Graphs4 />
            </GraphBox4>
        </GraphWrap>
    )
}

export default Graphs;


const GraphWrap = styled.div`
  border: 5px solid darkkhaki;
`

const GraphBox1 = styled.div`
  border: 5px solid crimson;
`

const GraphBox2 = styled.div`
  border: 5px solid turquoise;
`

const GraphBox3 = styled.div`
  border: 5px solid yellow;
  padding-bottom: 20%;
`

const GraphBox4 = styled.div`
  border: 5px solid lightgreen;
  padding-bottom: 20%;
`

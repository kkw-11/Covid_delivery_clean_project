import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Background from '../images/introback.jpg';
import dish from '../images/dish3.jpg';
import graph from '../images/graphimg.png';

import 'bootstrap/dist/css/bootstrap.css';
import ReactApexChart from 'react-apexcharts';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

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
        '2020년 배달 대행건수': 630
    },
    {
        name: "2월",
        '2020년 배달 대행건수': 690
    },
    {
        name: "3월",
        '2020년 배달 대행건수': 980
    },
    {
        name: "4월",
        '2020년 배달 대행건수': 980
    },
    {
        name: "5월",
        '2020년 배달 대행건수': 1050
    },
    {
        name: "6월",
        '2020년 배달 대행건수': 1060
    },
    {
        name: "7월",
        '2020년 배달 대행건수': 1130
    },
    {
        name: "8월",
        '2020년 배달 대행건수': 1350
    },
    {
        name: "9월",
        '2020년 배달 대행건수': 1260
    },
    {
        name: "10월",
        '2020년 배달 대행건수': 1200
    },
    {
        name: "11월",
        '2020년 배달 대행건수': 1310
    },
    {
        name: "12월",
        '2020년 배달 대행건수': 1670
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

function Chart1() {
    return (
        <div className="App">
            <LineChart
                width={550}
                height={200}
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
            <LineChart
                width={550}
                height={200}
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
                    dataKey="2020년 배달 대행건수"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
}
function Chart2() {
    return (
        <BarChart
            width={550}
            height={400}
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
    );
}
function Chart3() {
    return (
        <div>
            <ReactApexChart
                options={{
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['등급을 받은 업체', '등급 X'],
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }}
                series={[2, 11]}
                type="pie"
                width={400}
            />
            <ReactApexChart
                options={{
                    chart: {
                        type: 'donut',
                    },
                    labels: ['좋음', '우수', '매우우수'],
                    plotOptions: {
                        pie: {
                            startAngle: -90,
                            endAngle: 90,
                            offsetY: 10
                        }
                    },
                    grid: {
                        padding: {
                            bottom: -80
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                }}
                series={[2, 11, 17]}
                type="donut"
                width={400}
            />
        </div>
    );
}
function Chart4() {
    /*
    const [franData, setFranData] = useState({ franchise: 0, nfranchise: 0 });
    const franchise = async () => {
        let response = await axios.get('http://localhost:1234/franchise')
        setFranData({
            franchise: response.data.franchise, nfranchise: response.data.nfranchise
        })
    }
    useEffect(() => {
        franchise();
    }, []);
    console.log(franData)
    */
    return (
        <ReactApexChart
            options={{
                chart: {
                    type: 'donut',
                },
                labels: ['프랜차이즈X', '프랜차이즈'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }}
            series={[22, 55]}
            type="donut"
            width={500}
        />
    );
}

const Table = styled.div`
    position: fixed;
    left:50%; 
    transform: translate(-50%);
    height: 100vh;
    align-items: center;
    justify-content: center;
`
const Graph = styled.div`
    width: 1000px;
    height: 1000px;
    position: absolute;
    margin-top: 5%;
    margin-left: -5%;
    z-index: 100;
    overflow: hidden;
`

const Intro = () => {

    return (
        <div>
            <div style={{ width: '50%', margin: '5% auto' }}>
                <Chart1 />
                <p style={{ backgroundColor: '#F1F1F3', borderRadius: '5px', padding: '0.6em 1em', margin: '30px 0 0' }}>1. 배달대행건수에 대한 소개 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<br></br>~~~~~</p>
            </div>
            <div style={{ width: '50%', margin: '5% auto' }}>
                <Chart2 />
                <p style={{ backgroundColor: '#F1F1F3', borderRadius: '5px', padding: '0.6em 1em', margin: '30px 0 0' }}>2. 식품위생 위반건수에 대한 소개 ~~~~~~~~~~~~~~~~~~~<br></br>~~~~~</p>
            </div>
            <div style={{ width: '50%', margin: '5% auto' }}>
                <img src={graph} style={{ width: '500px', height: '300px' }} />
                <p style={{ backgroundColor: '#F1F1F3', borderRadius: '5px', padding: '0.6em 1em', margin: '30px 0 0' }}>3. 배달음식 관련 불편사항 통계 소개 ~~~~~~~~~~~~~~~~~~~<br></br>~~~~~</p>
            </div>
            <div style={{ width: '50%', margin: '5% auto' }}>
                <Chart3 />
                <p style={{ backgroundColor: '#F1F1F3', borderRadius: '5px', padding: '0.6em 1em', margin: '30px 0 0' }}>4. 전국식당 위생등급을 받은 비율 소개 ~~~~~~~~~~~~~~~~~~~<br></br>~~~~~</p>
            </div>
            <div style={{ width: '50%', margin: '5% auto' }}>
                <Chart4 />
                <p style={{ backgroundColor: '#F1F1F3', borderRadius: '5px', padding: '0.6em 1em', margin: '30px 0 0' }}>5. 프랜차이즈 비율 소개 ~~~~~~~~~~~~~~~~~~~<br></br>~~~~~</p>
            </div>
        </div>
    );
}

export default Intro;


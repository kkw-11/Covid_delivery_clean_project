import React from "react";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.css";
import {
    LineChart,
    Line,
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
        "2020년 배달 대행건수": 630,
    },
    {
        name: "2월",
        "2020년 배달 대행건수": 690,
    },
    {
        name: "3월",
        "2020년 배달 대행건수": 980,
    },
    {
        name: "4월",
        "2020년 배달 대행건수": 980,
    },
    {
        name: "5월",
        "2020년 배달 대행건수": 1050,
    },
    {
        name: "6월",
        "2020년 배달 대행건수": 1060,
    },
    {
        name: "7월",
        "2020년 배달 대행건수": 1130,
    },
    {
        name: "8월",
        "2020년 배달 대행건수": 1350,
    },
    {
        name: "9월",
        "2020년 배달 대행건수": 1260,
    },
    {
        name: "10월",
        "2020년 배달 대행건수": 1200,
    },
    {
        name: "11월",
        "2020년 배달 대행건수": 1310,
    },
    {
        name: "12월",
        "2020년 배달 대행건수": 1670,
    },
];

const Graph1 = () => {
    return (
        <div>
            <div style={{ height: "10vh" }}>
                <div
                    style={{
                        width: "55%",
                        float: "left",
                        height: "100%",
                        textAlign: "center",
                        lineHeight: "9vh",
                    }}
                >
                    <p>
                        <span
                            style={{
                                textAlign: "center",
                                color: "#FF8000",
                                fontWeight: "bold",
                            }}
                        >
                            배달 대행 건수
                        </span>
                    </p>
                </div>
                <div
                    style={{
                        width: "45%",
                        float: "right",
                        height: "100%",
                        textAlign: "center",
                        lineHeight: "9vh",
                    }}
                >
                    <p>
                        <span
                            style={{
                                color: "#FF8000",
                                fontWeight: "bold",
                            }}
                        >
                            2020년 배달 대행건수
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
                            <Line
                                type="monotone"
                                dataKey="2020년 배달 대행건수"
                                stroke="#82ca9d"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div style={{color: "#FF8000", margin:"5% 0 0 2%"}}>
                출처: 바로고
            </div>
        </div>
    );
};
export default Graph1;
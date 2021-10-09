import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import {
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

//식품위생 적발건수
const Graph3 = () => {
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
                            <Bar dataKey="식품위생법 위반건수" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Graph3;
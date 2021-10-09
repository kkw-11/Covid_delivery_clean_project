import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import ReactApexChart from "react-apexcharts";

// 배달 음식 민원 그래프
const Graph2 = () => {
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

export default Graph2;
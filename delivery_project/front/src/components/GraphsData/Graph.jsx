import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../fonts/font.css';

import loading from '../../images/loading3.gif';
import 'bootstrap/dist/css/bootstrap.css';
import ReactApexChart from 'react-apexcharts';

import { BACKEND_URL } from "../../env";
import { ProgressBar } from 'react-bootstrap';

const Graphs1 = ({ area, franchise, allfranchise, storelist }) => {
    
    const StoreName = styled.p`
        font-family: Blackhan;
        font-size: 35px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `

    return (
        <>
            {franchise === null || storelist === null || allfranchise === null ? (
            
                <img src={loading} style= {{display: "block", margin: "40% auto"}} width={350} height={350} ></img>
            ) : (
                <>
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '6vh', margin:'1%' }}>
                        <p><span style={{ padding: '0.5em 0.6em', color: '#8B4513', fontSize: "1.6em", fontWeight: "bold"}}>- {area} 프랜차이즈 비율 -</span></p>
                    </div>
                    <div style={{ width: '85%', textAlign: '-webkit-center', margin:'0 auto'}}>
                        <ReactApexChart
                            options={{
                                chart: {
                                    width: '100%',
                                    type: 'donut',
                                },
                                labels: ["프랜차이즈", "일반음식점"],
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
                            series={[franchise.data['all'][area] - franchise.data['franchise'][area], franchise.data['franchise'][area]]}
                            type="donut"
                            width="85%"
                        />
                    </div>
                    <div style={{ width: '85%', height: '15%', textAlign: '-webkit-center', lineHeight: '5vh', margin:'0 auto'}}>
                            <ReactApexChart
                                options={{
                                    chart: {
                                        width: '100%',
                                        type: 'donut',
                                    },
                                    labels: ["위생 프렌차이점", "전체 프렌차이점"],
                                    theme: {
                                        palette: 'palette2'
                                    },
                                    plotOptions: {
                                        pie: {
                                            startAngle: -90,
                                            endAngle: 90,
                                            offsetY: 10
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
                                series={[franchise.data['all'][area], allfranchise.data[area]-franchise.data['all'][area]]}
                                type="donut"
                                width="85%"
                            />
                        </div>
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh', margin: '10% 10% 5% 0%' }}>
                        <p><span style={{ padding: '0.5em 0.6em', color: '#8B4513', fontSize: "1.8em", fontWeight: "bold" }}>- {area} 위생가게 리스트 -</span></p>
                    </div>
                    <div style={{ width: '80%', textAlign: 'left', lineHeight: '5vh', marginLeft: '15%' }}>
                            <StoreName>{storelist.data[area][0]}</StoreName>
                            <StoreName>{storelist.data[area][1]}</StoreName>
                            <StoreName>{storelist.data[area][2]}</StoreName>
                            <StoreName>{storelist.data[area][3]}</StoreName>
                            <StoreName>{storelist.data[area][4]}</StoreName>
                            <Link to={{
                                pathname: `/Storedetail`,
                                state: area
                        }}> 더보기 </Link>
                        </div>

                </>
            )}
        </>
    )
}

const Graph = ({ area, franchise, allfranchise, storelist }) => {

    return (
        <StyleGraph>
            <Graphs1 
                area={area} 
                franchise={franchise}
                allfranchise={allfranchise}
                storelist={storelist}
            />
        </StyleGraph>
    )
}

export default Graph;

const StyleGraph = styled.div`
    margin: 2% 2% 10% 2%;
    height: 98vh;
    background-color: transparent;
    box-shadow: 2px 2px 2px 1px #bdbebd;
    
`
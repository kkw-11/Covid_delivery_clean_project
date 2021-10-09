import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import '../../fonts/font.css';

import loading from '../../images/Spinner-1s-200px.gif';
import 'bootstrap/dist/css/bootstrap.css';
import ReactApexChart from 'react-apexcharts';

import { BACKEND_URL } from "../../env";
import { ProgressBar } from 'react-bootstrap';

const Graphs1 = ({ area }) => {

    const [franchise, setFranchise] = useState(null);
    const [allfranchise, setAllfranchise] = useState(null);
    const [storelist, setStorelist] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${BACKEND_URL}/regioncount`);
            setFranchise(response.data);
            const response2 = await axios.post(`${BACKEND_URL}/allfranchise`);
            setAllfranchise(response2.data);
            console.log(response2.data)
            const response3 = await axios.post(`${BACKEND_URL}/storelist`);
            setStorelist(response3.data);
        };
        fetchData()
    }, []);

    const StoreName = styled.p`
        font-family: Blackhan;
        font-size: 35px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `

    return (
        <div>
            {franchise === null || storelist === null || allfranchise === null ? (
                <img src={loading} width={200} height={200}></img>
            ) : (
                <>
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh', margin:'1%' }}>
                        <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>{area} 프랜차이즈 비율</span></p>
                    </div>
                    <div style={{ width: '100%', textAlign: '-webkit-center'}}>
                        <ReactApexChart
                            options={{
                                chart: {
                                    width: '100%',
                                    type: 'donut',
                                },
                                labels: ["프랜차이즈", "프랜차이즈X"],
                                theme: {
                                    palette: 'palette5'
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
                    <div style={{ width: '100%', height: '15%', textAlign: '-webkit-center', lineHeight: '5vh', margin:'0'}}>
                            <ReactApexChart
                                options={{
                                    chart: {
                                        width: '100%',
                                        type: 'donut',
                                    },
                                    labels: ["위생 프렌차이점", "전체 프렌차이점"],
                                    theme: {
                                        palette: 'palette3'
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
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh', marginBottom: '10%' }}>
                        <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>{area} 위생가게 리스트</span></p>
                    </div>
                    <div style={{ width: '80%', textAlign: 'left', lineHeight: '5vh', marginLeft: '15%' }}>
                            <StoreName>{storelist.data[area][0]}</StoreName>
                            <StoreName>{storelist.data[area][1]}</StoreName>
                            <StoreName>{storelist.data[area][2]}</StoreName>
                            <StoreName>{storelist.data[area][3]}</StoreName>
                            <StoreName>{storelist.data[area][4]}</StoreName>
                        </div>

                </>
            )}
        </div>
    )
}

const Graph = ({ area }) => {

    return (
        <>
            <Graphs1 area={area} />
        </>
    )
}

export default Graph;
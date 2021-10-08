import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

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
            const response = await axios.post(`${BACKEND_URL}/gradecount`);
            setFranchise(response.data);
            const response2 = await axios.post(`${BACKEND_URL}/allfranchise`);
            setAllfranchise(response2.data);
            console.log(response2.data)
            const response3 = await axios.post(`${BACKEND_URL}/storelist`);
            setStorelist(response3.data);
        };
        fetchData()
    }, []);

    return (
        <div>
            {franchise === null || storelist === null || allfranchise === null ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh', marginTop:'50%' }}>
                        <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>프랜차이즈 비율</span></p>
                    </div>
                    <div style={{ width: '100%', textAlign: '-webkit-center' }}>
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
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh', marginTop:'50%' }}>
                        <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>프랜차이즈 비율</span></p>
                    </div>
                    <div style={{ width: '100%', float: 'center' }}>
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
                    <div style={{ width: '100%', textAlign: 'center', lineHeight: '5vh' }}>
                        <p><span style={{ borderRadius: '15px 15px 15px 0', border: '3px solid #FFAD5B', padding: '0.5em 0.6em', color: '#FF8000' }}>위생가게 리스트</span></p>
                    </div>
                    <div style={{ width: '100%' }}>
                            {storelist.data[area][0]}<br></br>
                            {storelist.data[area][1]}<br></br>
                            {storelist.data[area][2]}<br></br>
                            {storelist.data[area][3]}<br></br>
                            {storelist.data[area][4]}
                        </div>

                </>
            )}
        </div>
    )
}

const Graphs = ({ area }) => {

    return (
        <>
            <Graphs1 area={area} />
        </>
    )
}

export default Graphs;
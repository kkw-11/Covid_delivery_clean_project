import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../env";
import styled from "styled-components";
import Map from "./Map"
import Grade from "./GraphsData/Grade"
import Graph from "./GraphsData/Graph"



const CleanStore = () => {
    
    const [grade, setGrade] = useState(null);
    const [franchise, setFranchise] = useState(null);
    const [allfranchise, setAllfranchise] = useState(null);
    const [storelist, setStorelist] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const response1 = await axios.post(`${BACKEND_URL}/gradecount`);
            setGrade(response1.data);
            const response2 = await axios.post(`${BACKEND_URL}/regioncount`);
            setFranchise(response2.data);
            const response3 = await axios.post(`${BACKEND_URL}/allfranchise`);
            setAllfranchise(response3.data);
            const response5 = await axios.post(`${BACKEND_URL}/storelist`);
            setStorelist(response5.data);
        };
        fetchData()
    }, []);

    const [area, setArea] = useState('전국')

    return (
        <GirdContainer>
            <Grade 
                area={area} 
                grade={grade}
            />
            <Map 
                setArea={setArea}
            />
            <Graph 
                area={area} 
                franchise={franchise}
                allfranchise={allfranchise}
                storelist={storelist}
            />
        </GirdContainer>
    )
}

export default CleanStore;

const GirdContainer = styled.div`
    display: grid;
    width:100%;
    height: 100vh;
    grid-template-columns: 25% 50% 25%;
    background-color: rgb(255, 255, 255);
`
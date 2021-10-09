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
            const response4 = await axios.post(`${BACKEND_URL}/storelist`);
            setStorelist(response4.data);
        };
        fetchData()
    }, []);

    const [area, setArea] = useState('전국')

    return (
        <>
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
        {/*
            <Introduce><h4>한줄 소개</h4></Introduce>
            <Container>
                <Graphs area={area}/>
                <Map setArea={setArea} />
            </Container>
         */}
        </>
    )
}

export default CleanStore;

const GirdContainer = styled.div`
    display: grid;
    width:100%;
    grid-template-columns: 25% 50% 25%;
    height: 100vh;
`
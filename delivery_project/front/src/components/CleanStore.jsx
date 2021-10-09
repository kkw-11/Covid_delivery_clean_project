import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Map from "./Map"
import Grade from "./GraphsData/Grade"
import Graph from "./GraphsData/Graph"


const CleanStore = () => {
    
    const [area, setArea] = useState('전국')

    return (
        <>
        <GirdContainer>
            <Grade area={area} />
            <Map setArea={setArea} />
            <Graph area={area} />
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
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Graphs from "./Graphs"
import Map from "./Map"

const Intro = () => {
    return (
        <>
            <Introduce><h4>한줄 소개</h4></Introduce>
            <Container>
                <Graphs />
                <Map />
            </Container>
        </>
    )
}

export default Intro;


const Introduce = styled.div`
    border: 5px solid orange;
    padding-bottom: 5%;
`

const Container = styled.div`
  border: 5px solid green;
  display: grid;
  grid-template-columns: 50% 1fr;
`;
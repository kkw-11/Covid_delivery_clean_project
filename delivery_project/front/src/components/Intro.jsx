import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Graphs from "./Graphs"
import Map from "./Map"

const Intro = () => {
    
    const [area, setArea] = useState('전국')

    return (
        <>
            <Introduce><h4>한줄 소개</h4></Introduce>
            <ContainerWrap>
                <Graphs area={area}/>
                <Map setArea={setArea} />
            </ContainerWrap>
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
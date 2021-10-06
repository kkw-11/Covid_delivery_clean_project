import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {Graphs, Graphs2} from "./Graphs"
import Map from "./Map"

const Intro = () => {
    return (
        <>
            <Introdeuce><h4>한줄 소개</h4></Introdeuce>
            <ContainerWrap>
                <GraphWrap>
                    <Graph1>
                        <Graphs/>
                    </Graph1>
                    <Graph2>
                        <Graphs2/>
                    </Graph2>
                    <Graph3>
                        <h4>매우우수 / 우수 / 좋음</h4>
                    </Graph3>
                </GraphWrap>
                <Map />
            </ContainerWrap>
        </>
    )
}

export default Intro;


const Introdeuce = styled.div`
    border: 5px solid orange;
    padding-bottom: 5%;
`

const ContainerWrap = styled.div`
  border: 5px solid green;
  display: grid;
  grid-template-columns: 50% 1fr;
`;

const GraphWrap = styled.div`
  border: 5px solid darkkhaki;
`

const Graph1 = styled.div`
  border: 5px solid crimson;
`

const Graph2 = styled.div`
  border: 5px solid turquoise;
`

const Graph3 = styled.div`
  border: 5px solid yellow;
  padding-bottom: 20%;
`
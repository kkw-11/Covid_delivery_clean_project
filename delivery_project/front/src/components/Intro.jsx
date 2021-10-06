import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {Graphs1, Graphs2, Graphs3, Graphs4} from "./Graphs"
import Map from "./Map"

const Intro = () => {
    return (
        <>
            <Introdeuce><h4>한줄 소개</h4></Introdeuce>
            <ContainerWrap>
                <GraphWrap>
                    <GraphBox1>
                        <Graphs1/>
                    </GraphBox1>
                    <GraphBox2>
                        <Graphs2/>
                    </GraphBox2>
                    <GraphBox3>
                        <Graphs3 />
                    </GraphBox3>
                    <GraphBox4>
                        <Graphs4 />
                    </GraphBox4>
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

const GraphBox1 = styled.div`
  border: 5px solid crimson;
`

const GraphBox2 = styled.div`
  border: 5px solid turquoise;
`

const GraphBox3 = styled.div`
  border: 5px solid yellow;
  padding-bottom: 20%;
`

const GraphBox4 = styled.div`
  border: 5px solid lightgreen;
  padding-bottom: 20%;
`
import React from "react";
import styled from "styled-components";

const MapLegend = () => {

    return (
      <LegendBox>
        <Circle style={ {backgroundColor: "rgb(244, 249, 160)" }}>
          <Num>0+</Num>
        </Circle >
        <Circle style={ {backgroundColor: "rgb(204, 241, 140)"}}>
          <Num>50+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(176, 233, 89)"}}>
          <Num>100+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(6, 208, 176)"}}>
          <Num>150+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(2, 207, 178)"}}>
          <Num>200+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(0, 209, 241)"}}>
          <Num>300+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(0, 169, 211)"}}>
          <Num>500+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(1, 108, 213)"}}>
          <Num>800+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(0, 81, 243)"}}>
          <Num>1200+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(0, 79, 207)"}}>
          <Num>2000+</Num>
        </Circle>
        <Circle style={ {backgroundColor: "rgb(0, 24, 146)"}}>
          <Num>3000+</Num>
        </Circle>
      </LegendBox>
    )
  }

export default MapLegend;

const LegendBox = styled.div`
    position: absolute;
    margin: 3% 2%;
`

const Circle = styled.div`
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50px;
      margin: 3px 0px;
      padding: 8px;
`

const Num = styled.div`
    position: absolute;
    padding: 0px;
    margin: -9px 15px;
`
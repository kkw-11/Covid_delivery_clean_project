import React from "react";
import styled from "styled-components";

const SeoulMapLegend = ({ isRelative }) => {

    return (
      <>
        {isRelative ? (
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
              <Num>250+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 169, 211)"}}>
              <Num>300+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(1, 108, 213)"}}>
              <Num>350+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 81, 243)"}}>
              <Num>400+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 79, 207)"}}>
              <Num>450+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 24, 146)"}}>
              <Num>500+</Num>
            </Circle>
          </LegendBox>
        ) : (
          <LegendBox>
            <Circle style={ {backgroundColor: "rgb(244, 249, 160)" }}>
              <Num>0+</Num>
            </Circle >
            <Circle style={ {backgroundColor: "rgb(204, 241, 140)"}}>
              <Num>0.5%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(176, 233, 89)"}}>
              <Num>1.0%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(6, 208, 176)"}}>
              <Num>1.5%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(2, 207, 178)"}}>
              <Num>2.0%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 209, 241)"}}>
              <Num>2.5%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 169, 211)"}}>
              <Num>3.0%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(1, 108, 213)"}}>
              <Num>3.5%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 81, 243)"}}>
              <Num>4.0%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 79, 207)"}}>
              <Num>4.5%+</Num>
            </Circle>
            <Circle style={ {backgroundColor: "rgb(0, 24, 146)"}}>
              <Num>5.0%+</Num>
            </Circle>
          </LegendBox>
        )}
      </>
    )
  }

export default SeoulMapLegend;

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


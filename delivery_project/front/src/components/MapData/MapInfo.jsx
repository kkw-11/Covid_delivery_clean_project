import React from "react";
import styled from "styled-components";

import "./area/area.css";


const MapInfo = ({ area, num }) => {

    return (
      <StyleBox>
        {area !== "" && (
          <>
            <h2>
              {area} 위생가게 정보
            </h2>
            <p>위생가게 수 : {num}</p>
          </>
        )}
      </StyleBox>
    );
  }
  

export default MapInfo;

const StyleBox = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: 800px;
  padding: 10px;
`;
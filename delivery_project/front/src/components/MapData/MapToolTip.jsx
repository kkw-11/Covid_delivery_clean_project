import React from "react";
import styled from "styled-components";

const MapToolTip = () => {
    return (
        <ToolTip>
            <p>서울시<br/>1234</p>
        </ToolTip>
    );
}

export default MapToolTip;

const ToolTip = styled.div`
    display: flex;
    width: 10%;
    font-size: 13px;
    text-align: left;
    line-height: 130%;
    background: rgba(255,255,255, 0.8);
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 4px;
    z-index: 1000;

    &:hover {
        transform: translate(106.95522px,19.462687px);
    }
`

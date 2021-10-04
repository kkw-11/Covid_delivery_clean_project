import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Menu = () => {
    const [isSelect, setIsSelect] = useState(false)
    console.log(isSelect)

    const handleSelect = () => {
        setIsSelect(!isSelect)
        console.log(isSelect)
    }

    return (
        <>
            <Grid>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect} >밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>국(탕)</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>분식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox onClick={ handleSelect }>뭐먹지?</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>일식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>다 귀찮</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>야식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden" select={isSelect}>중식</MenuBox>
                </MenuContainer>
            </Grid>
        </>
    );
} 

export default Menu;

const Grid = styled.div`
    border: 5px solid green;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
`

const MenuContainer = styled.div`
    border: 2px solid black;
    width: 100%;
    position: relative;
    background-color: azure;
    display: block;
    padding-bottom: 100%;
`
const MenuBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 200%;
    text-align: center;
    padding: 45% 0;
    cursor: pointer;

    &.hidden {
        visibility: ${props => (props.select ? "visible" : "hidden")};
    }
`

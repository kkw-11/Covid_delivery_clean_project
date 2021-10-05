import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Menu = () => {
    const [mainSelect, setMainSelect] = useState(false)
    const [firstSelect, setFirstSelect] = useState(false)
    const [secondSelect, setSecondSelect] = useState(false)
    const [thirdSelect, setThirdSelect] = useState(false)
    const [fourthSelect, setFourthSelect] = useState(false)
    const [fifthSelect, setFifthSelect] = useState(false)
    const [sixthSelect, setSixthSelect] = useState(false)
    const [seventhSelect, setSeventhSelect] = useState(false)
    const [eighthSelect, setEighthSelect] = useState(false)

    const handleMainSelect = () => {
        setMainSelect(!mainSelect)
        setFirstSelect(false) 
        setSecondSelect(false)
        setThirdSelect(false)
        setFourthSelect(false)
        setFifthSelect(false)
        setSixthSelect(false)
        setSeventhSelect(false)
        setEighthSelect(false)
    }
    

    return (
        <>
            <Grid>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>제육덮밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>비빔밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>오므라이스</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>김치찌개</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>부대찌개</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>된장찌개</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>떡볶이</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>핫도그</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>김밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>카레덮밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>야채볶음밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>짜장밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>육개장</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>순두부찌개</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>돼지국밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>순대</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>돈까스</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>튀김</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>회덮밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>쌈밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={firstSelect}>김치볶음밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>매운탕</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>해물탕</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={secondSelect}>뼈해장국</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>어묵</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>라볶이</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={thirdSelect}>만두</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>라면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>냉면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>칼국수</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setFirstSelect(!firstSelect) }>밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSecondSelect(!secondSelect) }>국(탕)</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setThirdSelect(!thirdSelect) }>분식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>우동</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>가츠동</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>하이라이스</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>짜파게티</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>비빔국수</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>잔치국수</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setFourthSelect(!fourthSelect) }>면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox onClick={ handleMainSelect } style={ { color: "blue" } }>뭐먹지?</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setFifthSelect(!fifthSelect) }>일식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>오코노미야끼</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>초밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>규동</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>스파게티</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>막국수</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fourthSelect}>쫄면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSixthSelect(!sixthSelect) }>다 귀찮</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSeventhSelect(!seventhSelect) }>야식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setEighthSelect(!eighthSelect) }>중식</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>라멘</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>소바</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={fifthSelect}>돈부리</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>삼각김밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>햄버거</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>토스트</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>치킨</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>족발(보쌈)</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>피자</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>짜장면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>짬뽕</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>볶음밥</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>컵라면</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>도시락</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>밥버거</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>닭발</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>곱(막)창</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>과자</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>탕수육</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>마파두부</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>깐풍기</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>빵</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>샌드위치</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={sixthSelect}>죽</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>골뱅이무침</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>삼겹살</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={seventhSelect}>오뎅탕</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>고추잡채</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>팔보채</MenuBox>
                </MenuContainer>
                <MenuContainer>
                    <MenuBox className="hidden-sub" select={eighthSelect}>깐쇼새우</MenuBox>
                </MenuContainer>
                
            </Grid>
        </>
    );
} 

export default Menu;

const Grid = styled.div`
    border: 3px ouset black;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin: 0 auto;
`

const MenuContainer = styled.div`
    border: 3px outset gray;
    width: 100%;
    position: relative;
    background-color: lightgray;
    display: block;
    padding-bottom: 100%;

    &.hidden {
        border-style: ${props => (props.select ? "dotted" : "outset")};;
    }
`
const MenuBox = styled.div`
    border: 1px outset gray;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 130%;
    font-weight: bold;
    text-align: center;
    padding: 40% 0;
    cursor: pointer;
    
    &:active {
        background-color: #bdbebd;
    }

    &.hidden-main {
        visibility: ${props => (props.select ? "visible" : "hidden")};
        border-style: ${props => (props.select ? "dotted" : "outset")};
        background-color: ${props => (props.select ? "#bdbebd" : "lightgray")};

        &:hover {
            color: green;
        } 
    }

    &.hidden-sub {
        visibility: ${props => (props.select ? "visible" : "hidden")};
        border-style: ${props => (props.select ? "dotted" : "outset")};
        background-color: ${props => (props.select ? "#bdbebd" : "lightgray")};

        &:hover {
            color: red;
        } 
    }
`

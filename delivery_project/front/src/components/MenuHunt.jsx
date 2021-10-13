import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';

const MenuHunt = () => {
    const [mainSelect, setMainSelect] = useState(false)
    const [firstSelect, setFirstSelect] = useState(false)
    const [secondSelect, setSecondSelect] = useState(false)
    const [thirdSelect, setThirdSelect] = useState(false)
    const [fourthSelect, setFourthSelect] = useState(false)
    const [fifthSelect, setFifthSelect] = useState(false)
    const [sixthSelect, setSixthSelect] = useState(false)
    const [seventhSelect, setSeventhSelect] = useState(false)
    const [eighthSelect, setEighthSelect] = useState(false)
    // const [menu1, setMenu1] = useState(false)

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
        // setMenu1(false)
    }


    //////////////////////////////////////////////
    //외부영역 클릭했을 때 돌아가는 기능 //
    ////////////////////////////////////////////

    const outsideRef = useRef(null); // useRef를 사용하여 ref를 생성합니다.
    useOutsideClick(outsideRef);

    function useOutsideClick(ref) {
      useEffect(() => {

        function handleClickOutside(event) {
          console.log(ref);

          // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
          if (ref.current && !ref.current.contains(event.target)) {
            setMainSelect(false)
            setFirstSelect(false) 
            setSecondSelect(false)
            setThirdSelect(false)
            setFourthSelect(false)
            setFifthSelect(false)
            setSixthSelect(false)
            setSeventhSelect(false)
            setEighthSelect(false)
            // setMenu1(false)
          }
        }

        // 현재 document에 이벤트리스너를 추가합니다.
        document.addEventListener("mousedown", handleClickOutside);

        // useEffect 함수가 return하는 것은 마운트 해제하는 것과 동일합니다.
        // 즉, Class 컴포넌트의 componentWillUnmount 생명주기와 동일합니다.
        // 더 이상'mousedown'이벤트가 동작하더라도 handleClickOutside 함수가 실행되지 않습니다.
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]); // ref가 변경되면 useEffect를 다시 생성합니다.
    }
    

    return (
        <Grid ref={outsideRef}>
            <MenuContainer >
                {/* className="checked" select={menu1} onClick={() => {setMenu1(!menu1)}} */}
                <MenuBox className="hidden-sub" select={firstSelect}>제육덮밥</MenuBox>
            </MenuContainer>
            <MenuContainer >
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
            <MenuContainer class="checked" select={firstSelect}>
                <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setFirstSelect(!firstSelect) }>밥</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={secondSelect}>
                <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSecondSelect(!secondSelect) }>국(탕)</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={thirdSelect}>
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
            <MenuContainer class="checked" select={fourthSelect}>
                <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setFourthSelect(!fourthSelect) }>면</MenuBox>
            </MenuContainer >
            <MenuContainer class="checked" select={mainSelect} style={{display: "block"}}>
                <MenuBox className="what" onClick={ handleMainSelect } style={ { color: "#8B4513"} }>뭐먹지?</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={fifthSelect}>
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
                <MenuBox className="hidden-sub" select={fourthSelect}>파스타</MenuBox>
            </MenuContainer>
            <MenuContainer>
                <MenuBox className="hidden-sub" select={fourthSelect}>막국수</MenuBox>
            </MenuContainer>
            <MenuContainer>
                <MenuBox className="hidden-sub" select={fourthSelect}>쫄면</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={sixthSelect}>
                <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSixthSelect(!sixthSelect) }>다 귀찮</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={seventhSelect}>
                <MenuBox className="hidden-main" select={mainSelect} onClick={ () => setSeventhSelect(!seventhSelect) }>야식</MenuBox>
            </MenuContainer>
            <MenuContainer class="checked" select={eighthSelect}>
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
                <MenuBox className="hidden-sub" select={seventhSelect}>아구찜</MenuBox>
            </MenuContainer>
            <MenuContainer>
                <MenuBox className="hidden-sub" select={eighthSelect}>고추잡채</MenuBox>
            </MenuContainer>
            <MenuContainer>
                <MenuBox className="hidden-sub" select={eighthSelect}>팔보채</MenuBox>
            </MenuContainer>
            <MenuContainer>
                <MenuBox className="hidden-sub" select={eighthSelect}>마라탕</MenuBox>
            </MenuContainer>
            
        </Grid>
    );
} 

export default MenuHunt;

const Grid = styled.div`
    width: 85vh;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin: 1% auto;
`

const MenuContainer = styled.div`
    border: 5px solid #FFEFD5;
    width: 100%;
    position: relative;
    padding-bottom: 90%;

    /* &.checked {
        border-style: ${props => (props.select ? "dotted" : "solid")};
    } */
`

const MenuBox = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 100%;
    font-weight: bold;
    text-align: center;
    padding: 35% 1%;
    cursor: pointer;
    
    /* &:active {
        background-color: #bdbebd;
    } */

    &.what {
        &:hover {
            transition: .5s;
            opacity: 0.7;
        }
    }

    &.hidden-main {
        visibility: ${props => (props.select ? "visible" : "hidden")};

        &:hover {
            text-decoration: underline black;
            transition: .5s;
            opacity: 0.7;
            color: blue;

        } 
    }

    &.hidden-sub {
        visibility: ${props => (props.select ? "visible" : "hidden")};

        &:hover {
            text-decoration: underline #FFEFD5;
            background-color: #FFEFD5;
            transition: .5s;
            opacity: 0.7;
            color: red;
        } 
    }
`

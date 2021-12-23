import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import styled,{keyframes} from 'styled-components';
import dish from '../images/dish3-1.jpg';
import dishonly from '../images/dish-only-1.jpg'
import food1 from '../images/1.PNG';
import food2 from '../images/2.PNG';
import food3 from '../images/3.PNG';
import food4 from '../images/17.PNG';
import food5 from '../images/5.PNG';
import food6 from '../images/6.PNG';
import food7 from '../images/7.PNG';
import food8 from '../images/8.PNG';
import food9 from '../images/18.PNG';
import food10 from '../images/10.PNG';
import food11 from '../images/11.PNG';
import food12 from '../images/12.PNG';
import food13 from '../images/13.PNG';
import food14 from '../images/14.PNG';
import food15 from '../images/15.PNG';
import food16 from '../images/16.PNG';
import food17 from '../images/19.PNG';
import food18 from '../images/20.PNG';
import food19 from '../images/21.PNG';
import food20 from '../images/22.PNG';
import food21 from '../images/23.PNG';
import food22 from '../images/24.PNG';
import food23 from '../images/25.PNG';
import food24 from '../images/26.PNG';
import food25 from '../images/27.PNG';
import food26 from '../images/28.PNG';
import food27 from '../images/29.PNG';
import food28 from '../images/30.PNG';
import food29 from '../images/31.PNG';
import food30 from '../images/32.PNG';
import food31 from '../images/33.PNG';
import food32 from '../images/34.PNG';
import food33 from '../images/35.PNG';
import food34 from '../images/36.PNG';
import food35 from '../images/37.PNG';
import food36 from '../images/38.PNG';
import food37 from '../images/39.PNG';
import food38 from '../images/40.PNG';
import food39 from '../images/41.PNG';
import food40 from '../images/42.PNG';


// 1. webkit
// 2. @media
function MenuCup() {
    const allfoods = [
        { name: "치킨", src: food1}, { name: "돈까스", src: food2}, { name: "피자", src: food3}, { name: "족발", src: food4},
        { name: "스테이크", src: food5}, { name: "파스타", src: food6}, { name: "초밥", src: food7}, { name: "짜장면", src: food8},
        { name: "닭갈비", src: food9}, { name: "떡볶이", src: food10}, { name: "보쌈", src: food11}, { name: "쌀국수", src: food12},
        { name: "삼겹살구이", src: food13}, { name: "갈비찜", src: food14}, { name: "순대국밥", src: food15}, { name: "부대찌개", src: food16},
        { name: "햄버거", src: food17}, { name: "곱창", src: food18}, { name: "오므라이스", src: food19}, { name: "토스트", src: food20}, 
        { name: "카레라이스", src: food21}, { name: "닭발", src: food22}, { name: "김치볶음밥", src: food23}, { name: "훠궈", src: food24}, 
        { name: "함박스테이크", src: food25}, { name: "해물찜", src: food26}, { name: "회덮밥", src: food27}, { name: "야끼소바", src: food28}, 
        { name: "만두", src: food29}, { name: "우동", src: food30}, { name: "냉면", src: food31}, { name: "샤브샤브", src: food32},
        { name: "해물탕", src: food33}, { name: "김치찌개", src: food34}, { name: "김치찜", src: food35}, { name: "조개구이", src: food36}, 
        { name: "양꼬치", src: food37}, { name: "칼국수", src: food38}, { name: "훈제오리", src: food39}, { name: "짬뽕", src: food40},
    ]

    const [foods, setFoods] = useState([]);
    const [match, setMatch] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState();
    const [roundCnt, setRoundCnt] = useState();
    const [bracket, setBracket] = useState();
    const [th, setTh] = useState();
    const [thCnt, setThCnt] = useState();
    const [winner, setWinner] = useState();
    const [finished, setFinished] = useState();

    const history = useHistory();

    useEffect(() => {
        allfoods.sort(() => Math.random() - 0.5);
        setFoods(allfoods.slice(0, 16));
        setMatch([allfoods[0], allfoods[1]]);
        setRound('16강');
        setBracket(' (')
        setRoundCnt(1);
        setTh('/8)')
        setThCnt(1);
        setFinished(false);
    }, []);

    useEffect(() => {
        setThCnt(1);
        if (round === '결승전'){
            setThCnt();
        }
    }, [round]);

    const MenuCupHandler = food => () => {
        if (foods.length <= 2) {
            if (winners.length === 0) {
                setFinished(true);
                setRoundCnt(roundCnt + 1);
                setWinner(food);
            } else {
                let updatedFood = [...winners, food];
                setFoods(updatedFood);
                setMatch([updatedFood[0], updatedFood[1]]);
                setWinners([]);
                setRoundCnt(roundCnt + 1);
            }
        } else if (foods.length > 2) {
            setWinners([...winners, food]);
            setMatch([foods[2], foods[3]]);
            setFoods(foods.slice(2));
            setRoundCnt(roundCnt + 1);
        }

        if (roundCnt < 8) {
            setRound('16강');
            setThCnt(thCnt + 1);
        } else if (roundCnt >= 8 && roundCnt < 12) {
            setRound('8강');
            setTh('/4)');
            setThCnt(thCnt + 1);
        } else if (roundCnt >= 12 && roundCnt < 14) {
            setRound('4강');
            setTh('/2)');
            setThCnt(thCnt + 1);
        } else if (roundCnt >= 14 && roundCnt < 15) {
            setRound('결승전');
            setBracket();
            setTh();
            setThCnt();
        } else {
            setRound('우승 메뉴')
        }
    }

    return (
        <main role='main'>
            {finished ? 
                <Finished>
                    <div className='winner-wrap'>
                        <div className='img-wrap'>
                            <img className='winner-img' src={winner.src}/>
                        </div>
                        <img src={dish} />
                        <div className='winner-name'>{winner.name}</div>
                    </div>
                    <buton className='retry-button' onClick={()=>history.go()}>다시하기</buton>
                </Finished>
                :
                match.map(food => {
                    return (
                        <Processing>
                            <div className='round'>
                                <span style={{fontWeight:"bold"}}>{round}</span>{bracket}{thCnt}{th}
                            </div>
                            <div className='vs'>VS</div>
                            <div className='food-wrap' key={food.name} >
                                <div style={{position : "fixed"}}>
                                    <div style={{position : "fixed", cursor:"pointer"}} onClick={MenuCupHandler(food)}>
                                        <div className='img-wrap'>
                                            <img className='food-img' src={food.src} />
                                        </div>
                                        <img className='dish' src={dishonly} />
                                    </div>
                                    <div className='food-name'>{food.name}</div>
                                </div>
                            </div>
                        </Processing>
                    );
                })
            }
        </main>
    );
}

const Processing = styled.div`
    width: 40%;
    height: 90vh;
    float: left;
    justify-content: center;
    align-items: center;
    margin-left: 6.8%;

    .round {
        position: absolute;
        z-index: 2;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        font-size: 50px;
    }
    .round-th {
        position: absolute;
        z-index: 2;
        top: 25%;
        left: 50%;
        transform: translate(-50%);
        font-size: 40px;
    }
    .vs {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        font-size: 50px;
    }
    .food-wrap {
        position: relative;
    }
    .dish {
        margin: 3% 4%;
    }
    .img-wrap {
        position: absolute;
        background-color: black;
        overflow: hidden;
        width: 370px;
        height: 370px;
        margin-top: 20%;
        margin-left: 20.5%;
        border-radius: 70%;
    }
    .food-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .food-img:hover {
        transform: scale(1.1);
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;
    }
    .food-name {
        font-size: 80px;
        width: 80%;
        left: 50%;
        transform: translate(-50%);
        margin-left: 300px;
        margin-top: 570px;
        text-align: center;
    }
`

const blink = keyframes`
    0% {
        transform: scale(1)
    }
    70% {
        transform: scale(0.8)
    }
    100% {
        transform: scale(1.1)
    }
`
const flicker = keyframes`    
    0%, 10%, 35%, 57%, 80%, 90%, 100% {
        text-shadow:
        0 0 4px #000,
        0 0 11px #000,
        0 0 19px #000,
        0 0 40px #000,
        0 0 80px #000,
        0 0 90px #000,
        0 0 100px #000,
    }
    25%, 50%, 75% {        
        text-shadow: none;
    }    
`
const fadein = keyframes`
    from {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Finished = styled.div`
    position: fixed;
    left: 50%; 
    transform: translate(-50%);
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: 2%;

    .winner-wrap {
        position: relative;
        animation: ${blink} 1s 0.2s 3;
    }
    .img-wrap {
        width: 320px;
        height: 320px;
        position: absolute;
        margin-top: 9%;
        margin-left: 33.5%;
        border-radius: 70%;
        overflow: hidden;
    }
    .winner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .winner-name {
        position: absolute;
        font-size: 80px;
        left: 50%;
        transform: translate(-50%);
        text-shadow: 0 0 7px #000, 0 0 42px #fff;
        animation: ${flicker} 1.2s 3.5s infinite;
    }
    .retry-button {
        position: relative;
        top: 5%;
        left: 105%;
        font-size: 35px;
        color: brown;
        border: solid 3px brown;
        border-radius: 10px;
        padding: 5px 15px;
        background-color: white;
        animation: ${fadein} 5s;
        cursor: pointer;
    }
`
export default MenuCup;
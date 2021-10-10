import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dish from '../images/dish3.jpg';
import dishleft from '../images/dish-left.jpg';
import dishright from '../images/dish-right.jpg';
import dishonly from '../images/dish-only.jpg'
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


function MenuCup() {
    const allfoods = [
        { name: "치킨", src: food1 }, { name: "돈까스", src: food2 }, { name: "피자", src: food3 }, { name: "족발", src: food4 },
        { name: "스테이크", src: food5 }, { name: "파스타", src: food6 }, { name: "초밥", src: food7 }, { name: "짜장면", src: food8 },
        { name: "닭갈비", src: food9 }, { name: "떡볶이", src: food10 }, { name: "보쌈", src: food11 }, { name: "쌀국수", src: food12 },
        { name: "삼겹살구이", src: food13 }, { name: "갈비찜", src: food14 }, { name: "순대국밥", src: food15 }, { name: "부대찌개", src: food16 },
    ]

    const [foods, setFoods] = useState([]);
    const [match, setMatch] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState();
    const [count, setCount] = useState();
    const [winner, setWinner] = useState();
    const [finished, setFinished] = useState();

    useEffect(() => {
        allfoods.sort(() => Math.random() - 0.5);
        setFoods(allfoods);
        setMatch([allfoods[0], allfoods[1]]);
        setRound('16강');
        setCount(1);
        setFinished(false);
    }, []);

    const worldcupHandler = food => () => {
        if (foods.length <= 2) {
            if (winners.length === 0) {
                setFinished(true);
                setCount(count + 1);
                setWinner(food);
            } else {
                let updatedFood = [...winners, food];
                setFoods(updatedFood);
                setMatch([updatedFood[0], updatedFood[1]]);
                setWinners([]);
                setCount(count + 1);
            }
        } else if (foods.length > 2) {
            setWinners([...winners, food]);
            setMatch([foods[2], foods[3]]);
            setFoods(foods.slice(2));
            setCount(count + 1);
        }

        if (count < 8) {
            setRound('16강');
        } else if (count >= 8 && count < 12) {
            setRound('8강');
        } else if (count >= 12 && count < 14) {
            setRound('4강');
        } else if (count >= 14 && count < 15) {
            setRound('결승');
        } else {
            setRound('우승 메뉴')
        }
    }

    return (
        <main role='main'>
            {finished ? 
                <Finished>
                    <div className='winner-wrap'>
                        <div className='winner'><img className='winner-img' src={winner.src} /></div>
                        <img src={dish} />
                        <div className='winner-name'>{winner.name}</div>
                    </div>
                </Finished>
                :
                match.map(food => {
                    return (
                        <Processing>
                            <div className='round'>{round}</div>
                            <div className='food-wrap' key={food.name} onClick={worldcupHandler(food)}>
                                <div style={{position : "fixed"}}>
                                    <div style={{position : "fixed"}}>
                                        <div className='food'><img className='food-img' src={food.src} /></div>
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
    // display: flex;
    // flex-wrap: wrap;
    width: 40%;
    height: 100vh;
    float: left;
    justify-content: center;
    align-items: center;
    margin-left: 6.5%;
    // position: fixed;

    // & ~ & {
    //     margin: 0 0 0 700px;
    // }
    .round {
        position: absolute;
        z-index: 2;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        padding: 5px 30px;
        font-size: 50px;
    }
    .food-wrap {
        flex: 1;
        position: relative;
        text-align: center;
    }
    .dish {
        margin: 0% 3%;
    }
    .food {
        position: absolute;
        background-color: black;
        overflow: hidden;
        width: 375px;
        height: 375px;
        margin-top: 16.5%;
        margin-left: 18.5%;
        z-index: 100;
        border-radius: 70%;
        box-shadow: 10px 10px 13px black, -10px -10px 13px black;
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
        position: absolute;
        z-index: 101;
        font-size: 80px;
        width: 500px;
        left: 50%;
        transform: translate(-50%);
        margin-left: 300px;
        margin-top: 570px;
        text-align: center;
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
    }
    .winner {
        width: 327px;
        height: 327px;
        position: absolute;
        margin-top: 9%;
        margin-left: 33%;
        z-index: 100;
        border-radius: 70%;
        box-shadow: 10px 10px 13px black, -10px -10px 13px black;
        overflow: hidden;
    }
    .winner-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .winner-name {
        position: absolute;
        z-index: 3;
        font-size: 80px;
        left: 50%;
        transform: translate(-50%);
    }
`
export default MenuCup;
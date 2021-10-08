import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dish from '../images/dish3.jpg';
import dishleft from '../images/dish-left.jpg';
import dishright from '../images/dish-right.jpg';
import dishonly from '../images/dishonly.jpg'
import food1 from '../images/1.PNG';
import food2 from '../images/2.PNG';
import food3 from '../images/3.PNG';
import food4 from '../images/4.PNG';
import food5 from '../images/5.PNG';
import food6 from '../images/6.PNG';
import food7 from '../images/7.PNG';
import food8 from '../images/8.PNG';

// 1. 접시 안에 음식 넣기
// 2. 마지막 승자 css 비율 바꾸기

function Menu2() {
    const allfoods = [
        { name: "치킨", src: food1 }, { name: "돈까스", src: food2 }, { name: "피자", src: food3 }, { name: "부침개", src: food4 },
        { name: "스테이크", src: food5 }, { name: "파스타", src: food6 }, { name: "초밥", src: food7 }, { name: "짜장면", src: food8 },
    ]

    const [foods, setFoods] = useState([]);
    const [match, setMatch] = useState([]);
    const [winners, setWinners] = useState([]);
    const [round, setRound] = useState();
    const [count, setCount] = useState();
    const [winner, setWinner] = useState([]);
    const [finished, setFinished] = useState();

    useEffect(() => {
        allfoods.sort(() => Math.random() - 0.5);
        setFoods(allfoods);
        setMatch([allfoods[0], allfoods[1]]);
        setRound('8강');
        setCount(1);
        setFinished(false);
    }, []);

    const worldcupHandler = food => () => {
        if (foods.length <= 2) {
            if (winners.length === 0) {
                setFinished(true);
                setCount(count + 1);
                setWinner([food]);
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

        if (count < 4) {
            setRound('8강');
        } else if (count >= 4 && count < 6) {
            setRound('4강');
        } else if (count >= 6 && count < 7) {
            setRound('2강');
        } else {
            setRound('우승 메뉴')
        }
    }

    return (
        <main role='main'>
            {finished ?
                winner.map(food => {
                    console.log(food);
                    return (
                        <Finished>
                            <div className='winner'>
                                <div className='winner_food'><img className='winner_img' src={food.src} /></div>
                                <img src={dish} />
                            </div>
                        </Finished>
                    );
                })
                :
                match.map(food => {
                    return (
                        <Processing>
                            <div className='round'>{round}</div>
                            <div className='foods' key={food.name} onClick={worldcupHandler(food)}>
                                <div className='food'><img className='food_img' src={food.src} /></div>
                                <div className='food_name'>{food.name}</div>
                                <img src={dishonly} />
                            </div>
                        </Processing>
                    );
                })}
        </main>
    );
}

const Processing = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    // align-items: center;
    // justify-content: center;
    // align-container: flex-start;
    // position: fixed;
    .round {
        position: absolute;
        z-index: 2;
        top: 10%;
        left: 50%;
        transform: translate(-50%);
        padding: 5px 30px;
        font-size: 50px;
    }
    .foods {
        flex: 1;
        position: relative;
    }
    .food {
        position: absolute;
        background-color: black;
        overflow: hidden;
        width: 375px;
        height: 375px;
        margin-top: 6%;
        margin-left: 6%;
        z-index: 100;
        border-radius: 70%;
        box-shadow: 10px 10px 13px black, -10px -10px 13px black;
    }
    .food_img {
        width: 100%;
        height:100%;
        // object-fit: cover;
    }
    .food_img: hover {
        transform: scale(1.1);
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;
    }
    .food_name {
        position: absolute;
        z-index: 3;
        bottom: 3%;
        font-size: 80px;
        left: 50%;
        transform: translate(-50%);
    }
`
const Finished = styled.div`
    position: fixed;
    left: 50%; 
    transform: translate(-50%);
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    .winner {
        position: relative;
    }
    .winner_food{
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
    .winner_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export default Menu2;
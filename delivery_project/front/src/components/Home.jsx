import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import dish from '../images/dish3-1.jpg';
import food1 from '../images/1.PNG';
import food2 from '../images/2.PNG';
import food3 from '../images/3.PNG';
import food4 from '../images/4.PNG';
import food5 from '../images/5.PNG'; 
import food6 from '../images/6.PNG';
import food7 from '../images/7.PNG';
import food8 from '../images/8.PNG';
import food9 from '../images/9.PNG';
import menu from '../images/menu.jpg';

// 질문1: 스무스하게 넘어가기 (fade in, out) => useEffect return에서는 실행불가. 

function Home() {

    let imgArray = [food1, food2, food3, food4, food5, food6, food7, food8, food9];
    const [foods, setFoods] = useState(food1);
    const history = useHistory();

    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*8);
            setFoods(imgArray[imgNum]);
            setTimeout(autoImage, 1000);
        }
        autoImage();
    }, []);

    return (
        <main role="main">
            <Table>
                <Dish>
                    <Foods>
                        <FoodImgs alt="음식" src={foods} />
                    </Foods>
                    <img alt="접시" src={dish}/>
                </Dish>
                <Menu src={menu} onClick={() => {history.push('/menu');}}/>
            </Table>    
        </main>
    )
}

const Table = styled.div`
    position: fixed;
    left:50%; 
    transform: translate(-50%);
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Dish = styled.div`
    position: relative;
    margin: 1% auto auto auto;
`

const Foods = styled.div`
    width: 320px;
    height: 320px;
    position: absolute;
    margin-top: 9%;
    margin-left: 33.5%;
    z-index: 100;
    border-radius: 70%;
    /* box-shadow: 10px 10px 13px black, -10px -10px 13px black; */
    overflow: hidden;
`

const FoodImgs = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Menu = styled.img`
    position: absolute;
    margin-left: 11%;
    margin-top: 1.1%;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.4s;
        cursor: pointer;
    }
`

export default Home;
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import dish from '../images/dish3-1.jpg';
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
import menu from '../images/menu.jpg';

// 질문1: 스무스하게 넘어가기 (fade in, out) => useEffect return에서는 실행불가. 

function Home() {

    let imgArray = [
        food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, 
        food11, food12, food13, food14, food15, food16, food17, food18, food19, food20, 
        food21, food22, food23, food24, food25, food26, food27, food28, food29, food30, 
        food31, food32, food33, food34, food35, food36, food37, food38, food39, food40
    ];
    const [foods, setFoods] = useState(food1);
    const history = useHistory();

    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*39);
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
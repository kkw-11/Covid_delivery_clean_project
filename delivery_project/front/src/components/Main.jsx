import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import dish from '../images/dish3.jpg';
import food1 from '../images/1.PNG';
import food2 from '../images/2.PNG';
import food3 from '../images/3.PNG';
import food4 from '../images/4.PNG';
import food5 from '../images/5.PNG'; 
import food6 from '../images/6.PNG';
import food7 from '../images/7.PNG';
import food8 from '../images/8.PNG';
import food9 from '../images/9.PNG';
import menu from '../images/menu11.jpg';

// 질문1: 스무스하게 넘어가기 (fade in, out) => useEffect return에서는 실행불가. 

function Main() {

    let imgArray = [food1, food2, food3, food4, food5, food6, food7, food8, food9];
    const [foods, setFoods] = useState(food1);
    const history = useHistory();

    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*8);
            setFoods(imgArray[imgNum]);
            setTimeout(autoImage, 3000);
        }
        autoImage();
    }, []);

    return (
        <main role="main">
            <Table>
                <Dish>
                    <Foods><img alt="음식" src={foods} style={{width:"100%", height:"100%", objectFit:"cover"}}/></Foods>
                    <img alt="접시" src={dish}/>
                </Dish>
                <Menu src={menu} onClick={() => {history.push('/intro');}}/>
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
`

const Foods = styled.div`
    width: 327px;
    height: 327px;
    position: absolute;
    margin-top: 9%;
    margin-left: 33%;
    z-index: 100;
    border-radius: 70%;
    box-shadow: 10px 10px 13px black, -10px -10px 13px black;
    overflow: hidden;
`

const Menu = styled.img`
    position: absolute;
    margin-left: 10%;
    margin-top: 2%;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

export default Main;
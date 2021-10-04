import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import dish from '../images/dish3.jpg';
import food1 from '../images/1.jfif';
import food2 from '../images/2.jfif';
import food3 from '../images/3.jfif';
import food4 from '../images/4.jfif';
import food5 from '../images/5.jfif'; // 질문2: 서버 배포 시, url 이용하나.
import food6 from '../images/6.jfif';
import food7 from '../images/7.jfif';
import food8 from '../images/8.jfif';
import food9 from '../images/9.jfif';
import food10 from '../images/10.jfif';
import menu from '../images/menu11.jpg';

// 질문1: 스무스하게 넘어가기 (fade in, out) => useEffect return에서는 실행불가. 

export default function Main() {

    let imgArray = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10];
    const [foods, setFoods] = useState(food1);
    const history = useHistory();

    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*9);
            setFoods(imgArray[imgNum]);
            setTimeout(autoImage, 3000);
        }
        autoImage();
    }, []);

    return (
        <main role="main">
            <GlobalStyles/>
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
        transition-duration: 0.4s;
        cursor: pointer;
    }
`
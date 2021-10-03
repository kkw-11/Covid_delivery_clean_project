import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import dish from '../images/dish.jpg';
import food1 from '../images/1.jfif';
import food2 from '../images/2.jfif';
import food3 from '../images/3.jfif';
import food4 from '../images/4.jfif';
import food5 from '../images/5.jfif'; // 서버 배포 시, url 이용해야하는지 코치님꼐 여쭤보기.
import food6 from '../images/6.jfif';
import food7 from '../images/7.jfif';
import food8 from '../images/8.jfif';
import food9 from '../images/9.jfif';
import food10 from '../images/10.jfif';

// 1. 스무스하게 넘어가기 (fade in, out) 
// 2. 버튼 기능 
// 3. absolute > % => 왜 고정이 안됨..
// 4. table img border 경계 희미하게 => 그림자 주는 방법밖에..
// 5. food img border 전체 경게 희미하게 , 그림자를 경계와 비슷한 색으로 

export default function Main() {
    let imgArray = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10];
    const [foods, setFoods] = useState(food1)
    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*9);  
            setFoods(imgArray[imgNum])
            setTimeout(autoImage, 3000);
        }
        autoImage();
        // return fade out 효과 
    }, [])

    return (
        <main role="main">
            <GlobalStyles/>
            <article className="intro">
                <div>
                    <h2>
                        위생에 더 예민해진 코로나 시대,
                        더 깨끗한 밥상을 위해 클린한끼가 함께합니다!
                    </h2>
                </div>
            </article>
            <ShowImage>
                <Dish>
                    <Foods><img className="foods" alt="음식" src={foods} style={{width:"100%", height:"100%", objectFit:"cover"}}/></Foods>
                    <img src={dish} alt="접시" style={{}}/>
                </Dish>
            </ShowImage>
            <Button>메뉴판</Button>
        </main>
    )
}

const ShowImage = styled.article``

const Dish = styled.div`
    position: relative ;
    border: red solid 10px;
    margin-left: 25%;
`
const Foods = styled.div`
    width: 550px;
    height: 550px;
    box-sizing: box-border;
    position: absolute;
    margin-top: 10%;
    margin-left: 37%;
    z-index: 100;
    border-radius: 70%;
    box-shadow: 0 15px 10px rgba(0,0,0, .5);
    overflow: hidden;
`
const Button = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    background-color: black;
    color: white;
    border: none;
    border-radius: 70px;
    font-size: 200px;
    // font-family: 'Nanum Pen Script', cursive;
    text-align: center;
    padding: 50px 50px;

`
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
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

export default function Main() {
    let imgArray = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10];
    const [foods, setFoods] = useState(food1)
    useEffect(() => {
        const autoImage = () => { 
            let imgNum = Math.round(Math.random()*9);  
            setFoods(imgArray[imgNum])
            console.log(foods);
            setTimeout(autoImage, 3000);
        }
        autoImage();
    }, [])

    return (
        <main role="main">
            <article className="intro">
                <div>
                    <h2>
                        위생에 더 예민해진 코로나 시대,
                        더 깨끗한 밥상을 위해 클린한끼가 함께합니다!
                    </h2>
                </div>
            </article>
            <ShowImage>
                <Table>
                    <Foods>
                        <img className="foods" alt="음식" src={foods} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                    </Foods>
                    <img src={dish} alt="접시" style={{position:"relative", marginLeft:"25%"}}></img>
                </Table>
            </ShowImage>
        </main>
    )
}

const ShowImage = styled.article``

const Table = styled.div`
    position: relative;
`
const Foods = styled.div`
    width: 850px;
    height: 850px;
    box-sizing: box-border;
    position: absolute;
    margin-top: 180px;
    margin-left: 1150px;
    z-index: 100;
    border-radius: 70%;
    overflow: hidden;
`
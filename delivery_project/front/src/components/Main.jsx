import React, {userEffect, userState} from 'react';
import dish from '../images/1364668.jpg';

export default function Main() {
    let imgArray = new Array(); 
    imgArray[0]="../images/1.png"; 
    imgArray[1]="../images2.png";
    imgArray[2]="../images3.png"; 
    imgArray[3]="../images4.png"; 
    imgArray[4]="../images5.png"; 
    const autoImage = () => { 
        var imgNum = Math.round(Math.random()*3); 
        var objImg = document.getElementById("introimg"); 
        objImg.src = imgArray[imgNum]; 
        setTimeout(autoImage,5000); 
    }
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
            <article classname="slide">
                <div>
                    <img src={dish} alt="접시 이미지" style={{width:1500, height:1000, objectFit:"cover"}}></img>
                    <button onclick={autoImage}>이미지 자동변환</button>
                </div>
            </article>
        </main>
    )
}
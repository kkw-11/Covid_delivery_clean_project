import React, {userEffect, userState} from 'react';
import dish from '../images/1364668.jpg';

export default function Main() {
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
                </div>
            </article>
        </main>
    )
}
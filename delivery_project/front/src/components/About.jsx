import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import among1 from "../images/among1.jpg"
import among2 from "../images/among2.jpg"
import among3 from "../images/among3.jpg"
import among4 from "../images/among4.jpg"
import among5 from "../images/among5.jpg"
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team5.jpg';
import team6 from '../images/team6.jpg';
import team7 from '../images/team7.jpg';
import team8 from '../images/team8.jpg';
import team9 from '../images/team9.jpg';
import team10 from '../images/team10.jpg';


const Kaky = ({ isKaky, setIsKaky }) => {
    const [hover, setHover] = useState(false)

    function handleMouseOver() {setHover(true)}
    function handleMouseLeave() {setHover(false)}

    return (
        <Card color="red">
            <Image 
                src={among1} 
                wrapped ui={false} 
                onClick={() => setIsKaky(!isKaky)}
                style={{ 
                    ...(hover && {
                        transform: "scale(0.9)",
                        opacity: "0.7",
                        cursor: "pointer",
                        transition: "0.3s"
                    })
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            <Card.Content>
                <Card.Header>강경모</Card.Header>
                <Card.Meta>
                    <span className='meta'>팀장, 프론트엔드</span>
                </Card.Meta>
            </Card.Content>
            {isKaky ? (
                <>
                    <Card.Content>
                        <Card.Description>
                        부족한 팀장이었지만 유능한 팀원들과 함께 프로젝트를 즐기고 멋지게 만들 수 있어서 너무 행복했습니다. 클린한끼에 어울리는 아이디어들을 많이 제공하였고, SVG 지도에서 사용자가 경험하고 즐길 수 있도록 UI/UX 부분에서 많은 고민을 했습니다. 지나온 길은 한의사였지만 이제는 개발자로서의 길을 걸어가고 있습니다. 블로그도 많이 보러와주세요!
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://kaky.tistory.com/2" target="_blank">
                            <Icon name='blogger' />
                            엉뚱한 한의사의 코딩 배우기
                        </a>
                    </Card.Content>
                </>
            ) : (
                null
            )}
        </Card>
    )
}

const Steve = ({isSteve, setIsSteve}) => {
    const [hover, setHover] = useState(false)

    function handleMouseOver() {setHover(true)}
    function handleMouseLeave() {setHover(false)}

    return (
        <Card color="blue" >
            <Image 
                src={among2} 
                wrapped ui={false} 
                onClick={() => setIsSteve(!isSteve)}
                style={{ 
                    ...(hover && {
                        transform: "scale(0.9)",
                        opacity: "0.7",
                        cursor: "pointer",
                        transition: "0.3s"
                    })
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            <Card.Content>
                <Card.Header>김기원</Card.Header>
                <Card.Meta>
                    <span className='meta'>기획, 백엔드</span>
                </Card.Meta>
            </Card.Content>
            {isSteve ? (
                <>
                    <Card.Content>
                        <Card.Description>
                        알고리즘을 좋아하고 코딩이 취미인 백엔드 개발자입니다. 클린한끼에서는 기획과 백엔드를 맡았습니다. 미래에는 서버개발자에게 도움을 주고 서버기술 발전을 위한 SW를 개발하고 싶습니다.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/kkw-11" target="_blank">
                            <Icon name='blogger' />
                            Git Hub 주소
                        </a>
                    </Card.Content>
                </>
            ) : (
                null
            )}
        </Card>
    )
}

const Ellie = ({isEllie, setIsEllie}) => {
    const [hover, setHover] = useState(false)

    function handleMouseOver() {setHover(true)}
    function handleMouseLeave() {setHover(false)}

    return (
        <Card color="violet" >
            <Image 
                src={among5} 
                wrapped ui={false} 
                onClick={() => setIsEllie(!isEllie)}
                style={{ 
                    ...(hover && {
                        transform: "scale(0.9)",
                        opacity: "0.7",
                        cursor: "pointer",
                        transition: "0.3s"
                    })
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            <Card.Content>
                <Card.Header>최윤성</Card.Header>
                <Card.Meta>
                    <span className='meta'>백엔드, 데이터분석</span>
                </Card.Meta>
            </Card.Content>
            {isEllie ? (
                <>
                    <Card.Content>
                        <Card.Description>
                        코딩이 제일 재미있는, 사랑스러운 딸 아이 둘의 엄마이기도한 개발자 최윤성입니다. 클린한끼 팀에서는 데이터 분석과 데이터 베이스를 맡았습니다.  제 딸들이 살아갈 세상을 더 좋고 편리하게 만들기 위해 노력하고, 미래에는 미국 실리콘밸리로 가서 아이들에게 무한한 가능성을 보여줄거예요. 
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="http://www.github.com/ysyschoi" target="_blank">
                            <Icon name='blogger' />
                            Git Hub 주소
                        </a>
                    </Card.Content>
                </>
            ) : (
                null
            )}
        </Card>
    )
}

const Noelle = ({isNoelle, setIsNoelle}) => {
    const [hover, setHover] = useState(false)

    function handleMouseOver() {setHover(true)}
    function handleMouseLeave() {setHover(false)}

    return (
        <Card color="green" >
            <Image 
                src={among3} 
                wrapped ui={false} 
                onClick={() => setIsNoelle(!isNoelle)}
                style={{ 
                    ...(hover && {
                        transform: "scale(0.9)",
                        opacity: "0.7",
                        cursor: "pointer",
                        transition: "0.3s"
                    })
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            
            <Card.Content>
                <Card.Header>고예림</Card.Header>
                <Card.Meta>
                    <span className='meta'>프론트엔드, 디자인</span>
                </Card.Meta>
            </Card.Content>
            {isNoelle ? (
                <>
                    <Card.Content>
                        <Card.Description>
                        이번 프로젝트에서 프론트엔드와 디자인을 담당했던 웹 개발자 고예림입니다. 웹 프로젝트를 진행하면서 CSS가 너무 많을 시, 서로의 속성을 충돌해 제대로 기능하지 못한다는 것을 알게되면서 CSS는 최소한으로만 구현해야한다는 것을 배웠습니다. 원하는 웹 사이트를 구현하기 위해, 알고리즘과 CSS기초에 힘쓰는 개발자가 되겠습니다.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/YeahLim" target="_blank">
                            <Icon name='blogger' />
                            Git Hub 주소
                        </a>
                    </Card.Content>
                </>
            ) : (
                null
            )}
        </Card>
    )
}

const June = ({isJune, setIsJune}) => {
    const [hover, setHover] = useState(false)

    function handleMouseOver() {setHover(true)}
    function handleMouseLeave() {setHover(false)}

    return (
        <Card color="yellow" >
            <Image 
                src={among4} 
                wrapped ui={false} 
                onClick={() => setIsJune(!isJune)}
                style={{ 
                    ...(hover && {
                        transform: "scale(0.9)",
                        opacity: "0.7",
                        cursor: "pointer",
                        transition: "0.3s"
                    })
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            />
            <Card.Content>
                <Card.Header>민경준</Card.Header>
                <Card.Meta>
                    <span className='meta'>풀스택</span>
                </Card.Meta>
            </Card.Content>
            {isJune ? (
                <>
                    <Card.Content>
                        <Card.Description>
                        백앤드, 데이터 분야로 취업을 희망하는 개발자로 현재 그 목표에 도달하도록 열심히 성장하고 있습니다. 이번 프로젝트에서는 프론트와 백앤드를 작업하였는데, 가장 의미있었던 부분은 카카오맵 API를 활용하여 지도를 구현하고 현재 위치와 위생 가게의 거리를 계산하는 기능이었습니다. 최근에는 알고리즘 문제 푸는것에 흥미를 느끼고 있으며, 미래에는 제가 머리속으로 생각하는 부분들을 막힘없이 코드로 구현하는 개발자가 되는 것이 꿈입니다.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/sprudwns33" target="_blank">
                            <Icon name='blogger' />
                            Git Hub 주소
                        </a>
                    </Card.Content>
                </>
            ) : (
                null
            )}
        </Card>
    )
}

const About = () => {
    const [isKaky, setIsKaky] = useState(false)
    const [isSteve, setIsSteve] = useState(false)
    const [isEllie, setIsEllie] = useState(false)
    const [isNoelle, setIsNoelle] = useState(false)
    const [isJune, setIsJune] = useState(false)

    useEffect(() => {
        let slideCount = 0

        const handleSlide = () => {
            console.log(slideCount)
            

            document.querySelector(".slider").style.transform = `translate(${-30 * slideCount}vw)`;
            const slideLength = document.querySelectorAll(".slide").length
            console.log(slideLength)
            slideCount += 1
            if (slideCount == (slideLength - 2)) {
                slideCount = 0
            }

            setTimeout(handleSlide, 2000)
        }
        handleSlide();

    
    }, [])
    

    return (
        <>
            <CardWrap>
                <Kaky isKaky={isKaky} setIsKaky={setIsKaky}/>
                <Steve isSteve={isSteve} setIsSteve={setIsSteve}/>
                <Ellie isEllie={isEllie} setIsEllie={setIsEllie}/>
                <Noelle isNoelle={isNoelle} setIsNoelle={setIsNoelle}/>
                <June isJune={isJune} setIsJune={setIsJune}/>
            </CardWrap>
            
            <SlideWrap className="slider">
                <SlideList className="slide">
                    <img src={team2} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team3} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team4} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team5} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team6} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team7} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team8} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team9} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
                <SlideList className="slide">
                    <img src={team10} alt="" style={{width: "100%", height: "45vh", borderRadius: "10px"}} />
                </SlideList>
            </SlideWrap>
        </>
    )
}

export default About;


const CardWrap = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
`

const SlideWrap = styled.div`
    margin: 1% auto;
    width: 1000vw;
    transition: transform ease 1s;
    transform: 0vw;
`

const SlideList = styled.span`
    width: 30vw;
    float: left;

    + span {
        margin-left: 5px;
    }
`
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import among1 from "../images/among1.jpg"
import among2 from "../images/among2.jpg"
import among3 from "../images/among3.jpg"
import among4 from "../images/among4.jpg"
import among5 from "../images/among5.jpg"
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';


const Kaky = ({ isKaky, setIsKaky }) => {
    const languages = ["파이썬", "HTML/CSS", "자바스크립트", ""]

    return (
        <Card color="red">
            <Image 
                src={among1} 
                wrapped ui={false} 
                onClick={() => setIsKaky(!isKaky)}
                style={{ cursor: "pointer", transition: ".5s"}}
            />
            <Card.Content>
                <Card.Header>강경모</Card.Header>
                <Card.Meta>
                    <span className='meta'>프론트엔드</span>
                </Card.Meta>
    
                {/* 엘리스 실습 내용 */}
                <LanguagesWrapper>
                    {languages.map((lang, idx) => {
                        return (
                            <Language 
                                key={`${lang}-${idx}`}
                                lang={lang}
                            >
                                {lang}
                            </Language>
                        )
                    })}
                </LanguagesWrapper>

            </Card.Content>
            {isKaky ? (
                <>
                    <Card.Content>
                        <Card.Description>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
    return (
        <Card color="blue" >
            <Image 
                src={among2} 
                wrapped ui={false} 
                onClick={() => setIsSteve(!isSteve)}
                style={{ cursor: "pointer", transition: ".5s"}}
            />
            <Card.Content>
                <Card.Header>김기원</Card.Header>
                <Card.Meta>
                    <span className='meta'>백엔드</span>
                </Card.Meta>
            </Card.Content>
            {isSteve ? (
                <>
                    <Card.Content>
                        <Card.Description>
                            자기소개글
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='blogger' />
                            링크 주소
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
    return (
        <Card color="violet" >
            <Image 
                src={among5} 
                wrapped ui={false} 
                onClick={() => setIsEllie(!isEllie)}
                style={{ cursor: "pointer", transition: ".5s"}}
            />
            <Card.Content>
                <Card.Header>최윤성</Card.Header>
                <Card.Meta>
                    <span className='meta'>백엔드</span>
                </Card.Meta>
            </Card.Content>
            {isEllie ? (
                <>
                    <Card.Content>
                        <Card.Description>
                            자기소개글
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='blogger' />
                            링크 주소
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
    return (
        <Card color="olive" >
            <Image 
                src={among3} 
                wrapped ui={false} 
                onClick={() => setIsNoelle(!isNoelle)}
                style={{ cursor: "pointer", transition: ".5s"}}
            />
            <Card.Content>
                <Card.Header>고예림</Card.Header>
                <Card.Meta>
                    <span className='meta'>프론트엔드</span>
                </Card.Meta>
            </Card.Content>
            {isNoelle ? (
                <>
                    <Card.Content>
                        <Card.Description>
                            자기소개글
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='blogger' />
                            링크 주소
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
    return (
        <Card color="yellow" >
            <Image 
                src={among4} 
                wrapped ui={false} 
                onClick={() => setIsJune(!isJune)}
                style={{ cursor: "pointer", transition: ".5s"}}
            />
            <Card.Content>
                <Card.Header>민경준</Card.Header>
                <Card.Meta>
                    <span className='meta'>백엔드</span>
                </Card.Meta>
            </Card.Content>
            {isJune ? (
                <>
                    <Card.Content>
                        <Card.Description>
                            자기소개글
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='blogger' />
                            링크 주소
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

    return (
        <CardWrap>
            <Kaky isKaky={isKaky} setIsKaky={setIsKaky}/>
            <Steve isSteve={isSteve} setIsSteve={setIsSteve}/>
            <Ellie isEllie={isEllie} setIsEllie={setIsEllie}/>
            <Noelle isNoelle={isNoelle} setIsNoelle={setIsNoelle}/>
            <June isJune={isJune} setIsJune={setIsJune}/>
            
        </CardWrap>
    )
}

export default About;


const CardWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
`

//엘리스 실습 내용
const LanguagesWrapper = styled.div`
    display: flex;
    margin-top: 24px;
`

function getColorByLang(lang) {
    if (lang === "파이썬") return "#477DB1"
    if (lang === "HTML/CSS") return "#DE561D"
    if (lang === "자바스크립트") return "#F3CB39"
}

const Language = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    color: ${props => getColorByLang(props.lang)};
    position: relative;
    padding: 4px 6px;
    
    + p {
        margin-left: 5%;
    }
    
    ::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${props => getColorByLang(props.lang)};
        opacity: 0.2;
        border-radius: 2px;
    }
`
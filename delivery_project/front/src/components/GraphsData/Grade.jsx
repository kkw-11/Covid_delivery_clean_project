import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from 'react-modal';
import styled from 'styled-components';
import gradeStandard from '../../images/gradestandard.png';
import loading from '../../images/loading1.gif';

import 'semantic-ui-css/semantic.min.css';
import { Progress, Button } from 'semantic-ui-react';
import { BACKEND_URL } from "../../env";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Grade = ({ area, grade }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <StyleGrade>
            {grade === null ? (
                <img src={loading} width={350} height={600}></img>
            ) : (<>
                <div style={{ width: '100%', textAlign: 'center', display: 'inline-block', padding: '5vh' }}>
                    <Button basic color="brown" size='mini' onClick={() => { setIsOpen(true) }}>식약처 위생인증 기준</Button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => { setIsOpen(false) }}
                        style={customStyles}
                        contentLabel="test"
                    >
                        <img src={gradeStandard}></img>
                    </Modal>
                </div>
                <CardContainer>
                    <CardBox>
                        <p style={{ color: "#db2828", lineHeight: '8vh' }}>매우 우수</p>
                        <p>{grade.data[area]['매우우수']}</p>
                        <Progress
                            active
                            color={"red"}
                            style={{ margin: "4% auto", width: "80%" }}
                            value={grade.data[area]['매우우수']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                    <CardBox>
                        <p style={{ color: "#21ba45", lineHeight: '8vh' }}>우수</p>
                        <p>{grade.data[area]['우수']}</p>
                        <Progress
                            active
                            color={"green"}
                            style={{ margin: "4% auto", width: "80%" }}
                            value={grade.data[area]['우수']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                    <CardBox>
                        <p style={{ color: "#f2c037", lineHeight: '8vh' }}>좋음</p>
                        <p>{grade.data[area]['좋음']}</p>
                        <Progress
                            active
                            color={"yellow"}
                            style={{ margin: "4% auto", width: "80%" }}
                            value={grade.data[area]['좋음']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                </CardContainer>
            </>)}
        </StyleGrade>
    )
}

export default Grade;

const StyleGrade = styled.div`
    margin: 2% 2% 10% 2%;
    height: 98vh;
    background-color: transparent;
    box-shadow: 2px 2px 2px 1px #bdbebd;
`

const CardContainer = styled.div`
    display: block;
`
const CardBox = styled.div`
    background-color: transparent;
    box-shadow: 2px 2px 2px 1px #bdbebd;
    border-radius: 3px;
    width: 80%;
    margin: 0% auto 15%;
    padding: 10px;

    > p {
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0px;
    }
`
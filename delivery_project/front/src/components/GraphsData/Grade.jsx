import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from 'react-modal';
import styled from 'styled-components';
import gradeStandard from '../../images/gradestandard.png';
import loading from '../../images/25523-wok-pan-food-fry-on-fire.gif';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { Progress } from 'semantic-ui-react';
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

    const CardContainer = styled.div`
        display: block;
    `
    const CardBox = styled.div`
        background-color: white;
        box-shadow: 1px 1px 1px 1px #bdbebd;
        border-radius: 3px;
        width: 80%;
        margin: 0% auto 15%;
        padding: 10px;

        > p {
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 0px;
        }
    `

    return (
        <div>
            {grade === null ? (
                <img src={loading} width={400} height={500}></img>
            ) : (<>
                <div style={{ width: '100%', textAlign: 'center', display: 'inline-block', padding: '3vh' }}>
                    <Button variant="info" onClick={() => { setIsOpen(true) }}>식약처 위생인증 기준</Button>
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
                        <p style={{ color: "#db2828", lineHeight: '7vh' }}>매우 우수</p>
                        <p>{grade.data[area]['매우우수']}</p>
                        <Progress
                            active
                            color={"red"}
                            style={{ margin: "8% auto", width: "80%" }}
                            value={grade.data[area]['매우우수']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                    <CardBox>
                        <p style={{ color: "#21ba45", lineHeight: '7vh' }}>우수</p>
                        <p>{grade.data[area]['우수']}</p>
                        <Progress
                            active
                            color={"green"}
                            style={{ margin: "8% auto", width: "80%" }}
                            value={grade.data[area]['우수']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                    <CardBox>
                        <p style={{ color: "#f2c037", lineHeight: '7vh' }}>좋음</p>
                        <p>{grade.data[area]['좋음']}</p>
                        <Progress
                            active
                            color={"yellow"}
                            style={{ margin: "8% auto", width: "80%" }}
                            value={grade.data[area]['좋음']}
                            total={grade.data[area]['매우우수'] + grade.data[area]['우수'] + grade.data[area]['좋음']}
                        />
                    </CardBox>
                </CardContainer>
            </>)}
        </div>
    )
}

export default Grade;
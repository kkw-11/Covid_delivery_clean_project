import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Modal from 'react-modal';
import gradeStandard from '../../images/gradestandard.png';

import 'bootstrap/dist/css/bootstrap.css';

import { BACKEND_URL } from "../../env";
import { ProgressBar } from 'react-bootstrap';

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

const Grade = ({ area }) => {

    const [grade, setGrade] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${BACKEND_URL}/regioncount`);
            setGrade(response.data);
        };
        fetchData()
    }, []);

    return (
        <div>
            {grade === null ? (
                <p>Loading...</p>
            ) : (<>
            <div style={{ height: '10vh', textAlign:'-webkit-center', lineHeight:'20vh', marginTop: '50%' }}>
                    <div style={{ width:'100%', textAlign:'center', display:'inline-block', lineHeight:'2vh'}}>
                        <button onClick={() => {setIsOpen(true)}}>식약처 위생인증 기준</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => {setIsOpen(false)}}
                            style={customStyles}
                            contentLabel="test"
                        ><button onClick={() => {setIsOpen(false)}}>X</button>
                        <img src={gradeStandard}></img>
                        </Modal>
                    </div>
                    <div style={{ width:'100%', textAlign:'center', display:'inline-block', lineHeight:'2vh'}}>
                        매우 우수<br></br>{grade.data[area]['매우우수']}
                        <ProgressBar animated now={grade.data[area]['매우우수']/(grade.data[area]['매우우수']+grade.data[area]['우수']+grade.data[area]['좋음'])*100} variant="success"/>
                    </div>
                    <div style={{ width:'100%', textAlign:'center', display:'inline-block', lineHeight:'2vh'}}>
                        우수<br></br>{grade.data[area]['우수']}<br></br>
                        <ProgressBar animated now={grade.data[area]['우수']/(grade.data[area]['매우우수']+grade.data[area]['우수']+grade.data[area]['좋음'])*100} variant="warning"/>
                    </div>
                    <div style={{ width:'100%', textAlign:'center', display:'inline-block', lineHeight:'2vh'}}>
                        좋음<br></br>{grade.data[area]['좋음']}
                        <ProgressBar animated now={grade.data[area]['좋음']/(grade.data[area]['매우우수']+grade.data[area]['우수']+grade.data[area]['좋음'])*100} variant="danger"/>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Grade;
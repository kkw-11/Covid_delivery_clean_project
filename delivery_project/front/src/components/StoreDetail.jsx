/* global kakao */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BACKEND_URL } from "../env";
import axios from "axios";
import Pagination from "react-js-pagination";

const StoreDetail = () => {
    const area = useLocation();

    const [page, setPage] = useState(1); 
    const [allstorelist, setAllstorelist] = useState(null);
    const [selectstorelist, setSelectstorelist] = useState(null);
    const [showstorelist, setShowstorelist] = useState(null);
    
    const handlePageChange = (page) => { 
        setShowstorelist(selectstorelist.slice((page-1)*20, page*20));
        setPage(page); 
    };
    const [storeaddr, setStoreaddr] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${BACKEND_URL}/allstorelist`);
            setAllstorelist(response.data);
            setSelectstorelist(response.data.data[area.state]);
            setShowstorelist(response.data.data[area.state].slice(0,20))
        };
        fetchData()

        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
    }, []);

    const StoreTable = () => {
        return (
            <>
            <table style={{ border: '1px solid black' }}>
                <th>가게이름</th>
                <th>등급</th>
                {showstorelist === null ? (<p>loading</p>) :
                    (
                        showstorelist.map((row) => {
                            return (
                                <>
                                <tr>
                                    <td onClick={() => setStoreaddr(row[2])}>{row[0]}</td>
                                    <td>{row[1]}</td>
                                </tr>
                                </>
                            );
                        })
                        )}
            </table>
            </>
        );
    }


    return (
        <WrapOfMainWrap>
            <MainWrap>
                <GirdContainer>
                    <div>
                        {area.state}의 위생가게 리스트입니다.
                        {allstorelist === null || selectstorelist === null || showstorelist === null ? (<p>loading</p>) : (
                            <>
                                <StoreTable/>
                                <Pagination
                                activePage={page} itemsCountPerPage={20} totalItemsCount={selectstorelist.length} pageRangeDisplayed={5} prevPageText={"‹"} nextPageText={"›"} onChange={handlePageChange} />
                            </>
                        )}
                    </div>
                    <div style={{ borderLeft: '1px solid black' }}>
                        {storeaddr}
                        <div id="map" style={{width:"500px", height:"400px"}}></div> 
                    </div>
                </GirdContainer>
            </MainWrap>
        </WrapOfMainWrap>
    )
}

const WrapOfMainWrap = styled.div`
  border: 3px solid;
  margin: 2% 2%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-53%, -50%);
`

const MainWrap = styled.div`
  border: 4px solid;
  margin: 0.5% 0.5%;
  padding: 40px;
`

const GirdContainer = styled.div`
    display: grid;
    width: 70vw;
    height: 70vh;
    grid-template-columns: 50% 50%;
    background-color: rgb(255, 255, 255);
`

export default StoreDetail;
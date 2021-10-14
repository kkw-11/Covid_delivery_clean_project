/* global kakao */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BACKEND_URL } from "../env";
import axios from "axios";
import Pagination from "react-js-pagination";

const StoreDetail = () => {
    const area = useLocation();
    const initsearch = area.state === '전국' ? '' : area.state;

    const [page, setPage] = useState(1);
    const [allstorelist, setAllstorelist] = useState(null);
    const [selectstorelist, setSelectstorelist] = useState(null);
    const [showstorelist, setShowstorelist] = useState(null);

    const [search, setSearch] = useState(initsearch);
    const [check, setCheck] = useState('region');

    const handlePageChange = (page) => {
        setShowstorelist(selectstorelist.slice((page - 1) * 20, page * 20));
        setPage(page);
    };

    const [storename, setStorename] = useState('');
    const [storeaddr, setStoreaddr] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`${BACKEND_URL}/allstorelist`);
            setAllstorelist(response.data.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (allstorelist !== null) {
            const tmp = [];
            allstorelist.map((row) => {
                if (row.addr.includes(initsearch)) {
                    tmp.push(row);
                }
            })
            setSelectstorelist(tmp);
        }
    }, [allstorelist])

    useEffect(() => {
        if (selectstorelist !== null) {
            setShowstorelist(selectstorelist.slice(0, 20));
        }
    }, [selectstorelist])

    useEffect(() => {

        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };


        const map = new kakao.maps.Map(mapContainer, mapOption);
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(storeaddr, function (result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:200px;text-align:center;padding:6px 0;">' + storename + '</div>'
                });
                infowindow.open(map, marker);
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            }
        });

    }, [storeaddr]);

    useEffect(() => {
        if (allstorelist !== null) {
            const tmp = [];
            if (check === 'region') {
                allstorelist.map((row) => {
                    if (row.addr1.includes(search) || row.addr2.includes(search)) {
                        tmp.push(row);
                    }
                    setSelectstorelist(tmp);
                });
            } else if (check === 'storename') {
                allstorelist.map((row) => {
                    if (row.bssh_nm.includes(search)) {
                        tmp.push(row);
                    }
                    setSelectstorelist(tmp);
                });
            }
        }
    }, [search, check]);

    const handleCheck = (e) => {
        setCheck(e.target.value);
        setPage(1);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }

    const StoreTable = () => {
        return (
            <>
                <table style={{ border: '1px solid #9ddcec', width:'90%', height:'70%', textAlign:'center' }}>
                    <th style={{border: '1px solid #9ddcec'}}>가게이름</th>
                    <th style={{border: '1px solid #9ddcec'}}>등급</th>
                    {showstorelist === null ? (<p>loading</p>) :
                        (
                            showstorelist.map((row) => {
                                return (
                                    <>
                                        <Searchtable onClick={() => {setStoreaddr(row['addr']);setStorename(row['bssh_nm']);}}>
                                            <td >{row['bssh_nm']}</td>
                                            <td style={{borderLeft: '1px solid #9ddcec'}}>{row['hg_asgn_lv']}</td>
                                        </Searchtable>
                                    </>
                                );
                            })
                        )}
                </table>
            </>
        );
    }

    const Radio = () => {
        return (
            <div style={{marginBottom:'3%'}}>
                <label>
                    <FormCheckLeft type="radio" name='radiocheck' value="storename" checked={check === 'storename' ? true : false} onChange={handleCheck} />
                    <FormCheckText>가게이름</FormCheckText>
                </label>
                <label>
                    <FormCheckLeft type="radio" name='radiocheck' value="region" checked={check === 'region' ? true : false} onChange={handleCheck} />
                    <FormCheckText>지역</FormCheckText>
                </label>
            </div>
        );
    }

    return (
        <WrapOfMainWrap>
            <MainWrap>
                <GirdContainer>
                    <div>
                        {allstorelist === null || selectstorelist === null || showstorelist === null ? (<p>loading</p>) : (
                            <>
                                <Radio />
                                <Search placeholder="검색" onChange={handleSearch} onFocus="this.placeholder=''" onBlur="this.placeholder='검색'" />
                                <Searchtitle>
                                {check === 'region' ? '지역' : '가게이름'}기준 : {search !== '' ? search : '전체'}의 위생가게 리스트입니다.
                                </Searchtitle>
                                <StoreTable />
                                <Pagination
                                    activePage={page} itemsCountPerPage={20} totalItemsCount={selectstorelist.length} pageRangeDisplayed={5} prevPageText={"이전"} nextPageText={"다음"} firstPageText={"처음"} lastPageText={"끝"} onChange={handlePageChange} />
                            </>
                        )}
                    </div>
                    <div style={{ borderLeft: '1px solid black' }}>
                        <div style={{width:"93%", height:"40%", marginLeft:"5%"}}>
                            <p>주소 : {storeaddr}</p>
                        </div>
                        <div id="map" style={{ width: "93%", height: "60%", marginLeft:"5%" }}></div>
                    </div>
                </GirdContainer>
            </MainWrap>
        </WrapOfMainWrap>
    )
}

const WrapOfMainWrap = styled.div`
  border: 2px solid #8B4513;
  margin: 2% 2%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-53%, -50%);
`

const MainWrap = styled.div`
  border: 4px solid #8B4513;
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

const Search = styled.input`
    width: 90%;
    height: 50px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 0;
    background: #eee;
    font-size: 17px;
    transition: all 0.5s;

    &:hover {
        background: #ccc;
    }
    &:focus {
        outline: none;
    }
`

const FormCheckText = styled.span`
    font-size: 18px;
    width: 110px;
    height: 35px;
    background: #e6e6e6;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #777;
`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
    &:checked {
        display: inline-block;
        background: none;
        padding: 0px 10px;
        text-align: center;
        height: 35px;
        line-height: 33px;
        font-weight: 500;
        display: none;
    }
    &:checked + ${FormCheckText} {
        background: #bb7d43;
        color: #fff;
    }
    display: none;
`;

const Searchtitle = styled.div`
    margin: 3%;
`

const Searchtable = styled.tr`
    &:hover {
        background: #66c0e4;
        cursor : pointer;
    }
`

export default StoreDetail;
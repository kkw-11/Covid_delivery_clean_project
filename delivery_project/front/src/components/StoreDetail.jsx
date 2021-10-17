/* global kakao */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BACKEND_URL } from "../env";
import axios from "axios";
import Pagination from "react-js-pagination";
import loading from '../images/loading5.gif';

const StoreDetail = () => {

    const [maps, setMaps] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (maps !== null && marker !== null) {
            const customoverlay = new kakao.maps.CustomOverlay({
                position: marker.getPosition(),
                content: '<span class="info-title">현재 위치</span>'
            });
            customoverlay.setMap(maps)
            marker.setMap(maps);
        }
    }, [marker])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };
                setMaps(new kakao.maps.Map(mapContainer, mapOption));

                const positions = new kakao.maps.LatLng(latitude, longitude);
                const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                const imageSize = new kakao.maps.Size(24, 35);
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                setMarker(new kakao.maps.Marker({
                    position : positions,
                    image : markerImage,
                }));

                const customSort = (a,b) => {
                    if(a.distance == b.distance){return 0} return parseFloat(a.distance) > parseFloat(b.distance) ? 1 : -1;
                }
        
                const fetchData = async () => {
                    const response = await axios.post(`${BACKEND_URL}/allstorelist`, { map1: latitude, map2: longitude });
                    const result = response.data.data;
                    result.sort(customSort);
                    setAllstorelist(result);
                };
                fetchData();
                
            }, function (error) {
                console.error(error);
            }, {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity
            });
        } else {
            alert('GPS를 지원하지 않습니다');
        }
    }, [])

    const area = useLocation();
    const initsearch = area.state === '전국' ? '' : area.state;

    const [page, setPage] = useState(1);
    const [allstorelist, setAllstorelist] = useState(null); //전체 DB 받아옴

    const [selectstorelist, setSelectstorelist] = useState(null);
    const [showstorelist, setShowstorelist] = useState(null);
    const [notfranchiselist,setNotFranchiseList] = useState(null);

    const [search, setSearch] = useState(initsearch);
    const [check, setCheck] = useState('region');

    const handlePageChange = (page) => {
        if (notFran ===true){
            setShowstorelist(notfranchiselist.slice((page-1)*20, page*20));
            setPage(page);
        }
        else{
            setShowstorelist(selectstorelist.slice((page - 1) * 20, page * 20));
            setPage(page);
        }
        
    };

    const [storename, setStorename] = useState('');
    const [storeaddr, setStoreaddr] = useState('');

    const [notFran,setNotFran] = useState(false);

    useEffect(() => {
        if (allstorelist !== null) {
            const tmp = [];
            const tmp2 = []; //franchise 아닌 가게 데이터 불러오기
            allstorelist.map((row) => {
                if (row.addr3.includes(initsearch)) {
                    tmp.push(row);
                    if(row.franchise == 0){//일반가게 정보(0) tmp2에 넣기
                        tmp2.push(row);
                    }
                }
            })
            setSelectstorelist(tmp);
            setNotFranchiseList(tmp2);
        }
    }, [allstorelist])

    //한 페이지마다 가게 20개씩 보여지는 코드
    useEffect(() => {
        if (notFran== true){
            if(notfranchiselist !== null){
                setShowstorelist(notfranchiselist.slice(0, 20));
            }
        }
        else{
            if (selectstorelist !== null) {
                setShowstorelist(selectstorelist.slice(0, 20));
            }
    }
    }, [selectstorelist])

    useEffect(() => {

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(storeaddr, function (result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new kakao.maps.Marker({
                    map: maps,
                    position: coords,
                    clickable: true
                });
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:200px;text-align:center;padding:6px 0;">' + storename + '</div>',
                    removable: true
                });
                infowindow.open(maps, marker);
                kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(maps, marker);
                })
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                maps.setCenter(coords);
                maps.setLevel(3, {animate: true});
            }
        });

    }, [storeaddr]);

    //검색으로 가게정보 필터
    useEffect(() => {
        //
        if (allstorelist !== null) {
            const tmp = [];
            const tmp2 = [];
            if (check === 'region') {
                allstorelist.map((row) => {
                    if (row.addr3.includes(search)) {
                        tmp.push(row);
                        if(row.franchise === 0){//일반가게 정보(0) tmp2에 넣기
                            tmp2.push(row);
                        }
                    }
                    setSelectstorelist(tmp);
                    setNotFranchiseList(tmp2);
                });
            } else if (check === 'storename') {
                allstorelist.map((row) => {
                    if (row.bssh_nm.includes(search)) {
                        tmp.push(row);
                        if(row.franchise === 0){//일반가게 정보(0) tmp2에 넣기
                            tmp2.push(row);
                        }
                    }
                    setSelectstorelist(tmp);
                    setNotFranchiseList(tmp2);
                });
            } else if (check === 'codebig') {
                allstorelist.map((row) => {
                    if (row.code_big.includes(search)) {
                        tmp.push(row);
                        if(row.franchise === 0){//일반가게 정보(0) tmp2에 넣기
                            tmp2.push(row);
                        }
                    }
                    setSelectstorelist(tmp);
                    setNotFranchiseList(tmp2);
                });
            }
        }
        console.log(notfranchiselist);

    }, [search, check, notFran]);

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
                <table style={{ border: '1px solid #9ddcec', width: '90%', height: '70%', textAlign: 'center' }}>
                    <th style={{ border: '1px solid #9ddcec' }}>가게이름</th>
                    <th style={{ border: '1px solid #9ddcec' }}>등급</th>
                    <th style={{ border: '1px solid #9ddcec' }}>업태</th>
                    <th style={{ border: '1px solid #9ddcec' }}>거리</th>
                    {showstorelist === null ? (<p>loading</p>) :
                        (
                            showstorelist.map((row) => {
                                return (
                                    <>
                                        <Searchtable onClick={() => { setStoreaddr(row['addr']); setStorename(row['bssh_nm']); }}>
                                            <td >{row['bssh_nm']}</td>
                                            <td style={{ borderLeft: '1px solid #9ddcec' }}>{row['hg_asgn_lv']}</td>
                                            <td style={{ borderLeft: '1px solid #9ddcec' }}>{row['code_big']}</td>
                                            <td style={{ borderLeft: '1px solid #9ddcec' }}>{row['distance']}km</td>
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
                <FranCheck>
                    <input type="checkbox" name="notfranchisecheck" checked={notFran} onChange={()=>checkHandler()}/>프랜차이즈 제외한 일반가게만 보기
                </FranCheck>
                </label><br/><br/>

                <label>
                    <FormCheckLeft type="radio" name='radiocheck' value="storename" checked={check === 'storename' ? true : false} onChange={handleCheck} />
                    <FormCheckText>가게이름</FormCheckText>
                </label>
                <label>
                    <FormCheckLeft type="radio" name='radiocheck' value="region" checked={check === 'region' ? true : false} onChange={handleCheck} />
                    <FormCheckText>지역</FormCheckText>
                </label>
                <label>
                    <FormCheckLeft type="radio" name='radiocheck' value="codebig" checked={check === 'codebig' ? true : false} onChange={handleCheck} />
                    <FormCheckText>업태</FormCheckText>
                </label>
            </div>

        );
    }
    const checkHandler = () => {
        setNotFran(!notFran);
    }

    return (
        <WrapOfMainWrap>
            <MainWrap>
                <GirdContainer>
                    <div>
                        {allstorelist === null || selectstorelist === null || showstorelist === null ? 
                            (<img 
                                alt="loading..." 
                                src={loading} 
                                style={{ width:"90%", height:"100%"}}
                            />) : 
                            (
                                <>
                                    <Radio />            
                                    
                                    <Search placeholder="검색" onChange={handleSearch} onFocus="this.placeholder=''" onBlur="this.placeholder='검색'" />
                                    <br/>
                            
                                    <Searchtitle>
                                    {check === 'region' ? '지역' : check === 'storename' ? '가게이름' : '업태'}기준 : {search !== '' ? search : '전체'}의 위생가게 리스트입니다.
                                    </Searchtitle>

                                    <StoreTable />
                                    
                                    <Pagination
                                        activePage={page} itemsCountPerPage={20} totalItemsCount={notFran ? notfranchiselist.length : selectstorelist.length} pageRangeDisplayed={5} prevPageText={"이전"} nextPageText={"다음"} firstPageText={"처음"} lastPageText={"끝"} onChange={handlePageChange} />
                                </>
                        )}

                    </div>
                    <div style={{ borderLeft: '1px solid black' }}>
                        <div style={{width:"93%", height:"20%", marginLeft:"5%"}}>
                            <p>주소 : {storeaddr}</p>
                        </div>
                        <div id="map" style={{ width: "95%", height: "70%", marginLeft:"5%", marginTop: "5%" }}></div>
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
  padding: 25px 50px 40px 50px;
`

const GirdContainer = styled.div`
    display: grid;
    width: 70vw;
    height: 70vh;
    grid-template-columns: 50% 50%;
    background-color: rgb(255, 255, 255);
    margin-bottom: 5%;
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

const FranCheck = styled.span`
    width: 20px;
    height: 20px;
    border: 2px #bcbcbc;
    cursor: pointer;
`
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

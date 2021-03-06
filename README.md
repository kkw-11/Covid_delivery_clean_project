# (클린한끼)
- 코로나로 인한 배달서비스 급증에 따른 소비자 민원 조사 및 위생상태 불량 적발 건수 데이터 분석과 이러한 사용자들의 불만해결을 위한 지역별 위생 가게 정보 제공
- [클린한끼 사이트 바로가기](https://kdt-vm-0202011.koreacentral.cloudapp.azure.com/)

## 프로젝트 아키텍처 

![image](https://user-images.githubusercontent.com/76929823/137636476-de8b0ccd-67cb-4ada-abf0-91760cdf315e.png)

🗓 **프로젝트 일정**

- 프로젝트 기간 : 2021.9.27(월) ~ 2021.10.15(금)

![image](https://user-images.githubusercontent.com/76929823/137832730-7af13496-6cf9-49e8-8df4-887bf73d74b1.png)


## 1. 프로젝트 소개

**어떠한 데이터셋와 도구 및 기술을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**
- 사용하려는 데이터(제안된 데이터 중 하나 또는 선택한 다른 데이터 세트)를 명시, 이에 대한 설명
  - [전국 인허가 데이터 행정안전부_일반음식점(수시)20210731](https://www.data.go.kr/data/15045016/fileData.do)
  - [행정안전부휴게음식점(수시)_20210731](https://www.localdata.go.kr/data/dataView.do)
  - [식품안전나라 '식품접객업소 위생등급 지정현황' 식품의약품안전처](https://www.foodsafetykorea.go.kr/apiMain.do)
  - [통계청 온라인 쇼핑 거래액 ( 음식 서비스)](http://kostat.go.kr/understand/info/info_lge/1/detail_lang.action?bmode=detail_lang&cd=SL4420)

- 기술 스택 (python, flask, javascript, react, MySQL 등)
- 사용된 라이브러리 (pandas, numpy, matplotlib, wordcloud, chart.js 등)
- 웹서비스에 대한 자세한 개요 (코로나로 인한 배달서비스 급증에 따른 소비자 민원 조사 및 위생상태 불량 적발 건수 데이터 분석과 이러한 사용자들의 불만해결을 위한 지역별 위생 가게 정보 제공)

## 2. 프로젝트 목표

**데이터 분석 결과로 도출되는 인사이트와 웹서비스의 해결과제에 대한 논의 (50자 이상)**
- 프로젝트 아이디어 동기
  - 데이터 분석 결과 코로나로 인해 배달음식이 급증했다는 인사이트를 얻고, 배달음식이 조리상태를 확인할 수 없어 위생상태에 대한 불만이 많다는 사실을 알게 되었습니다. 그래서 이러한 소비자 불만을 해결하기 위한 정보제공 서비스를 개발하고자 하였습니다.

## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 주요 기능 (주된 활용성) 및 서브 기능
    - 정보검색 기능
      - 배달 관련 데이터 정보 제공
      - 전국 위생가게 현황 및 등급 시각화
      - 식약처 위생인증 정보 확인
      - 메뉴 추천 게임 (메뉴 지뢰 찾기, 메뉴 월드컵 16강)
  
  - 프로젝트만의 차별점, 기대 효과
    * 통계적 기법(정규화)을 이용한 데이터 전처리를 바탕으로 정확한 정보 제공

## 4. 프로젝트 구성도 및 기능 설명
  - [클린한끼](https://whimsical.com/v3-3ctRi38AoRBshnap5YwmxJ)
### To-Do List

* [x] 지역별 위생등급별 가게수 확인 기능
* [x] 위생가게 수에 따른 지도 색표시 기능
* [x] 위생가게 수치 절대값, 상대값 전환 기능
* [x] 프로젝트 소개 페이지 그래프 시각화기능
  * [x] 코로나 전후 배달대행 건수 비교 막대 그래프 
  * [x] 배달음식 민원 비율 그래프
  * [x] 코로나 이후 위생 상태 불량 적발 건수 증가 그래프
* [x] 위생가게 정보 검색 기능
  * [x] 가게이름별 검색
  * [x] 지역별 검색
  * [x] 업태(ex.한식, 중식, 양식, 카페,디저트)별 검색
  * [x] 사용자 위치 기반으로 가까운 가게 우선순위로 데이터 리스트 출력 기능
  * [x] 프랜차이즈를 제외한 일반가게만 보기 기능
  * [ ] ~~가게별 네이버 별점, 가게 영업시간 정보 제공 기능~~
* [x] 먹고 싶은 메뉴 고르기 게임 기능
  * [x] 메뉴 지뢰 찾기
  * [x] 메뉴 월드컵 16강
   * [X] 다시 하기 기능 
   * [ ] ~~공유하기 버튼~~
* [ ] ~~먹고 싶은 메뉴와 위생가게 연결기능~~

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 강경모 | 팀장/프론트엔드 개발 |
| 고예림 | 프론트엔드 개발 |
| 김기원 | 백엔드 개발/PM/데이터분석|
| 민경준 | 프론트엔드 개발/백엔드 개발/데이터분석 |
| 최윤성| 데이터분석/기획/백엔드 개발 |

**역할 상세 설명**

1. 백엔드, PM
- use case 분석, 백엔드 API 설계, 아키텍처 설계
- DB 구축
- 서버 배포
- Data-Driven 프로젝트 기획
  - 데이터 분석 결과  80만 전국 가게 데이터 중 위상가게 비율 조사 결과 90%이상 프랜차이즈 점이라는 결과를 바탕으로 최초 추천 시스템에서 정보제공사이트로 프로젝트 방향성 변경
  - 강남구의 가게수가 많아서 위생가게 수도 많은 결과를 보여주는 지도 표시 기능에서 위생가게 수 데이터 정규화 기능 제공
   

## 6. 버전
  - 프로젝트의 버전 기입
    - V1 - 대시보드형태의 데이터 시각화 정보제공
    - V2 - 스토리텔링 형태의 데이터 시각화 정보제공
    - V3 - 스토리텔링 형태의 데이터 시각화 정보 및 거리기반 위생 가게 정보 제공 및 사용자에게 재미 요소인 메뉴 고르기 게임 

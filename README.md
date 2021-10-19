# (클린한끼)
- 코로나로 인한 배달서비스 급증에 따른 소비자 민원 조사 및 위생상태 불량 적발 건수 데이터 분석과 이러한 사용자들의 불만해결을 위한 지역별 위생 가게 정보 제공

## 프로젝트 구성 안내

![image](https://user-images.githubusercontent.com/76929823/137636476-de8b0ccd-67cb-4ada-abf0-91760cdf315e.png)

🗓 **프로젝트 일정**

- 프로젝트 기간 : 2021 9/27(월) ~ 2021 10/15(금)

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
      - 메뉴 추천 추천 게임 ( 음식 마방진, 음식16강)
  
  - 프로젝트만의 차별점, 기대 효과
    * 통계적 기법(정규화)을 이용한 데이터 전처리를 바탕으로 정확한 정보 제공

## 4. 프로젝트 구성도 및 기능 설명
  - [클린한끼](https://whimsical.com/v3-3ctRi38AoRBshnap5YwmxJ)
### To-Do List

* [x] 지역별 위생등급별 가게수 확인 기능
* [x] 위생가게 수에 따른 지도 색표시 기능
* [x] 위생가게 수치를 절대값, 상대값 전환 기능
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
| 김기원 | 기획/데이터분석/백엔드 개발|
| 민경준 | 프론트엔드 개발/백엔드 개발/데이터분석 |
| 최윤성| 기획/데이터분석/백엔드 개발 |

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당, 기획 

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - 프로젝트의 버전 기입
    - V1 - 대시보드형태의 데이터 시각화 정보제공
    - V2 - 스토리텔링 형태의 데이터 시각화 정보제공
    - V3 - 스토리텔링 형태의 데이터 시각화 정보 및 거리기반 위생 가게 정보 제공 및 사용자에게 재미 요소인 메뉴 고르기 게임 

## 7. FAQ
  - 자주 받는 질문 정리

## 8. 배운점
- 기술
  - 백엔드 포지션을 맡으면서 api를 설계하고 DB와 CURD하는 법에 대해 익힐 수 있었고, 프론트엔드 팀과 어떻게 소통하고 데이터를 주고 받아야 하는지 알 수 있었습니다. 개인프로젝트에서는 flask 백엔드와 jinja template을 사용해 프론트 부분과 데이터를 주고 받았으나 이번에는 프론트엔드의 react와 데이터를 주고 받아야 했기 때문에 json으로 데이터를 넘기고 axios로 통신하는 법을 배웠습니다. 그리고 원하는 데이터가 없을 때 크롤링을 통해 데이터를 수집하는 방법에 대해서도 배웠습니다. 그리고 react와 flask를 azure VM에 NGINX서버를 사용해 배포하는 법도 배울 수 있었습니다. 여기서 중요한 이슈가 있었습니다. react에서 마지막에 추가한 기능인 Geolocation라이브러리를 사용해 사용자의 위치정보를 수집하는 코드가 있었는데 이러한 라이브러리가 https에서만 지원하는 기능이었습니다. 하지만 기존에 배포한 nginx가 http만 통신을 지원하도록 적용해놨기 때문에 문제가 되었습니다. 그래서 https를 nginx에 적용하면서 서버 블락을 설정하는 방법도 배울 수 있었습니다.
- 기술 이외 배운점
  - 팀 프로젝트는 운동에 비유하면 축구 같은 팀스포츠이고 팀원간의 화합이 결과의 미치는 영향에 대해서도 배울 수 있었습니다. 백엔드와 기획을 동시에 맡으면서 팀원들이 모두 납득가능한 기획의 방향을 잡는데 어려움을 겪었습니다. 기획의 어려움으로 인해 팀원이 모두 다른 생각을 갖고 프로젝트를 하는 기분이 들었습니다. 데이터팀은 정확한 정보전달과 기능, 프론트엔드 팀은 사용자입장에서 조금 더 재미요소를 갖춘 프로젝트 처럼 서로가 바라보는 방향이 달라 이러한 방향을 한곳으로 모으면서 좋은 프로젝트를 기획하는 것이 어려웠으나, 유저입장에서의 피드백을 많이 들으면서 두 방향을 한곳으로 모을 수 있었고, 조금 더 완성도 있는 프로젝트를 기획할 수 있게 되었습니다. 한곳으로 방향이 정해지면서 마지막주에는 특별히 어떠한 일을 해야하는지 말해주지 않아도 적극적으로 자기 맡은 역할을 수행하면서 완성도 있는 기획만큼 완성도 있는 프로젝트를 만들어 낼 수 있었습니다. 
  - 프로젝트 기간동안 매일 아침에 스크럼을 진행하며 커뮤니케이션을 하는 법에 대해서도 배울 수 있었습니다. 내가 알고 있는 것을 어떻게 상대가 이해할 수 있게 효율적으로 전달하는지 고민하고 전달해야하는지 배웠습니다. 기획이후에 본격적인 프로젝트 진행기간에는 프론트엔드 팀과 백엔드 팀이 데이터를 주고 받는 과정에서 코드를 작성할 때도 api로 소통하는 법을 배웠습니다.
  - 프론트엔드의 중요성에 대해서도 배웠습니다. 백엔드 포지션으로 취업을 희망하며 내가 만든 기능이 어떻게 동작하는지에 대해서만 관심을 가졌는데 잘 동작하는 기능도 결국엔 잘 꾸며진 디자인 없이는 사용자가 사용하도록 만드는 데는 힘들기 때문에 백엔드 기능만큼 프론트엔드의 중요성에 대해 알게 되었습니다.


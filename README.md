# 프론트엔드 : 김민주, 이시영      

## 제재 방식
* 5회 경고에 24시간 채팅 제한

# 이시영 : todo
* 데이터 흐름에 맞춰 컴포넌트 상태관리 정리 - Recoil, Recoil-Persist 이용
* 채팅방
    * 여러개 열 수 있게 가능?
        * ~~컴포넌트화 필요~~
* 보안
    * 유저 토큰 데이터 보안 이슈 공부
* 초기화면
    * 차트 라이브러리를 통해 통계 보여주기
        * ~~차트라이브러리 연결~~
    * 알림
        * 학부모 연결 승인
            * 이때, createRoom 사용
* 메인
    * 초기 접속
        * add-info
            * ~~학교, 자녀정보 등등 설정하는 모달화면 띄우기~~
            * 서버에 알맞은 구조로 객체 뽑기
            * 데이터 전송 확인
    * 

# 김민주 : todo 
* 초기 프로필 설정 컴포넌트 - SetProfile
채팅 가능 시간 select 되게 바꾸기
* 프로필 view 컴포넌트 - ViewProfile
*데이터 연결 및 본인 프로필/다른사람 프로필 목록 분리작업*
* 로딩 컴포넌트 - Loading
 > 로직 구현
* 프로필 목록 컴포넌트 - PeopleListBox
*프로필 모달창이 본인 프로필일 경우 프로필 수정 가능하게 로직 구현* 
* 마이페이지 - Mypage
 > 디자인 및 로직 구현
* 회원가입
  > 유저 회원가입 데이터 전송
  토큰 받아서 로컬스토리지에 저장
* 로그인
  > 토큰 확인
* 
--- 
### 회원가입 페이지
1. 서버로부터 데이터 요청
2. 받아온 데이터 바탕으로 검색하는 화면 구현
3. 검색 화면에서 사용자가 클릭한 데이터를 회원가입 페이지에 데이터 저장
4. 학교 주소 검색하는 모달 창 컴포넌트 구현
***    
# 개발환경 세팅 문서
## scripts    
> * npm run build : 배포용 실행 스크립트
> * npm run client : 개발용 실행 스크립트 : 클라이언트 사이드
> > 3000포트로 연결
> * npm run server : 개발용 실행 스크립트 : 백 사이드 : 노드몬으로 실시간 서버 변경사항 추적
> > 8080포트로 연결
> * npm run dev : "npm run client" & "npm run server" script 모두 실행(concurrently 이용)
***    
# 회원가입 페이지
> * 커리어넷 : 학교검색 api -> JSON 형태 URL : //www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=인증키
> * request/response 파라미터/필드 정보 홈페이지 : https://www.career.go.kr/cnet/front/openapi/openApiSchoolCenter.do
원본코드 : https://github.com/easysIT/nwitter

======================================================================

[05월25일]

1.트윗 수정 기능

1-1. onChange 함수
입력할 때마다 value 인자로 키보드 값이 넘어감
newNweet에 반영하기 때문에 입력한 텍스트가 바로 보여짐.

1-2. 파이어스토어에 입력값 반영
새 입력값을 반영하기 위해 form 엘리먼터 & onSubmit 함수 필요
문서 자체를 수정하기 때문에 'doc(...).update(...)'로 작성
업데이트를 하고 싶은 값을 {text:newNweet}와 같은 객체 형태로 전달해야 업데이트가 제대로 실행.

2. 사진 미리보기 기능

2-1 파일 첨부 양식
파일 업로드를 위해 'type="file"' 속성을 가진 input 엘리먼트 추가함.
파일 이벤트의 경우 event.target.value를 사용하면 파일 경로가 출력이 되지만 보안 정책 상 실제 경로를 표시하면 안되기 때문에 상세 경로가 숨겨진 상태로 출력.
event.target.files와 같이 files 배열 참고.

files가 배열인 이유는 input 엘리먼트의 multiple 속성에 대비하기 위함.
여러 개의 이미지 파일 업로드 시 배열로 파일 정보를 보여주기 위함.

2-2 웹 브라우저에 사진 출력
브라우저 API인 FileReader 사용
new FileReader()와 같이 new 키워드와 함께 사용
onloadend : readAsDataURL 함수에 전달한 파일이 함수로 들어간 이후의 결과값이 나온 다음 상황 감지.

3. 사진 미리보기 기능
URL을 이용하여 파이어베이스에 사진을 저장하기 전 확인하는 기능
URL 관리를 위한 상태 필요

======================================================================

[05월18일]

05-2 실시간 데이터베이스로 트윗 목록 보여주기

get 함수로 파이어베이스 데이터를 받아오면, 실시간 데이터 반영이 불가능함.
이런 절차 없이 실시간으로 트윗 목록을 출력하는 방법은 실시간 데이터베이스를 도입해야함 (실시간 채팅 어플에 유용)
1. get 함수 대신 onSnapshot 함수 사용

get 함수처럼 스냅샷을 반환함 스냅샷에는 다시 무너 스냡샷들이 포함되어 있는데 문서 스냡샷들은 snapshot.docs와 같이 얻어낼 수 있음.
*map 함수를 적용하면, 무선 스냡샷에서 원하느 값만 뽑아 다시 배열화. (map 함수 사용 시 코드 효율이 높아짐)
 map 함수는 순회하며 만든 배열을 반환하므로 반환한 배열을 1번만 setNweets 함수에 전달하면 되니 효율적임.


05-3 트윗 삭제 기능 만들기

1. userObj 프롭스를 이용하면, Nweet 컴포넌트에 '이 사람이 이 트윗이 주인이 아니다' 쉽게 구분 가능.
nweet.creatorId === userObj.uid와 같이 uid와 로그인한 사용자의 uid를 비교 true 또는 false.


======================================================================

[05월11일]

오류로 인한, npm start error 교수님, 파일로 대체해서 진행. 실행 오류 해결 완료
데이터베이스 만들기
파이어베이스 데이터베이스 NoSQL 기반 데이터베이스. p112 ~ p113 참고.

리액트에서 파이어베이스 데이터베이스 사용 시 fbase.js 파일 수정.

./src/fbase.js 에서 import "firebase/firestore"; / export const dbService = firebase.firestore(); 추가 후 리액트 서버 재시작.

파이어스토어 데이터 저장
파이어스토어는 실시간으로 동작하는 데이터베이스라 트윗한 정보를 바로 반영.

./src/route/Home.js dbService.collection("nweets").add <- Promise를 반환하므로 async-await 문을 사용. 컬렉션 생성 후 text 상태의 값을 문서로 저장. p116 참고.

파이어스토어에서 문서 읽어오기.
get 함수 사용 = get 함수는 add 함수 처럼 단순히 1번만 실행으로 읽어올 수 없음. 문서의 개수가 많으면 forEach 함수로 실행.

./src/route/Home.js

dbNweers.forEach((document) => console.log(document.data()));


1. 데이터베이스 만들기

파이어베이스 데이터베이스 NoSQL 기반 데이터베이스. p112 ~ p113 참고.

리액트에서 파이어베이스 데이터베이스 사용 시 fbase.js 파일 수정.

./src/fbase.js 에서 import "firebase/firestore";  / export const dbService = firebase.firestore(); 추가 후 리액트 서버 재시작.

2. 파이어스토어 데이터 저장

파이어스토어는 실시간으로 동작하는 데이터베이스라 트윗한 정보를 바로 반영.

./src/route/Home.js 
dbService.collection("nweets").add <- Promise를 반환하므로 async-await 문을 사용.
컬렉션 생성 후 text 상태의 값을 문서로 저장. p116 참고.

3. 파이어스토어에서 문서 읽어오기.

get 함수 사용 = get 함수는 add 함수 처럼 단순히 1번만 실행으로 읽어올 수 없음.
문서의 개수가 많으면 forEach 함수로 실행.

./src/route/Home.js

dbNweers.forEach((document) => console.log(document.data()));

오류 수정 후 진행중..
======================================================================


[05월04일]

1. 소셜 로그인

Provider 소셜 로그인 서비스 제공 업체로 비유 if(name === 'google') { // 구글 소셜 로그인 서비스 제공 provider = new firebaseInstance.auth.GoogleAuthProvider(); } else if (name === 'github') { // 깃허브 소셜 로그인 서비스 제공 provider = new firebaseInstance.auth.GithubAuthProvider(); }

2. 소셜 로그인 완성 signInWithPopup() : 실제 소셜 로그인 진행하는 비동기 함수 provider를 함수 인자로 넘겨 소셜 로그인 시도 실행 후 팝업창에서 로그인 기능 생성 확인 가능

Navigation 컴포넌트 네이게이션 컴포넌트로 라우터 제어 컴포넌트 생성 후 Router.js 파일에 연동
Switch Switch를 이용해 isLoggedIn이 true인 경우에만 Navigation이 보이도록 출력 {isLoggedIn && }

링크 추가 Home 컴포넌트와 Profile 컴포넌트를 링크()를 통해 이동 가능 링크만 수정되고 실제로 컴포넌트 렌더링하지 않음 컴포넌트는 대문자(Profile), path에는 소문자(profile)로 구성되어 있으니 확인! import {Link} from "react-router-dom"; ...

- Home
- My Profile
3. 로그아웃 Profile.js 파일에서 로그아웃 버튼 생성 authServise의 함수 중 SignOut 함수 실행 > 로그아웃 로그아웃 > IndexedDB에 있는 정보를 알아서 비우고 로그아웃 처리 > 주소 표시줄은 여전히 /profile
1. Redirect로 로그아웃 후 주소 이동 Switch 내부에 있는 Route 조건이 불충분 > Redirect가 지정한 주소로 이동 'from' props에 있는 값 > 조건 'to' props에 있는 값으로 주소 이동 import { Redirect } from "react-router-dom"; ... // 어떤 주소든(from) /루트로 변경(to)
로그아웃 버튼 클릭 후 > 주소는 여젼히(/profile) > Redirect 동작 2) useHistoy로 로그아웃 후 주소 이동 로그아웃을 처리하는 자바스크립트 코드로 주소 이동 import { useHistory } from 'react-router-dom'; ... const histoy = useHistory(); const onLogOutClick = () => { authService.signOut(); histoy.push("/"); };
1) Provider
소셜 로그인 서비스 제공 업체로 비유
  if(name === 'google') {
    // 구글 소셜 로그인 서비스 제공
    provider = new firebaseInstance.auth.GoogleAuthProvider();
  } else if (name === 'github') {
    // 깃허브 소셜 로그인 서비스 제공
    provider = new firebaseInstance.auth.GithubAuthProvider();
  }

2) 소셜 로그인 완성
signInWithPopup() : 실제 소셜 로그인 진행하는 비동기 함수
provider를 함수 인자로 넘겨 소셜 로그인 시도
실행 후 팝업창에서 로그인 기능 생성 확인 가능
2. Navigation 컴포넌트
네이게이션 컴포넌트로 라우터 제어
컴포넌트 생성 후 Router.js 파일에 연동
1) Switch
Switch를 이용해 isLoggedIn이 true인 경우에만 Navigation이 보이도록 출력
  {isLoggedIn && <Navigation />}

2) 링크 추가
Home 컴포넌트와 Profile 컴포넌트를 링크()를 통해 이동 가능
링크만 수정되고 실제로 컴포넌트 렌더링하지 않음
컴포넌트는 대문자(Profile), path에는 소문자(profile)로 구성되어 있으니 확인!
  import {Link} from "react-router-dom";
  ...

  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/profile">My Profile</Link>
  </li> 

3. 로그아웃
Profile.js 파일에서 로그아웃 버튼 생성
authServise의 함수 중 SignOut 함수 실행 > 로그아웃
로그아웃 > IndexedDB에 있는 정보를 알아서 비우고 로그아웃 처리 > 주소 표시줄은 여전히 /profile
1) Redirect로 로그아웃 후 주소 이동
Switch 내부에 있는 Route 조건이 불충분 > Redirect가 지정한 주소로 이동
'from' props에 있는 값 > 조건
'to' props에 있는 값으로 주소 이동
  import { Redirect } from "react-router-dom";
  ...
  // 어떤 주소든(from) /루트로 변경(to)
  <Redirect from="*" to="/" />
로그아웃 버튼 클릭 후 > 주소는 여젼히(/profile) > Redirect 동작
2) useHistoy로 로그아웃 후 주소 이동
로그아웃을 처리하는 자바스크립트 코드로 주소 이동
  import { useHistory } from 'react-router-dom';
  ...
  const histoy = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    histoy.push("/");
  };


======================================================================


[04월27일]

1. 파이어베이스 누티어 사이의 비동기 처리에서 발생하는 시간 격차로 인해 null 값을 반환한다.
*SetInterval 함수 코드 사용 지정한2번째 인자로 지정한 시간 간격마다 1번째 인자로 전달하는 코드 실행. (시간단위 밀리초 2초간격 ex) 2000

2. useEffect 함수
*파이어베이스 로그인 정보를 받게 되었을때, 즉 파이어베이스가 초기화되는 시점 인증상태 감지하도록 수정.
IndexdDB의 회원정보 내용을 삭제해도 파이어베이스에 회원정보 남아있음.


3. 오류 확인.

Failed to compile.

./src/index.js
Module not found: Can't resolve 'components/App' in 'D:\jihoahn\nwitter\src'

오류 수정 중...

========================================================================


[04월13일]

index.js 파일에 React.StricMode로 설정 console.log 함수가 의도적으로 2번 실행됨.

input 엘리먼트 마우스로 눌러 키보드 입력 시도 "name 속성에 지정한 값이 출력됨"

const onChange = (event_ => { -생략 수정 }; == setEmail setPassword 값 확인.

오류 확인

========================================================================

[4월06일] react-router-dom@5.2.0 버전 낮춰 사용 오류 해결

node.js의 버전이 17 이상이라면, 기본적으로 작성되는 package.json의 scripts부문에서 "start" : "react-scripts start" 에서 --openssl-legacy-provider를 추가하여 "react-scripts --openssl-legacy-provider start"로 한다. 같은 방식으로, build도 추가한다.

========================================================================

[3월30일]

파이어베이스 설정 import firebase from 'firebase/compat/app'; import 'firebase/compat/auth';

임포트 부분 수정해보세요

[firebase import 8버전 이하 import firebase from 'firebase/app'; 'firebase/auth'; import

[firebase import 9버전 이상 import firebase from 'firebase/app'; 'firebase/compat/auth'; import 'firebase/compat/firestore';

설정시 오류 해결 가능

[3월 23일] 깃허브 푸쉬 git- config --global user.name[] $git config --global user.name zzi2ho@naver.com git user.email 확인 $git config user.name $git config user.email

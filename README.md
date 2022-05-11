원본코드 : https://github.com/easysIT/nwitter


=============================오류 수정 중 ===================================

#원본 코드로 대체 진행 예정..

[05월04일]

1. 소셜 로그인
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

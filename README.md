[04월27일]

1. 파이어베이스 누티어 사이의 비동기 처리에서 발생하는 시간 격차로 인해 null 값을 반환한다.
*SetInterval 함수 코드 사용 지정한2번째 인자로 지정한 시간 간격마다 1번째 인자로 전달하는 코드 실행. (시간단위 밀리초 2초간격 ex) 2000

2. useEffect 함수
*파이어베이스 로그인 정보를 받게 되었을때, 즉 파이어베이스가 초기화되는 시점 인증상태 감지하도록 수정.
IndexdDB의 회원정보 내용을 삭제해도 파이어베이스에 회원정보 남아있음.







[04월13일]

index.js 파일에 React.StricMode로 설정 console.log 함수가 의도적으로 2번 실행됨.

input 엘리먼트 마우스로 눌러 키보드 입력 시도 "name 속성에 지정한 값이 출력됨"

const onChange = (event_ => { -생략 수정 }; == setEmail setPassword 값 확인.

오류 확인

[4월06일] react-router-dom@5.2.0 버전 낮춰 사용 오류 해결

node.js의 버전이 17 이상이라면, 기본적으로 작성되는 package.json의 scripts부문에서 "start" : "react-scripts start" 에서 --openssl-legacy-provider를 추가하여 "react-scripts --openssl-legacy-provider start"로 한다. 같은 방식으로, build도 추가한다.

[3월30일]

파이어베이스 설정 import firebase from 'firebase/compat/app'; import 'firebase/compat/auth';

임포트 부분 수정해보세요

[firebase import 8버전 이하 import firebase from 'firebase/app'; 'firebase/auth'; import

[firebase import 9버전 이상 import firebase from 'firebase/app'; 'firebase/compat/auth'; import 'firebase/compat/firestore';

설정시 오류 해결 가능

[3월 23일] 깃허브 푸쉬 git- config --global user.name[] $git config --global user.name zzi2ho@naver.com git user.email 확인 $git config user.name $git config user.email
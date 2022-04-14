

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
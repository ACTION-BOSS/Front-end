![image](https://github.com/ACTION-BOSS/Front-end/assets/56420106/77ec1890-e182-4f4e-b3e2-68c672719eba)

# 📌 Table Of Contents

- [📖 Introduction](#-introduction)

<br />
<br />
<br />

## 1. 프로젝트 개요

**행동대장(행복한 동네를 위한 대화의 장소)**

동네 사건,사고와 문제에 보다 쉽게 접근하고 공유하는 커뮤니티 서비스

  <br />

## 2. 개발 환경

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=efefee"/> ![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=efefee"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> ![react-query](https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=efefee"/> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=efefee"/> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=efefee"/> <img src="https://img.shields.io/badge/route53-E34F26?style=for-the-badge&logo=route53&logoColor=white"> <img src="https://img.shields.io/badge/cloudinary-3578E5?style=for-the-badge&logo=cloudinary&logoColor=efefee"/> <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=vercel&logoColor=efefee"/> ![KakaoMap](https://img.shields.io/badge/kakaomap-ffcd00.svg?style=for-the-badge&logo=GoogleMaps&logoColor=#015ffa) <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white">

  <br />

## 3. 팀 멤버 및 역할

### 💙 <a href="https://github.com/Hyeon12">이소현</a> 💙

**역할:**
- 헤더
  - 페이지 이동 및 로그아웃
- 메인페이지
  - 반응형 UI 구현
  - Kakao Map API로 지도와 마커 및 클러스터러 사용
  - 현 지역 게시물 인피니트 스크롤 구현
  - 지역 검색 및 이동 기능
  - 현재 위치 이동 기능
  - 지도 현 지역 주소 표시
- 마이페이지
  - 반응형 UI 구현
  - 사용자가 게시한 게시물, 댓글을 쓴 게시물, '나도 불편해요' 게시글 목록 보기
  - 페이지네이션 처리

<br/>

### 💙 <a href="https://github.com/Haru-Im">임하루</a> 💙

**역할:**
- 폴더 구조 정립 및 eslint, prettier 설정
- 회원가입, 로그인 모달 구현 및 반응형 UI
- 일반 로그인, 회원가입 및 소셜 로그인 (카카오톡) 구현
- JWT(Access Token, Refresh Token) 관리
- 상세 페이지
  - 게시글 조회, '나도 불편해요', '해결했어요' 기능, 게시글 삭제 기능, 반응형 UI
  - 댓글 반응형 UI 작업
- '해결했어요' 누적 시 완료 게시글 구현
- 마이페이지
  - 유저 정보 조회, 이메일 추가 등록, 닉네임 변경, 비밀번호 변경, 회원 탈퇴 기능, 반응형 UI
- 404 페이지 구현
- 범용적으로 사용되는 api instance 및 interceptor, 모달, 버튼, Media Query, Global Theme, Toast 알람, confetti HOC 등 구현

<br/>

### 💙 <a href='https://github.com/junho01052'>이준호</a> 💙

**역할:**
- AWS 프론트 배포(https), CI / CD 구축
- 게시글 CRUD 기능 구현
- 댓글 기능: 조회, 작성, 삭제
- Kakao 지도 API를 활용한 위도, 경도, 주소 전송 및 불러오기 기능
- FormData 이미지 전송 요청 기능
- SSE 연결을 통한 실시간 알림 기능
- 랜딩페이지, 게시글 작성, 수정 페이지, 404페이지에 대한 PC, Tablet, Mobile 반응형 UI 구현

  <br />

## 4. 주요 기능

### 📌 **불편사항 공유**

자신이 느낀 동네의 불편사항에 대해 게시글과 댓글을 작성하며, 이를 통해 커뮤니티 내에서 자유롭게 의견을 공유할 수 있습니다.

### 📌 **주소 검색 후 지도 이동**

특정 지역의 정보에 관심이 있다면 "지역 검색" 기능을 통해 해당 지역으로 쉽게 이동할 수 있습니다. 자신이 살고 있는 지역 외의 다른 지역에서 발생하는 불편사항들도 확인하고 공감할 수 있습니다.

### 📌 **지도로 보는 동네의 불편사항**

지도 상에서 직관적으로 주변의 불편사항들을 한눈에 파악할 수 있습니다. 현재 위치 근방에서 어떤 문제가 발생하고 있는지 쉽게 알아볼 수 있습니다.

### 📌 **마이페이지**

마이 페이지에서는 사용자가 작성한 게시글, '나도 불편해요'로 응원한 게시글, 그리고 작성한 댓글에 대한 게시글 등을 한번에 확인할 수 있습니다. 추가로, 회원정보 수정, 회원탈퇴 기능을 제공하여 개인 정보 관리를 용이하게 합니다.

### 📌 **“나도 불편해요”, “해결됐어요” 기능**

일상에서 겪는 불편함을 공감하고, 이를 커뮤니티에 공유하여 인지도를 높이는 "사이렌" 역할을 합니다. 
반면, '해결됐어요' 버튼은 특정 문제점에 대한 해결 상황을 사용자들과 공유할 수 있게 하는 기능입니다. 이를 통해 사용자들은 게시글의 최신 상태를 쉽게 파악하고, 문제가 성공적으로 해결되었음을 확인할 수 있습니다. 일정 개수 이상의 ‘해결됐어요’ 가 누적되면, 게시글이 해결 완료 처리됩니다.

### 📌 **실시간 알림 기능**

사용자는 본인이 작성한 게시물에 활동(댓글, 나도 불편해요, 해결됐어요 등)이 발생하면
간략한 내용과 시간을 실시간으로 확인할 수 있습니다.

또한 읽은 알림과 읽지 않은 알림을 구분할 수 있고,
각각의 알림을 클릭하면 해당 게시물로 이동해 자세한 내용을 확인할 수 있습니다.

게시물이 ‘해결완료’ 처리된 경우에는 웹페이지 내에서의 알림 뿐만 아니라 이메일도 받아볼 수 있습니다.

### 📌 **로그인 회원가입 기능**

access token, refresh token을 통한 일반 로그인 및 카카오 소셜 로그인을 구현하였습니다.

  <br />

## 5. 기술적 의사 결정

| 요구사항                                      | 선택       | 기술을 선택한 이유 및 근거                                                                                                        |
| -------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 안정적인 코드                                | TypeScript | 타입 안정성 제공: TypeScript의 정적 타이핑 기능을 통해 런타임 오류를 줄일 수 있음<br>코드 가독성 향상: 명시적인 타입 표기로 인해 다른 개발자가 코드를 이해하기 쉬워짐<br>개발 효율성 증대: 자동완성, 인터페이스 확인 등의 기능을 활용할 수 있음<br>확장성 및 유지보수 용이: 큰 규모의 프로젝트에서 구조적이고 명확한 코드로 인해 유지보수 및 확장이 용이함 |
| 가벼운 상태 관리 라이브러리                    | Recoil     | 보일러 플레이트 코드를 줄일 수 있음<br>직관적이고 쉬운 사용법으로 협업에 유리<br>redux 보다 상대적으로 가벼운 recoil 선택 |
| 서버 상태 코드를 일괄되게 관리               | ReactQuery v4 | 서버쪽의 데이터를 좀더 쉽게 관리하기 쉬워 데이터 패칭, 캐싱, 동기적 서버의 상태의 업데이트에 용이<br>별도의 옵션을 지원하여 복잡한 코드를 reactQuery 로직을 통해 짧은 코드로 대체<br>reactQuery에서 다양한 기능을 제공하여 쉽게 데이터 처리 가능(infinity query, InvalidateQueries)<br>프로젝트 구조가 기존보다 단순해져 유지보수하기 쉽고 새로운 기능을 쉽게 구축<br>최신 라이브러리를 도입해 봄으로써 최신 기술 도입에 익숙해지기 위함 |
| 빠른 프로젝트 시작                            | CRA        | 복잡한 환경설정을 건너뛰고 바로 애플리케이션 개발에 집중할 수 있음(웹팩, 바벨 등의 복잡한 설정을 CRA가 미리 해줌)<br>CRA는 TS를 기본적으로 지원하기 때문에 복잡한 설정 없이 즉시 TS와 React의 조합으로 개발을 시작할 수 있음 |
| instance와 interceptor 기능                  | Axios      | 애플리케이션 내의 모든 HTTP 요청과 응답을 일관되게 관리할 수 있어, 코드의 복잡성을 줄임<br>Axios interceptor를 사용하여 요청이나 응답을 가로채서 추가적인 작업 진행. 이를 통해 토큰 갱신 작업을 쉽게 처리<br>Axios instance를 사용하여 반복적인 코드를 줄이고, 프로젝트 전반에 걸쳐 일관된 HTTP 클라이언트 구성을 제공<br>요청이나 응답 데이터를 자동으로 JSON으로 변환해 주어 데이터 형식에 대한 추가적인 처리 없이도 데이터를 쉽게 관리 |
| 웹페이지 로딩 속도 향상                       | CloudFront | CDN(Content Delivery Network)를 활용해 웹페이지 로딩 속도 향상<br>정적 데이터를 캐싱하여 웹사이트 최적화, 컨텐츠 제공 속도 향상 |
| 최적화된 리렌더링                            | react-hook-form      | 불필요한 리렌더링을 줄이고 성능을 향상시킴<br>입력 컨트롤과 폼 로직을 분리하여 컴포넌트의 재사용성을 높임<br>다양한 UI 라이브러리와의 통합이 용이하여, 유연한 UI 구현 가능 |
| 협업에 유리한 style tool                      | styled-component      | 컴포넌트 기반 개발이 가능<br>JS와 CSS 사이의 상수와 함수를 쉽게 공유<br>media query를 사용하여 쉬운 반응형 UI 개발 가능 |
| 이미지 및 비디오 관리                         | Cloudinary | 원본 미디어를 안전하게 보관하고 필요에 따라 여러 버전의 변환된 미디어를 생성하여 저장 공간을 절약할 수 있음<br>자동으로 이미지와 비디오를 최적화하여 사용자에게 더 빠르게 제공하며 대역폭 비용을 절감함 |
| 지도 API                                     | Kakao 지도 API | 상대적으로 더 정확하고 상세한 국내 지도 데이터<br>개발자를 위한 API 지원과 문서화가 잘 되어있어 개발 시간을 단축할 수 있음<br>카카오 서비스에 익숙한 국내 사용자들에게 더 나은 사용자 경험을 제공함 |
| 실시간 피드백                                | react-toastify | 유저에게 실시간 피드백을 제공해 유저에게 현재 상태나 진행 상황을 쉽게 알림<br>필요할 때만 컴포넌트를 렌더링하여 리소스를 절약하고 애플리케이션의 성능을 유지<br>자체적으로 알림의 자동 소멸, 위치 지정, 애니메이션 효과 등 다양한 기능을 지원해 개발 과정을 단순화하고 시간을 절약 |


  <br />



### 6. Troubleshooting

#### 📌 문제 1: 메인페이지에서 다른 페이지로 이동한 후 다시 돌아왔을 때 위치가 초기로 돌아가는 문제
**작성자:**
이소현

**문제:**
메인페이지에서 위치를 이동한 후 다른 페이지에 갔다가 다시 현 위치로 올 경우 지도가 새롭게 초기화되기 때문에 메인페이지로 올 때마다 현재 위치에서 지도가 시작하는 문제가 있었습니다.

**해결방안:**

- 지도 위치와 줌 레벨을 세션 스토리지에 저장하여 메인페이지에 올 때마다 세션 스토리지에 값이 있는지 확인하여 옵션을 세팅하여 지도 위치와 줌 레벨을 맞춰줍니다.
- 로컬 스토리지를 사용하는 대신 세션 스토리지를 사용하여 데이터가 페이지를 나가면 사라지지 않도록 합니다.
<br/>
<br/>

#### 📌 문제 2: 발전되는 검색
**작성자:**
이소현

**문제:**
검색을 구현하다 보니 여러 가지 이슈를 만났습니다.

**해결방안:**

- 검색 결과가 없을 때 서버에서 오류를 보내는 대신 빈 배열로 응답을 보내도록 변경합니다.
- 검색어를 입력할 때마다 서버를 호출하는 것이 느려서 UX를 저해하는 문제가 있었는데, 검색 목록과 좌표를 한 번에 받는 하나의 API를 사용하여 성능을 향상시킵니다.
- 검색어 입력 이벤트가 자주 발생하여 불필요한 렌더링을 방지하고 사용자 경험을 향상시키기 위해 디바운싱을 사용합니다.

<br/>
<br/>

#### 📌 문제 3: 댓글 작성, 삭제시 웹페이지에 바로 적용되지 않는 문제
**작성자:**
이준호

**문제:**
댓글을 작성 또는 삭제할 때 웹페이지에 즉시 반영되지 않는 문제가 있었습니다.

**해결방안:**

- 현재 상태를 관리하기 위해 서버에서 변경된 값을 useState로 다시 담아 값을 변경할 때마다 웹페이지에 반영합니다.
- 더 발전된 방법으로 react-query의 useQueryClient와 invalidateQueries를 활용하여 캐시를 무효화하여 최신 값으로 갱신합니다.

```jsx
const queryClient = useQueryClient();
 
const deleteCommentMutation = useMutation<void, unknown, string>(
  deleteComment,
  {
    onSuccess: () => {
      queryClient?.invalidateQueries(['postDetail', postId]);
    },
  },
);

const createCommentMutation = useMutation<void, unknown, CreateCommentArgs>(
  createComment,
  {
    onSuccess: () => {
      queryClient?.invalidateQueries(['postDetail', postId]);
    },
});
```
<br/>
<br/>

#### 📌 문제 4: 여러 장의 이미지와 다른 형식의 데이터를 함께 전송
**작성자:**
이준호

**문제:**
여러 장의 이미지와 다른 형식의 데이터를 함께 전송해야 했습니다.

**해결방안:**

- 이미지 요청을 처리하기 위해 파일 자체를 배열로 FormData에 append하고 서버에 전송합니다.
- 이미지와 함께 다른 형식(string, number)의 데이터를 JSON.stringify로 전송하고, 구별하기 쉽도록 blob 형태로 JSON 데이터를 감싸 전송합니다.

```jsx
const sendPostRequest = async () => {
    const formData = new FormData();
    const postJSON = JSON.stringify({
      title: post.title,
      content: post.content,
      latitude: post.latitude,
      longitude: post.longitude,
      address: post.address,
    });

    const blob = new Blob([postJSON], { type: 'application/json' });
    formData.append('post', blob);
    post.images.forEach((image) => {
      formData.append(`images`, image);
    });

    return axios.post(`${process.env.REACT_APP_API_URI}/api/posts`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
```
<br/>
<br/>

#### 📌 문제 5: 회원가입 모달
**작성자:**
임하루

**문제**

회원가입 모달에서 step이 변할 때마다 같은 모달 안에서 다른 화면을 보여주어야 하지만, 데이터는 초기화되지 않고 저장되어 있다가 마지막 스텝에서 한 번에 post 요청하는 것에 대한 문제

**시도**

step별로 사용자가 입력하는 모든 정보를,

1. 로컬 state로 관리
    1. 불필요한 렌더링이 과다하게 많아짐
    2. step을 이동할 때마다 저장되어있던 state가 사라짐
2. 전역 상태 관리 (recoil)에 저장하였다가, 마지막 step에서 모든 데이터를 합쳐 post 해주기
    1. step을 이동해도 이전 스텝에서 입력한 정보는 남아있지만, 전역적으로 관리되는 데이터 양이 과도하게 많아지는 문제

**해결**

react-hook-form을 사용해서 관리

- step이 달라지더라도 사용자들이 입력하는 정보를 하나의 form 으로 관리할 수 있음
- react-hook-form이 자체 제공하는 최적화를 통해 불필요한 리렌더링을 피함

```tsx
// 초기 form 정의
export type LoginModalFormData = {
  emailId: string;
  emailDomain: string;
  password: string;
};

export const useLoginModalForm = () => {
  const defaultValues = {
    emailId: '',
    emailDomain: '',
    password: '',
  };

  const form = useForm({
    defaultValues: {
      ...defaultValues,
    },
    mode: 'all',
  });

  return { form };
};

// form controller 사용
export const useLoginModalFormController = () => {
  const { control, watch } = useFormContext<LoginModalFormData>();

  const {
    field: { value: passwordValue, onChange: onChangePassword },
  } = useController({
    control: control,
    name: 'password',
  });

  // 이하 중략..
};
```
<br/>
<br/>

#### 📌 문제 6: 게시글마다 단 한 번만 모달창을 띄워주는 것에 대한 문제
**작성자:**
임하루

**문제**

- ‘해결된 민원이에요’ 게시글을 클릭하는 순간, 모달을 띄워 해결된 게시물임을 알려야 했던 상황
- 해당 모달은 게시글마다 모달 창을 ‘단 한 번만’ 띄워서 알려주어야 했음

**시도**

#### 1. alert여부를 local state로 만들어 관리

처음에는 모달 창이 alert되었는지 여부를 useState로 관리

그러나, useState로 alert여부를 관리하게 되면 해당 페이지가 언마운트될 때 state의 값이 초기화되어, 단 한 번만 모달창을 띄우는 것이 불가능했음

#### 2. alert여부를 recoil state로 만들어 관리

두 번째 시도에서는 페이지가 언마운트되어도 alert의 여부가 recoil로 관리되고 있어서 모달 창이 두 번 나오는 상황은 해결

그러나 이 방식에도 여러 가지 문제점이 있었는데,

1. 각각의 게시물마다 alert 여부를 저장해야 하는데, 단지 한 번 이상 alert 되면 atom값이 true로 바뀌어 게시물들을 구분하지 못하는 문제
2. 로그인, 로그아웃 기능 구현시 window.location.reload()로 페이지를 새로고침하는 경우가 있는데, 이 경우 recoil 값이 초기화되는 문제

즉 ‘게시물마다’ alert를 띄웠는지 안 띄웠는지 여부를 각각 저장하고, ‘새로고침되어도’ 값이 남아있어야 했음

**해결**

- 현재 애플리케이션에서 새로고침하는 로직이 많이 있어 recoil만으로는 원하는 상태를 영속적으로 저장할 수 없음
- 이를 atomFamily와 함께 사용하여 게시글 ID를 파라미터로 전달해 동적으로 atom을 생성
- sessionStorage를 사용한 이유
    - 게시글 ID당 모달이 열렸는지 확인하는 데이터는 장기적으로 저장될 필요가 없음. 즉 이는 임시적인 데이터이므로 sessionStorage가 적합하다고 생각
    - 사용자가 탭을 닫으면 저장된 데이터가 초기화되는 것이 구현 목적에 더 적합하다고 생각
```tsx
// 정의

import { atomFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'isDoneAlerted',
  storage: sessionStorage,
});

export const $isDoneAlertedFamily = atomFamily({
  key: 'isDoneAlertedFamily',
  default: false,
  effects_UNSTABLE: (postId) => [
    ({ setSelf, onSet }) => {
      const storedValue = sessionStorage.getItem(
        `isDoneAlertedFamily_${String(postId)}`,
      );
      if (storedValue != null) {
        setSelf(JSON.parse(storedValue));
      }

      onSet((newValue) => {
        sessionStorage.setItem(
          `isDoneAlertedFamily_${String(postId)}`,
          JSON.stringify(newValue),
        );
      });
    },
  ],
});

-----

//사용

const [isDoneAlerted, setisDoneAlerted] = useRecoilState(
    $isDoneAlertedFamily(postId),
  );

...

useEffect(() => {
    if (localDoneCount === 5 && !isDoneAlerted) {
      setIsReallyDone(true);
      setisDoneAlerted(true);
      openModal(EModalType.POP_UP, {
        title: '해결 완료 처리된 게시물입니다',
        cancelButton: false,
        functionButton: {
          label: '닫기',
          onClick: () => {
            closeModal();
          },
          theme: 'emptyBlue',
        },
      });
    }
}, [localDoneCount, isReallyDone]);
```

    

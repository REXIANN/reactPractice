# react-redux

redux 만으로도 충분히 스토어 데이터를 사용하고 변경할 수 있다. 그러나 react-redux는 redux를 react 와 연동해서 사용하기 편리하도록 만든 라이브러리이다.

**react-redux의 장점**
1. store를 하위 컴포넌트에 매번 상속하지 않고 사용할 수 있다
2. store데이터를 변경하거나 사용하는 코드를 모듈화해서 코드의 중복을 방지할 수 있다

기존의 redux와 동일하게 스토어 -> 컴포넌트 -> 액션 -> 리듀서 -> 스토어의 흐름을 통해 데이터를 변경한다.
차이점은 스토어 -> 컴포넌트, 컴포넌트 -> 액션 단계에서 connect라는 react-redux 패키지 함수가 사용된다는 것이다.

```bash
npm install redux react-redux
```

## connect 함수

react-redux 패키지의 connect 함수는 파라미터를 4개까지 받을 수 있다. 파라미터의 위치에 따라 미리 정의된 함수나 오브젝트를 사용할 수 있다. 예제에서는 2개의 파라미터를 사용한다.
* 첫번째 파라미터: mapStateToProps. 스토어의 상태값을 컴포넌트 props에 할당하는 함수이다.
* 두번째 파라미터: mapDispatchToProps. dispatch 함수를 컴포넌트 함수에 바인딩하는 함수이다.

두번째 파라미터 mapDispatchToProps함수는 dispatch 함수를 컴포넌트 함수에 바인딩 할 수 있다. 컴포넌트 함수가 실행되면 바인딩된 dispatch 함수가 실행된다. 

## redux 미들웨어

미들웨어는 액션을 dispatch함수로 전달하고 리듀서가 실행되기 전과 실행된 후에 처리되는 기능을 말한다. redux 패키지에서 지원하는 applyMiddleware 함수를 사용하면 미들웨어를 간단하게 구현할 수 있다. 

index.js 파일을 수정해서 미들웨어 동작을 확인한다. 커밋을 보고 따라올 수 있도록 하자.
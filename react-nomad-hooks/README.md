# Collection of sexy React hooks ready to install with NPM

- useTitle
- useInput
- usePageLeave
- useClick
- useFadeIn
- useFullscreen
- useHover
- useNetwork
- useNotification
- useScroll
- useTabs
- usePreventLeave
- useConfirm
- useAxios

## useState

setState는 실행되고 나서 렌더링을 다시 한다. 클래스형 컴포넌트의 this.setState가 렌더 메서드를 다시 실행시키는 것과 같은 역할을 한다.

## useEffect

useEffect는 아주 많은 use를 가지고 있다. componentWillUnmount, componentDidMount, componentWillUpdate 를 가지고 있다.

### componentDidMount

useEffect는 componentDidMount componentDidUpdate의 역할을 같이 한다. 

### useTitle

무언가가 바뀔때마다 타이틀을 변경시켜주는 훅을 만들어보자. 보통 이런 역할을 Helmet이 해준다. 그러나 이번엔 훅으로 만들어보자.

### useClick

먼저 useRef훅을 만들었다. 레퍼런스란 기본적으로 컴포넌트의 어떤 부분을 선택할 수 있는 방법이다. document.getElementById와 같은 역할을 한다.
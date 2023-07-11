import React from 'react'
import { useEffect, useState } from 'react'
const Ex01 = () => {
  // 생성자 (컴포넌트가 실행될때 화면이 렌더링 되기 이전, 최초의 단계)
  // 변수, 함수, state 등 값을 초기화할 때 사용
  console.log('1) 컴포넌트 최초 실행');
    /*
    LifeCycle : React Component에 존재하는 생명 주기
    - 1)컴포넌트가 최초 실행되거나,
    - 2)컴포넌트의 화면이 렌더링되는 중이거나,
    - 3)컴포넌트의 화면 렌더링이 끝난 직후이거나,
    - 4)특정 값이 변화했거나
    등등 특정 시점에 이벤트가 발생할 때 로직 작성

  */
 // 화면 갱신이 된 직후
 // - useEffect라는 리액트 훅을 사용
 // - useEffect(함수, 배열)
 // => 화면의 렌더링이 끝났을 때, 첫번째 인자에 있는 함수를 호출하게 된다.
 // 보통 API Call처럼 무거운 작업을 진행한다.
    useEffect(()=>{
        console.log("3) 화면 갱신 직후!")
        
    }, [])

    /*
    4. 특정 값이 변화됐을 때
    - useEffect라는 리액트 훅을 사용
    - useEffect(함수, [변화를 감지할 state])
    - useEffect(함수, [num])
    => num이라는 state가 변할 때마다 1번 인자의 함수를 호출해준다.
    */
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log('4) 값 변화됨')
    },[num])

    return (
      // React 

      // 1. Component 
      // - 대문자로 시작 <MenuItem.jsx> 
      // - import / export 
      // => rafce + Enter 
      
      // 2. 상위 컴포넌트 => 하위 컴포넌트 값을 전송 : props 
      // App.js 
      // <MenuItem> 
      
      // 3. state 
      // 변수와의 차이점? state는 화면에서 바로 변경되는 값
      
      // 4. Map함수
      // - 기존 배열에서, 특정 조건에 해당하는 요소들만 빼서 새로운 배열을 만들어주는거 
      //  > 기존 배열은 손대지 않고, 새로운 배열을 생성 
      
      // 5. 하위 컴포넌트 => 상위 컴포넌트 : 불가능 
      // React 단방향으로 정보를 전달하는 라이브러리
      // 함수를 생성해서 간접적으로 데이터를 전달 
      
      // 6. LifeCycle UseEffect 
      // - 컴포넌트도 생애주기가 발생
      
      // 1) 컴포넌트가 처음 생성됐을 때 
      //    => 컴포넌트 시작 ~ return 사이 
      // 2) 컴포넌트가 화면에 렌더링 되고 있을 때 
      //    => return문 안에 작성 
      // 3) 컴포넌트가 화면에 렌더링이 되었을때 (직후) 
      //    => useEffect(함수, 비어있는 배열)
      // 4) 컴포넌트에 값이 변경되었을 때 (state, props ... etc) 
      //    => num이 변경되었을 때, 특정 함수를 실행시켜줘! 
      //    => useEffect(함수,[num])
    <div>
        {console.log('2) 화면 렌더링 중')}
        0
        <button onClick={()=>{setNum(num+1)}}>+1</button>
    </div>
  )
}

export default Ex01
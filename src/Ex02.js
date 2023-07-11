import React, {useState, useEffect} from 'react'

const Ex02 = () => {
/*
    랜덤게임을 만들어보자!
    1) 필요한 state들을 관리 (ranNum, num, result, gameNum)
        => 이때 값들은 화면에 바로 반영되게 할 것
    2) 랜덤한 수를 뽑아주자 (1~3)
    3) 내가 누른 버튼의 숫자를 구해보자 ( 이벤트 객체, 함수 매개변수 e)
  
  
  ====================================================
    4) 2번 숫자와 3번 숫자를 비교 (게임의 횟수에 따라서)
    - 버튼을 클릭할 때 마다 gameNum 은 1씩 증가
    - gameNum이 변경될 때 2번숫자와 3번 숫자의 값을 비교

    */
const [ranNum, setRanNum] = useState(0)
const [num, setNum] = useState(0)
const [result, setResult] = useState("")
const [gameNum, setGameNum] = useState(0)



    const btnCk = (e) =>{
        setRanNum(parseInt(Math.random()*3+1))
        setNum(parseInt(e.target.innerText))
        console.log(ranNum, num)
        setGameNum(gameNum+1)
    }
    //만약에 gameNum state의 값이 변경될 때 마다 승부를 판단
    useEffect(()=>{
        console.log('gameNum useEffect');
        
        if(num !== undefined){
        if(ranNum > num){
            setResult('패배')   
        }else if (ranNum < num){
            setResult('승리')
        }else{
            setResult('무승부')
        }
    }
    }, [gameNum])
   

  return (
    <div>


        <h3>랜덤 게임을 해보자!</h3>


        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>

        <div>
            <p>내가 입력한 숫자 : {num}</p>
            <p>컴퓨터가 입력한 숫자 : {ranNum}</p>
            <p>{result}</p>
        </div>
    </div>
  )
}

export default Ex02
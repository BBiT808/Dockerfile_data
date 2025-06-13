// 20250612 react 2번째 수업 !!!!!
import { useEffect, useState } from "react"

const Child = () => {
    const [count, setCount] = useState(0)
    const mystyle = {
        border: "2px solid lightpink",
        borderRadius: '10px',
        padding: '1rem',
        backgroundColor: "lavender",
        color: "gray",
        margin: '10px'
    }

    console.log("컴포넌트 함수(Child)가 실행됨")

    useEffect(() => {
        console.log(`2. 마운트 또는 업데이트 : useEffect 실행 됨 ! #${count}`)
        setInterval(() => {
            // 뭐뭣 이게 메모리 누수라고 !!!!! ㅇ0ㅇ
            console.log(`{tt++}⏱️ 1초마다 실행 됨 !! 메모리 사용중 ...`)
        }, 1000)
        return () => {
            console.log("3. 클린업 : 언마운트 또는 업데이트 직전에 청소")
            clearInterval(timer)
            console.log("타이머 정리됨")
        }
    }, [count])

    return (
        <div style={mystyle}>
            <h2>자식 컴포넌트 테스트 !!</h2>
            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count + 1)}> ➕ 1씩 증가 😉!!</button>
        </div>
    )
}


const Eff = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>9. useEffect 생명주기 실습</h1>
            <button onClick={() => setShow(!show)}>{show ? '자식 컴포넌트 숨기기 🫣' : '자식 컴포넌트 보이기 🤗'}</button>
            {show && <Child />}
        </>
    )
}

export default Eff
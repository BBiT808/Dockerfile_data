// 20250610 nodejs 기반의 react 시작 !!!!!!!!!!!
import React, { useState, useEffect } from 'react';
import UseCounter from './UseCounter';

const Accommodate = () => {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = UseCounter(0);

    useEffect(() => {
        console.log(count, isFull);
        if (count > 10) { // 정원 초과
            setIsFull(true);
        } else {
            setIsFull(false);
        }
    }, [count, isFull]); // count와 isFull이 변경될 때마다 실행되는 useEffect

    return (
        <>

            <p>{`총 ${count} 명 수용하였습니다 !`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red", backgroundColor: "yellow" }}>정원이 가득 찼습니다 !</p>}

        </>
    )
}


export default Accommodate;
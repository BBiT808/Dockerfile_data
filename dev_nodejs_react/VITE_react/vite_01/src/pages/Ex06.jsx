import { useState } from "react";
import list from "./list"

const Check = () => {
    const [chk, setChk] = useState({ "HTML": false, "CSS": false, "JAVASCRIPT": false, "JAVA": false, "PYTHON": false, "Oracle": false, "MySQL": false, "Nodejs": false })
    const handleChk = e => {
        const { value, checked } = e.target
        setChk(data => {

            // **앞에서 전달받은 데이터를 풀어헤쳐서 value란 데이터를 업데이트!
            return { ...data, [value]: checked }
            // 바뀐 데이터만 감지 가능 !!!
        })
    }
    return (
        <>
            <h1>6. 체크박스 값 확인 </h1>
            <h6>{JSON.stringify(chk)}</h6>

            {list.map((v, i) => {

                return (
                    <span key={i}>
                        <input type="checkbox" onChange={handleChk} value={v} />{v}{"  "}
                    </span>
                )
            })}

            <ol style={{ "listStylePosition": "inside" }}>
                {list
                    .filter(ck => chk[ck])
                    .map((v) => <li>{v}</li>)
                }
            </ol>
        </>
    )
}

export default Check
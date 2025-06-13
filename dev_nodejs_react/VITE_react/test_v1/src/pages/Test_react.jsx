import { useState } from "react"
import axios from 'axios' // 필수 선 설치 !!
const url = "https://api.thecatapi.com/v1/images/search?limit=5" // 고양이 사이트

const Test = () => {
    const [sdata, setSdata] = useState({ name: "", age: "", memo : "" })
    const [mydata, setMydata] = useState('')
    const [odata, setOdata] = useState('')
    const [resData, setResData] = useState({})

    const handleInput = e => {
        setSdata(pre => ({ ...pre, [e.target.name]: e.target.value }))  // 객체 업데이트!!
    }

    const sendPost = () => {
        axios.post('/data', sdata)
            .then((res) => {
                console.log(res.data)
                setResData(res.data)
            })
    }

    const myApi = () => axios.get('/api').then(res => setMydata(res.data))
    const catApi = () => axios.get(url).then(res => setOdata(res.data))

    return (
        <>
            <h1>14. AXIOS로 데이터 통신 !!</h1>

            <div>
                <h2>서버로 보내는 값</h2>
                NAME : <input type="text" name="name" onChange={handleInput} value={sdata.name} />{" "}
                AGE : <input type="number" name="age" onChange={handleInput} value={sdata.age} />{" "}
                MEMO : <input type="text" name="memo" onChange={handleInput} value={sdata.memo} />{" "}
                <button onClick={sendPost}>전송</button>
                <div>{sdata.name}  /  {sdata.age}/  {sdata.memo}</div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h2>서버 응답 결과 📨</h2>
                <div>이름: {resData.whonm}</div>
                <div>나이: {resData.whoag}</div>
                <div>메모: {resData.whomm}</div>
            </div>
            <hr />
            <div>
                <button onClick={myApi}>내 서버에서 수신 !</button>
                <div>내 서버에서 받은 값</div>
                <div>{JSON.stringify(mydata)}</div>
            </div>
            <hr />
            <div>
                <button onClick={catApi}>외부 서버에서 수신 !</button>
                <div>외부 서버에서 받은 값 !!</div>
                {/* <div>{JSON.stringify(odata)}</div> */}
                {odata && odata.map((v, i) => {
                    return (
                        <img key={i} src={v.url} alt={i} width={200} height={200} style={
                            { objectFit: "cover", margin: "5px", borderRadius: "10px" }} />
                    )
                })}
            </div>
        </>
    )
}

export default Test
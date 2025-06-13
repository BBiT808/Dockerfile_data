import { useState } from "react";

const Inp3 = () => {
    const [in1, setIn1] = useState(0)
    const [in2, setIn2] = useState(0)

    const handleIn1 = e => setIn1(e.target.value)
    const handleIn2 = e => setIn2(e.target.value)

    return (
        <>
            <h1>
                1. Input을 이용한 실시간 계산
            </h1>
            <hr />
            <br />
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> + {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {in1 + in2}
            </div>
            <br />
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> + {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {in1 * 1 + in2 * 1}
            </div>
            <br />
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> - {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {in1 * 1 - in2 * 1}
            </div>
            <br />
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> x {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {in1 * in2 * 1}
            </div>
            <br />
            <div>
                <input type="text" value={in1} onChange={handleIn1} /> / {" "}
                <input type="text" value={in2} onChange={handleIn2} /> = {in1 / in2}
            </div>
            <br />
            <hr />

            <h3>{in1} + {in2} = {in1 * 1 + in2 * 1}</h3>
            <h3>{in1} - {in2} = {in1 * 1 - in2 * 1}</h3>
            <h3>{in1} x {in2} = {in1 * in2 * 1}</h3>
            <h3>{in1} / {in2} = {in1 / in2}</h3>
        </>
    )

}

export default Inp3
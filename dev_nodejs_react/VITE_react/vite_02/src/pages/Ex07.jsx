import "./Ex07.css"
import myStyle2 from "./Ex07.module.css"

const Css = () => {
    const myStyle1 = { width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "lavender" }

    return (
        <>
            <h1> 6. 리액트에 CSS 스타일 적용하기 !!</h1>
            <div style={myStyle1}></div>
            {/* div에 중괄호 안에 스타일 넣을 수 있음 ! */}
            <div style={{ ...myStyle1, backgroundColor: "lavenderblush" }}></div>
            <div className="ex7-div"></div>
            <ul>
                <li><mark>아래는 모듈형 스타일 적용 !!</mark></li>
            </ul>
            <div className={myStyle2["ex7-div"]}></div >
            <ul>
                <li>저도 적용되요 !!</li>
            </ul>
            <div className={myStyle2["ex7ex7"]}></div >
        </>
    )
}
export default Css
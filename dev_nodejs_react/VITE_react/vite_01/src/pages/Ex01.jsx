const Inp = () => {
    // <h1>Ex01 페이지입니다.</h1>

    // localStorage CRUD
    // Create 입력
    const data = { id: 1, name: "홍길동", comment: "아버지를부르지못하는" }
    const jdata = JSON.stringify(data)
    localStorage.setItem('test3', jdata)//"또 문안 드리옵니다."

    // Read 읽기
    const readData = localStorage.getItem("test3")
    const oData = JSON.parse(readData)

    // 1개 삭제
    localStorage.removeItem('test3')

    // 모두 삭제 
    localStorage.clear()

    return (
        <>
            {<h1> 불러 왔습니다 !  </h1>/* {readData} */}
            {/* <h2>{typeof (readData)}</h2> */}

            <h2>{oData.id}</h2>
            <h2>{oData.name}</h2>
            <h2>{oData.comment}</h2>

            {/* <h2>{readData.name}</h2> */}
            {/* <h2>{readData.comment}</h2> */}
        </>
    )


}
export default Inp
const books = [
    { id: 101, bookname: "세상의 모든 음식", price: 13000 },
    { id: 102, bookname: "자바 잘 하는 법 !", price: 30000 },
    { id: 103, bookname: "잠을 맛있게 자는 법", price: 23000 },
    { id: 104, bookname: "돈 왕창 버는 법", price: 3000 },
]




const Books = () => {
    return (
        <>
            <ul>

                {books.map(v => <li key={v.id}>
                    {v.bookname} ({v.price})원</li>)}

            </ul>

        </>
    )
}

export default Books;
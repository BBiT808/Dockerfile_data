import { useState } from 'react';


const SendForm = () => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('남자')

    const changeName = (event) => setName(event.target.value)
    const changeGender = (event) => setGender(event.target.value)
    const handleSubmit = () => {
        alert(`등록하신 분의 이름  :  ${name}  /  성별  :  ${gender} 입니다.`)
        event.preventDefault() // form 제출 시 새로고침 방지
    }

    return (
        <>
            <form action="">
                <label htmlFor="name">이름</label>
                <input type="text" onChange={changeName} />
                <label htmlFor="">성별</label>
                <select name="" id="" value={gender} onChange={changeGender}>
                    <option value="남자">남성</option>
                    <option value="여자">여성</option>
                </select>
                <hr />
                <input type="submit" value="제출" />
            </form>
        </>
    )



}

export default SendForm;
// import logo from './logo.svg'; 로고를 지웠으므로 없애줘야함 !!!!
import './App.css';

function App() {
  const pop = () => alert("완전 반가워요!!!!! ^0^")
  return (
    <>
      <h1> CRA로 처음 리액트를 시작합니다 !! ^_^ </h1>
      <button onClick={pop}>처음 인사~</button>
    </>
  );
}

export default App;

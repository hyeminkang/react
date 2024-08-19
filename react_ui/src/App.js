import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClickk = () => setValue((prev) => prev + 1);
  const onChangee = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  
  useEffect(() => {
    console.log('I run only once')
  }, []); // react.js 가 지켜보는 dependencies 가 없기 때문에 한번만 실행
  useEffect(() => {
    // if ( keyword !== "" && keyword.length > 5 ) { 
    //   console.log("SEARCH FOR", keyword)  
    // }
    console.log("I run when 'keyword' changes.")
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter])
  useEffect(() => {
    console.log("I run when 'keyword' and 'counter'.")
  }, [keyword, counter])
  // useEffect 첫번째인자 : 우리가 실행하고 싶은 코드 , 두번째인자 : dependencies (react.js가 지켜보야아 하는 것들)
  return (
    <div>
      <input
        value={keyword}
        onChange={onChangee}
        type="text"
        placeholder="search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClickk}>click me</button>
    </div>
  );
}

export default App;

// useEffect는 한번씩만 찍히게해줌
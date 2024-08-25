import { useState, useEffect } from "react";

function App() { 
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const onChangee = (event) => setToDo(event.target.value);
  const onSubmitt = (event) => {
    event.preventDefault();
    //console.log(toDo);
    if (toDo === "") {
      return;
    } 
    setToDo("")
    setToDos(currentArray => [toDo, ...currentArray])
    /*toDos.push() 자바스크립트였다면 이렇게 추가 */
  }// setToDo는 toDo값을 수정하는 함수,  toDo는 input과 연결되어있음
  //console.log(toDos)
  /*setToDos(fucntion(currentArray) {
  return 
  })*/
  //console.log(toDos);
  return (
    <div>
      <h1>my To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmitt}>
        <input
          onChange={onChangee}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button >Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
} // array를 가져와서 item을 변형해서 li가 되도록 한것, 
// array는 단순문자열로 구성된 배열
//리턴하는 값이 어떤값이든 새로운 배열이 됨

export default App;
import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye :(");
  // }

  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }; // byeFn 이 언제파괴되었는지 알고싶으면, hiFn에 넣어주어야함

  useEffect(() => {
    console.log('hi -1 ');
    return () => console.log("bye -1")
  }, [])

  useEffect(function(){ 
    console.log('hi -2 ');
    return function () {
      console.log("bye -2")
    }
  }, [])

  return <h1>Hello</h1> 
} // jsx 를 return 하는 함수
//cleanup function destroy될때 뭔가할수있도록 해줌, api를 보낼수있음, event listner를 지우거나 console.log에 뭘 할수있거나 등등 
function App() { 
  const [showing, setShowing] = useState(false);
  const onClickk = () => setShowing((prev) => !prev)

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClickk}>{ showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
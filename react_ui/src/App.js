import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() { 
  return <Router>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/movie" element={< Detail />} />
    </Routes>
  </Router>;
  
} 
export default App;


// Hash Router , BrowserRouter 두가지 
// ㄴ 차이점은 url, HashRouter는 #이 붙음
// Router 먼저 렌더링됨
// 스위치는 라우터를 찾는걸 함, 하나의 라우트만 렌더링하기위함
// Link 재실행되는걸 막는 컴포넌트
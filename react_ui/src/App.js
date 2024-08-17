import Button from './Button'
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;

// create-react-app 클래스 네임은 화면확인시에 같아도 각자 뿌려줌, 다를수있음
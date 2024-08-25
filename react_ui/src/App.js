import { useState, useEffect } from "react";

function App() { 
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const [money, setMoney] = useState();
  const onChangee = (event) => setMoney(event.target.value);
  useEffect(() => {;
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false)
      });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      
      {loading ? <strong>Loading...</strong> :
        <select>
          {coins.map((coin) => (<option key={coin.id}> {coin.name}  ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>))}
        </select>
      }

      <br /><br />
      
      <form >
        <input
          onChange={onChangee}
          value={money}
          type="number"
          placeholder="Write money"
        />
        <button >Add To Do</button>
      </form>
      
    </div>
  );
  
} 
export default App;

{/* <ul>
        {coins.map((coin) => <li>{coin.name}  ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
      </ul> */}
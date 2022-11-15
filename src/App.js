// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //let coinData = [];
  const [coinData, setCoinData] = useState([]);
  const coinListURL = "https://api.coingecko.com/api/v3/coins/list";
  useEffect(() => {
    axios.get(coinListURL).then((response) => {
      // setCoinData(response.data);
      const eth = coinFilter(response.data);
      setCoinData(eth);
      console.log(response.data);
    });
  }, []);

  const coinFilter = (data) => {
    return data.filter(
      (coin) =>
        coin.symbol === "eth" || coin.symbol === "btc" || coin.symbol === "ada"
    );
  };

  return (
    <div className="App">
      {coinData.length && (
        <ol>
          {coinData.map((coin) => (
            <li key={coin.id}>
              <span>{coin.id}</span>
              <span>{coin.name}</span>
              <span>{coin.symbol}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;

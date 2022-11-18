// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  //let coinData = [];
  const [coinData, setCoinData] = useState([]);
  const [id, setId] = useState([]);
  const [price, setPrice] = useState([]);
  const coinListURL = "https://api.coingecko.com/api/v3/coins/list";

  //price URL
  const coinPriceURL = "https://api.coingecko.com/api/v3/simple/price?ids=";

  useEffect(() => {
    axios.get(coinListURL).then((response) => {
      // setCoinData(response.data);
      const eth = coinFilter(response.data);
      setCoinData(eth);
      console.log(response.data);
    });

    // axios.get(btcPriceURL).then((response) => {
    //   console.log(response.data);
    // });
  }, []);

  const getPrice = (id) => {
    axios.get(coinPriceURL + id + "&vs_currencies=usd").then((response) => {
      setPrice(response.data[id].usd);
    });
  };

  const coinFilter = (data) => {
    return data.filter(
      (coin) =>
        coin.symbol === "eth" || coin.symbol === "btc" || coin.symbol === "ada"
    );
  };

  const handleCheck = (id) => {
    setId(id);
    getPrice(id);
  };

  return (
    <div className="App">
      {coinData.length && (
        <ol>
          <li key="1" className="list-heading wrapper">
            <span className="id box">ID</span>
            <span className="name box">NAME</span>
            <span className="symbol box">SYMBOL</span>
          </li>
          {coinData.map((coin) => (
            <li
              onClick={() => handleCheck(coin.id)}
              key={coin.id}
              className="list-item wrapper"
            >
              <span className="id box">{coin.id}</span>
              <span className="name box">{coin.name}</span>
              <span className="symbol box">${coin.symbol}</span>
            </li>
          ))}
        </ol>
      )}
      <div>
        Price of {id} is: {price}
      </div>
    </div>
  );
}

export default App;

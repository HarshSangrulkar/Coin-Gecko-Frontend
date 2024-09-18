import React from "react";
import CoinsList from "./components/CoinsList";
//import CoinMarketData from "./components/CoinMarketData";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>CoinGecko API Frontend</h1>
      <CoinsList />
      {/* <CoinMarketData coinId="bitcoin" /> */}
    </div>
  );
};

export default App;

// src/components/CoinsList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinsList = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch top 30 coins from the backend
    axios
      .get("http://localhost:8080/api/coingecko/coins")
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the coins list!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading coins...</div>;
  }

  return (
    <div>
      <h1>Top 30 Coins by Market Cap</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Current Price (USD)</th>
            <th>Market Cap</th>
            {/* <th>Total Volume</th> */}
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.id}</td>
              <td>{coin.symbol}</td>
              <td>{coin.name}</td>
              {/* <td>${coin.current_price.toFixed(2)}</td> */}
              {/* Current price */}
              <td>${coin.market_cap.toLocaleString()}</td>
              {/* Market cap */}
              <td>${coin.total_volume.toLocaleString()}</td>{" "}
              {/* Total volume */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsList;

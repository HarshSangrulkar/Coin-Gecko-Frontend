// src/components/CoinMarketData.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinMarketData = ({ coinId }) => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch market data for a specific coin
    axios
      .get(`http://localhost:8080/api/coingecko/market/${coinId}`)
      .then((response) => {
        setMarketData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          `There was an error fetching the market data for ${coinId}!`,
          error
        );
        setLoading(false);
      });
  }, [coinId]);

  if (loading) {
    return <div>Loading market data...</div>;
  }

  if (!marketData) {
    return <div>No market data found for {coinId}.</div>;
  }

  return (
    <div>
      <h2>Market Data for {marketData.name}</h2>
      <p>Price: ${marketData.current_price}</p>
      <p>Market Cap: ${marketData.market_cap}</p>
      <p>Volume: ${marketData.total_volume}</p>
    </div>
  );
};

export default CoinMarketData;

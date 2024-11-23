import React from "react";

function Investment() {
  const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: "$50,000" },
    { name: "Ethereum", symbol: "ETH", price: "$4,000" },
  ];

  return (
    <div className="investment-container">
      <h2>Manage Investments</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.symbol}>
              <td>{crypto.name}</td>
              <td>{crypto.symbol}</td>
              <td>{crypto.price}</td>
              <td>
                <button>Buy</button>
                <button>Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Investment;

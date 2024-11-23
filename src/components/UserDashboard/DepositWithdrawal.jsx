import React from "react";

function DepositWithdrawal() {
  return (
    <div className="deposit-container">
      <h2>Deposit & Withdraw</h2>
      <div className="deposit-section">
        <h3>Deposit</h3>
        <p>Wallet Address: TFLd8k7rE8aJMbgSQnKrHYxXjf7cV3cEce</p>
      </div>
      <div className="withdraw-section">
        <h3>Withdraw</h3>
        <form>
          <input type="text" placeholder="Amount" />
          <button>Withdraw</button>
        </form>
      </div>
    </div>
  );
}

export default DepositWithdrawal;

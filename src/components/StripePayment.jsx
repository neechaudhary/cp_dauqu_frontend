import React from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { API } from "./Constant";
function StripePayment() {
  //   const [amount, setAmount] = useState(0);
  const amount = 150;
  const handleToken = (token) => {
    fetch(`${API}/stripepayment/donate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  //   const handleAmountChange = (e) => {
  //     const value = e.target.value;
  //     setAmount(value);
  //   };

  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <form sx={{ m: 1 }}>
          <label htmlFor="outlined-adornment-amount">Amount</label>
          <input
            className="border-2 p-2 shadow-xl"
            id="outlined-adornment-amount"
            value={amount}
            // onChange={handleAmountChange}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            disabled
          />
        </form>
        <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
          token={handleToken}
          name=""
          panelLabel={`Donate`}
          currency="USD"
          amount={amount * 100}
        ></StripeCheckout>
      </div>
    </div>
  );
}

export default StripePayment;

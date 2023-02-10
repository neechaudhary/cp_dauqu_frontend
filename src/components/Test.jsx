import React from "react";
import logo from "../logo.svg";
import "../App.css";
import axios from "axios";
import { API } from "./Constant";

function App() {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
 

    var options = {
      key: "rzp_test_fYtFrx227DT8xU", // Enter the Key ID generated from the Dashboard
      amount: "50000",
      currency: "INR",
      description: "Acme Corp",
      image: "https://avatars.githubusercontent.com/u/95732637?v=4",
      prefill: {
        email: "gaurav.kumar@example.com",
        contact: +919900000000,
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          if (alert("Are you sure, you want to close the form?")) {
            var txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
          }
        },
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Buy React now!</p>
        <button className="App-link" onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Test() {
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    // Digits Random Number
    let digits = Math.floor(Math.random() * 1000);
    // Capital char letter random Number
    let chCap = "";
    for (let i = 0; i <= 26; i++) {
      chCap += String.fromCharCode(Math.floor(Math.random() * i) + 65);
    }
    // Small char letter random Number
    let chSmall = "";
    for (let i = 0; i <= 26; i++) {
      chSmall += String.fromCharCode(Math.floor(Math.random() * i) + 65);
    }
    // Convert Capitial to small
    chSmall.toLowerCase();

    chCap.slice(25);
    chSmall.slice(25);

    // Merge All Password
    let lastPassword = digits + chCap + chSmall + "@";
    // Set to state
    setPassword(lastPassword);
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={clickHandler}>Password Generator</button>
      {/* Display */}
      <p>{password}</p>
    </div>
  );
}

export default Test;

import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [sum, setSum] = useState(0);
  const [prevValue, setPrevValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    // avoid repeated additions while typing
    if (value !== prevValue) {
      const num = parseInt(value);

      if (!isNaN(num)) {
        setSum((prev) => prev + num);
        setPrevValue(value);
      }
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>Sum Calculator</h1>

      <input type="number" onChange={handleChange} />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
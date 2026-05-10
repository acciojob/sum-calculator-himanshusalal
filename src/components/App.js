import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleAdd = () => {
    if (input.trim() === "") return;

    const num = parseInt(input);

    if (!isNaN(num)) {
      setNumbers((prev) => [...prev, num]);
      setInput("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);
  }, [numbers]);

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>Sum Calculator</h1>

      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <h2>Total Sum: {sum}</h2>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
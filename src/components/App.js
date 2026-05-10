import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value !== "") {
      const num = parseInt(value);
      setNumbers([num]);
    } else {
      setNumbers([]);
    }
  };

  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      {/* Do not remove the main div */}

      
           <h1>Sum Calculator</h1>
           <input
        type="number"
        value={input}
        onChange={handleChange}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
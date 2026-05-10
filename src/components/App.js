import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setSum(value);
    } else {
      setSum(0);
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
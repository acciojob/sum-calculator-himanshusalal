import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);

    if (!isNaN(value)) {
      setSum((prev) => prev + value);
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>Sum Calculator</h1>

      <input type="number" onBlur={handleChange} />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
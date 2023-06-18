import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default App;

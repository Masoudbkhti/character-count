import React, { useState } from "react";
import Text from "./components/Text";
import Input from "./components/Input";
function App() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
  };

  return (
    <div>
      <Input />
      <Text />
    </div>
  );
}

export default App;

import { useState } from "react";

export default function InputComponent() {
  const [inputText, setText] = useState("hello"); // return //inputText <- "hello"

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p> you types: {inputText} </p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

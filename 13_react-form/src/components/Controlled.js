import { useState } from "react";

export default function Controlled() {
  const [value, setValue] = useState("");
  const handleInputChange = (evt) => {
    const inputVal = evt.target.value;
    setValue(inputVal);
  };

  const handleSubmit = function (evt) {
    evt.preventDefault();
    setValue("");
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:: </label>
      <input id="name" value={value} type="text" onChange={handleInputChange} />
      <button disabled={!value}>Submit</button>
    </form>
  );
}

import { useRef } from "react";

export default function Uncontrolled() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    const inputVal = inputRef.current.value;
    console.log(inputVal);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
    </form>
  );
}

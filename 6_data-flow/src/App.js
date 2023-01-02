//import Dog from "./components/dog_ex/Dog";
import Child from "./components/state_ex/Child";

function App() {
  const date = new Date();
  return (
    <Child message={date.toLocaleTimeString()}/>
  );
}

export default App;

//example#1
/* 
import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <div>
      <h1>React Form practice</h1>

      <h3>Uncontrolled input</h3>
      <Uncontrolled />

      <h3>Controlled input</h3>
      <Controlled />
    </div>
  );
} */

//example 2
import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>React Form practice</h1>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h2>FeeedBack Form</h2>
          <div className="field">
            <label>Score: {score}</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button type="submit" disabled={!(Number(score) > 5) && !(comment.length>=10)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;

//controlled componenets: api to enable full control of state of form
//using react state -> single src of truth
//value prop
//input form contetn
//local state+ value prop
//onChange
//evt.target.value
//onSubmit on form html el
//validate(value) //form value
//evt.preventDefault
//uncontrolled form ele still exist like in actual html form element

/* import {useState} from 'react'; */

/* function App() {
  let [word, setWord] = useState("Hello");
  console.log(useState("Hello"));
  return (
    <div>
      {word}
    </div>
  );
} */
/* import MealsList from './components/state_intro/MealsList';
import Counter  from './components/state_intro/Counter';

//Note both MealsList and Counter are siblings
//then how to pass state from MealsList to Counter
//Prop Drilling: 
function App(){
  //Note::MEal
  return (
    <div id="">
    <MealsList/>
    <Counter />
    </div>

  )
}

export default App; */

//Prop drilling
/* function Main(props) {
  return <Header msg={props.msg} />;
}

function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
      <h1>Header here</h1>
      <Wrapper msg={props.msg} />
    </div>
  );
}

function Wrapper(props) {
  return (
    <div style={{ border: "10px solid lightgray" }}>
      <h2>Wrapper here</h2>
      <Button msg={props.msg} />
    </div>
  );
}

function Button(props) {
  return (
    <div style={{ border: "20px solid orange" }}>
      <h3>This is the Button component</h3>
      <button onClick={() => alert(props.msg)}>Click me!</button>
    </div>
  );
}

function App() {
  return (
    <Main msg="I passed through the Header and the Wrapper and I reached the Button component" />
  );
} */

//Example useState
import React from "react";
function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
      </form>
    </>
  );
}
function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => {
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>;
      })}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
export default App;

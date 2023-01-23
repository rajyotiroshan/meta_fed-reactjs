import "./App.css";
import { useState } from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

//Note:: every list item should have a unique key property.
//Why? As react update the actual DOM item based on the diff rendering algorithms it tries to update only teh list with diff list item
//with newly added one or deleted one.
//to make compare react needs a unique key
//index can work but in the case of changing the order,new index will be be assinged and react won't be able to identify the
//list item


function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todos2",
      createdAt: "20:30",
    },
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <h1>Handling List in React</h1>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

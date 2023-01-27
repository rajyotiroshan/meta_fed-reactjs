import "./App.css";
import React from "react";
function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First name: {user.results[0].name.first} </h2>
      <h2>First name: {user.results[0].name.last} </h2>
      <h2>
        <img src={user.results[0].picture.large} alt="" />
      </h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [passFlag, setPassFlag] = useState(false);
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    console.log(role);
    console.log(password.length);
    if (
      firstName != "" &&
      validateEmail(email) &&
      password.length > 8 &&
      role === "individual" &&
      role === "business"
    ) {
      return true;
    }
    return false;
  };

  const clearForm = () => {
    // Implement this function
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setPassFlag(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created!");
    clearForm();
  };

  const passwordValidation = () => {
    console.log(password);
    if (password.length < 8) {
      setPassFlag(false);
    } else {
      setPassFlag(true);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              onBlur={passwordValidation}
            />
            {
              !passFlag && <PasswordErrorMessage /> /*          {!passFlag && (
              <span className="FieldError">
                Password should have atleast 8 characters.
              </span>
            )} */
            }
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          {console.log(getIsFormValid())}
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;




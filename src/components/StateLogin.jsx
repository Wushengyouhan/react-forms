import { useState } from "react";
import Input from "./Input";
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.length < 6;

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredValues.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
          onBlur={() => handleBlur("email")}
          error={emailIsvalid && "Email is not valid"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleBlur("password")}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

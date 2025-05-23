import "./styles.css";
import { useState, useRef } from "react";
function App() {
  const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const pwd = useRef();
  return (
    <>
      <div className="border w-25 mt-5 m-auto p-4">
        <h2 className="text-info text-center">Log in form</h2>

        <div className="mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div classname="mt-3">
          <label>Password</label>
          <input type="Password" className="form-control" ref={pwd} />
        </div>
        <button
          className="btn btn-primary mt-3 w-100"
          onClick={() => {
            console.log("email", email);
            console.log("password", pwd.current.value);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default App;

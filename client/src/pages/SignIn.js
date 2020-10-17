import React, { useState } from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";
import SignUp from "./SignUp"

function SignIn() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };

  return (
      <div>
        <div className="mt-4">
          <h2>Sign Up</h2>
        </div>
          <form onSubmit={handleSubmit}>
          <div class="grid-container">
            <div class="">
            <div class="medium-6 cell">
            <label>Username
            <input className="form-control" type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} />
            </label>
          </div>
            <div class="medium-6 cell">
            <label>Password
            <input className="form-control" type="text" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
            </label>
          </div>
          <a href="/" class="button">Submit</a>
          <p>Not Registered? <a href="/signup">Create an Account</a></p>
          </div>
          </div>
            </form>
          </div>
        
    );
  }

export default SignIn;

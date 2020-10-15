import React, { useState } from "react";
import Container from "../components/Container/index";
import Col from "../components/Col/index";
import Row from "../components/Row/index";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [duedate, setDuedate] = useState();
  const [nickname, setNickname] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    console.log("duedate is " + duedate);
    console.log("nickname is " + nickname);
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
        <div class="medium-6 cell">
          <label>Baby's Nickname 
          <input className="form-control" type="text" placeholder="Optional" name="nickname" onChange={e => setNickname(e.target.value)} />
          </label>
        </div>
        <div class="medium-6 cell">
          <label>Due Date
          <input className="form-control" type="text" placeholder="Optional" name="duedate" onChange={e => setDuedate(e.target.value)} />
          </label>
        </div>
      </div>
      <a href="/" class="button">Submit</a>
      </div>
      
          </form>
      </div>
  );
}

export default Signup;

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
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="duedate"
                placeholder="Baby's estimated Due Date"
                name="duedate"
                onChange={e => setDuedate(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="nickname"
                placeholder="Baby's Nickname"
                name="nickname"
                onChange={e => setNickname(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
}

export default Signup;

import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Container, Row, Col } from 'reactstrap';

export default function Login() {
  const history = useHistory();
  const { login } = useContext(UserProfileContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      // .then(() => history.push("/"))
      .catch(() => alert("Invalid email or password"));
  };

  return (
    <Form onSubmit={loginSubmit}>
      <Row>
        <Col xs="4" className="mx-auto">
          <fieldset className="mt-5">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Button color="primary">Login</Button>
            </FormGroup>
            <em>
              Not registered? <Link to="register">Register</Link>
            </em>
          </fieldset>
        </Col>
      </Row>
    </Form>
  );
}
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect, Router } from "react-router-dom";

import API from "../../utils/api_end_points";

import { Form, Button } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Container = styled.div`
  width: 50em;
  height: 20em;
  border: 1px solid black;
  color: #edd0ce;
  margin: 0 auto;
  padding: 3em;
`;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginedIn, setLogginedIn] = useState(false);

  const submitForm = async e => {
    try {
      e.preventDefault();
      const res = await axios.post(API.signin, { email, password });
      const user = {
        token: res.data.token,
        email: res.data.email,
        role: res.data.role,
        status: true
      };
      localStorage.setItem("user", JSON.stringify(user));
      setLogginedIn(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Wrapper>
      {logginedIn === true ? (
        <Redirect to="/createprofile" />
      ) : (
        <React.Fragment>
          <Title>Sign In</Title>
          <Container>
            <Form onSubmit={submitForm}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  signin
                </Button>
                <Button href="#" variant="secondary">
                  Forget Password
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default Signin;

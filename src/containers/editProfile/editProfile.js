import React, { Component } from "react";
import styled from "styled-components";
import { Form, Button, Col, Row, Jumbotron } from "react-bootstrap";
import axios from "axios";

import API from "../../utils/api_end_points";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class EditProfile extends Component {
  constructor(props) {
    super(props);
    const user = this.props.location.state;
    this.state = {
      // role: JSON.parse(localStorage.getItem("user")).role,
      user,
      email: user.email,
      password: "",
      role: "",
      permissions: [],
      userUpdated: undefined
    };
  }

  onSubmitHandler = async e => {
    try {
      e.preventDefault();
      const { email, password, role, permissions, user } = this.state;
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const URL = API.updateUser + user._id;
      const res = await axios.put(
        URL,
        {
          email,
          password,
          role,
          permissions
        },
        config
      );
      this.setState(() => ({
        userUpdated: true
      }));
    } catch (e) {
      this.setState(() => ({
        userUpdated: false
      }));
    }
  };

  onSetPermissions = e => {
    let permissions = [...this.state.permissions];
    permissions.push(e.target.name);
    this.setState({
      permissions
    });
  };

  render() {
    const { email, password, user } = this.state;
    return (
      <Wrapper>
        <Title>Update User ({user.email})</Title>
        <Form onSubmit={this.onSubmitHandler}>
          <Row>
            <Col md={2}></Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  //   onChange={e => this.setState({ email: e.target.value })}
                  name="email"
                  value={user.email}
                  type="email"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ password: e.target.value })}
                  name="password"
                  value={password}
                  type="password"
                />
              </Form.Group>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Select Role</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ role: e.target.value })}
                  as="select"
                >
                  <option>role</option>
                  <option value="admin">admin</option>
                  <option value="manager">manager</option>
                  <option value="developer">developer</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Permissions</Form.Label>
                <Form.Group>
                  <Form.Check
                    name="create"
                    type="checkbox"
                    onChange={this.onSetPermissions}
                    inline
                    label="Create"
                  />
                  <Form.Check
                    name="read"
                    onChange={this.onSetPermissions}
                    type="checkbox"
                    inline
                    label="Read"
                  />
                  <Form.Check
                    name="update"
                    type="checkbox"
                    onChange={this.onSetPermissions}
                    inline
                    label="Update"
                  />
                  <Form.Check
                    name="delete"
                    type="checkbox"
                    onChange={this.onSetPermissions}
                    inline
                    label="Delete"
                  />
                </Form.Group>
              </Form.Group>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Update User
                </Button>
              </Form.Group>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              {this.state.userUpdated && (
                <Jumbotron>
                  <p>User Updated Into Account.</p>
                </Jumbotron>
              )}
            </Col>
            <Col md={2}></Col>
          </Row>
        </Form>
      </Wrapper>
    );
  }
}

export default EditProfile;

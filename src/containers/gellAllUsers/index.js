import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axios from "axios";

import EditProfile from "../editProfile/editProfile";

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

class GetAllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: {},
      error: false,
      editProfile: false,
      assignShift: false,
      assignTask: false,
      logout: false
    };
  }

  async componentDidMount() {
    try {
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get(API.getAllUsers, config);
      this.setState(() => ({
        users: res.data
      }));
    } catch (e) {
      this.setState(() => ({
        error: true
      }));
    }
  }

  assigntaskToUser = user => {
    this.setState(() => ({
      selectedUser: user,
      editProfile: true
    }));
    this.props.history.push("/assigntask", user);
  };

  assignShiftToUser = user => {
    this.setState(() => ({
      selectedUser: user,
      assignShift: true
    }));
    this.props.history.push("/assignshift", user);
  };

  onEditProfile = user => {
    this.setState(() => ({
      selectedUser: user,
      editProfile: true
    }));
    this.props.history.push("/editprofile", user);
  };

  onGetShifts = user => {
    this.props.history.push("/approvedrops", user);
  };

  onDeleteProfile = async user => {
    try {
      const URL = API.removeUser + user._id;
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.delete(URL, config);
      this.setState(() => ({
        users: res.data.data
      }));
    } catch (e) {
      this.setState(() => ({
        error: true
      }));
    }
  };

  onLogout = () => {
    localStorage.removeItem("user");
    this.setState({ logout: true });
  };

  render() {
    const { users, editProfile, selectedUser, logout } = this.state;
    return logout ? (
      <Redirect to="/" />
    ) : (
      <Wrapper>
        <Title>List of All Developers</Title>
        <Row reverse>
          <Form.Group>
            <Button onClick={this.onLogout}>Logout</Button>
          </Form.Group>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>email</th>
              <th>role</th>
              <th>permissions</th>
              <th>Assign Task</th>
              <th>Assign Shift</th>
              <th></th>
              <th></th>
              <th>Approve Drop Shifts</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map(user => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.permissions.map(per => (
                      <p>{per}</p>
                    ))}
                  </td>
                  <td>
                    <Button onClick={() => this.assigntaskToUser(user)}>
                      Assign Task
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => this.assignShiftToUser(user)}>
                      Assign Shift
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => this.onEditProfile(user)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => this.onDeleteProfile(user)}>
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => this.onGetShifts(user)}>
                      Get Shifts
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Wrapper>
    );
  }
}

export default withRouter(GetAllUsers);

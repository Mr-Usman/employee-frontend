import React, { Component } from "react";
import styled from "styled-components";
import { Form, Button, Col, Row, Jumbotron } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

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

class AssignTask extends Component {
  constructor(props) {
    super(props);
    const user = this.props.location.state;
    this.state = {
      user,
      title: "",
      description: "",
      deadline: new Date(),
      taskAssigned: false
    };
  }
  onSubmit = async e => {
    try {
      e.preventDefault();
      let { user, title, description, deadline } = this.state;
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.post(
        API.createTask,
        {
          title,
          description,
          deadline,
          email: user.email
        },
        config
      );
      this.setState(() => ({
        taskAssigned: true
      }));
    } catch (e) {
      console.log(e.message);
      this.setState(() => ({
        taskAssigned: false
      }));
    }
  };

  render() {
    const { user, title, description, deadline, taskAssigned } = this.state;
    return (
      <Wrapper>
        <Title>Assigning Task to ({user.email})</Title>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ title: e.target.value })}
                  name="title"
                  value={title}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  onChange={e => this.setState({ description: e.target.value })}
                  name="description"
                  value={description}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Deadline</Form.Label>
                <DatePicker
                  selected={deadline}
                  onChange={date => this.setState({ deadline: date })}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Assign
                </Button>
              </Form.Group>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              {taskAssigned && (
                <Jumbotron>
                  <p>Task Assigned To User.</p>
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

export default AssignTask;

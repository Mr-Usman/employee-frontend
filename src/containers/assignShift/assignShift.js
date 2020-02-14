import React, { Component } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Col, Row, Jumbotron, Table } from "react-bootstrap";
import axios from "axios";

import AssignTable from "./assignTable";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class AssignShift extends Component {
  constructor(props) {
    super(props);
    const user = this.props.location.state;
    this.state = {
      user,
      //   day: "",
      timing: [],
      Days: [
        {
          day: "Monday",
          startTime: new Date(),
          endTime: new Date()
        },
        {
          day: "Tuesday",
          startTime: new Date(),
          endTime: new Date()
        },
        {
          day: "Wednesday",
          startTime: new Date(),
          endTime: new Date()
        },
        {
          day: "Thursday",
          startTime: new Date(),
          endTime: new Date()
        },
        {
          day: "Friday",
          startTime: new Date(),
          endTime: new Date()
        }
      ]
    };
  }

  onSetStartTime = (day, st) => {
    const startTime = { day, st };
    const newTiming = this.state.Days(item => item.day !== day);
    // const timing = [...this.state.Days];
    newTiming.push(startTime);
    this.setState(() => ({
      timing: newTiming,
      startTime: st,
      Days: newTiming
    }));
  };

  onSetEndTime = (day, et) => {
    const { timing } = this.state;
    let timingObject = timing.filter(time => time.day === day)[0];
    const newTimingArray = timing.filter(time => time.day !== day);
    timingObject.et = et;
    newTimingArray.push(timingObject);
    this.setState(() => ({ timing: newTimingArray, Days: timing }));
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.timing);
  };

  render() {
    const { user, startTime, endTime, Days, timing } = this.state;
    return (
      <Wrapper>
        <Title>Assign Shift To ({user.email})</Title>
        <Form onSubmit={this.onSubmit}>
          <Table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {Days.map(day => (
                <AssignTable
                  onSetStartTime={this.onSetStartTime}
                  onSetEndTime={this.onSetEndTime}
                  day={day}
                  user={user}
                  timing={timing}
                />
              ))}
            </tbody>
          </Table>
          <Form.Group>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Wrapper>
    );
  }
}

export default AssignShift;

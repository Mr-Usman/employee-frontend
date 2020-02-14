import React from "react";
import { Form, Button, Col, Row, Jumbotron, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";

const AssignTable = ({ day, user, timing, onSetEndTime, onSetStartTime }) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <Form.Group>
            <Form.Control
              disabled
              //   onChange={e => this.setState({ email: e.target.value })}
              name={day.day}
              value={day.day}
              type="text"
            />
          </Form.Group>
        </td>
        <td>
          <DatePicker
            selected={day.startTime}
            onChange={date => onSetStartTime(day.day, date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </td>
        <td>
          <DatePicker
            selected={day.endTime}
            onChange={date => onSetEndTime(day.day, date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default AssignTable;

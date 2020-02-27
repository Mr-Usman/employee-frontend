import React from "react";
import { Form, Button } from "react-bootstrap";

const RenderRow = ({ shift, email, swapShift }) => {
  return (
    <React.Fragment>
      <tr key={shift._id}>
        <td>{shift._id}</td>
        <td>{shift.day}</td>
        <td>{shift.startTime}</td>
        <td>{shift.endTime}</td>
        <td>{email}</td>
        <td>
          <Form>
            <Button onClick={() => swapShift(shift)}>Swap</Button>
          </Form>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default RenderRow;

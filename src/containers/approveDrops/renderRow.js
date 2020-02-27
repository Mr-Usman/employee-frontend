import React from "react";
import { Form, Table, Button } from "react-bootstrap";

const RenderRow = ({ dropShift, onApproveShift }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{dropShift._id}</td>
        <td>{dropShift.day}</td>
        <td>{dropShift.startTime}</td>
        <td>{dropShift.endTime}</td>
        <td>{dropShift.aprovedStatus.toString()}</td>
        <td>
          <Button onClick={() => onApproveShift(dropShift._id)}>Approve</Button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default RenderRow;

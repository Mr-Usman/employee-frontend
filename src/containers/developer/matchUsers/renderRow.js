import React from "react";
import { Form } from "react-bootstrap";

const RenderRow = ({ list, allSelectedUsers }) => {
  return (
    <React.Fragment>
      <tr key={list._id}>
        <td>{list._id}</td>
        <td>{list.email}</td>
        <td>{list.role}</td>
        <td>{list.taskId.length === 0 ? "No Task" : "Task"}</td>
        <td>
          <Form.Check
            onChange={() => allSelectedUsers(list._id)}
            type="checkbox"
            id="swap"
          />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default RenderRow;

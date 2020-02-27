import React from "react";
import { Form, Table } from "react-bootstrap";

const renderRow = ({ task }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{task._id}</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.deadline}</td>
      </tr>
    </React.Fragment>
  );
};

export default renderRow;

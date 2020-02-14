import React from "react";
import { Form, Button, Col, Row, Jumbotron, Table } from "react-bootstrap";

const TaskTable = props => {
  const { task } = props;
  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{task._id}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default TaskTable;

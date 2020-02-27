import React from "react";
import { Table, Form, Button } from "react-bootstrap";
import RenderRow from "./renderRow";

const RenderTable = ({ list, allSelectedUsers, submittedSelectedUsers }) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Email</td>
            <td>Role</td>
            <td>Task</td>
            <td>Select</td>
          </tr>
        </thead>
        <tbody>
          {list.map(list => (
            <RenderRow list={list} allSelectedUsers={allSelectedUsers} />
          ))}
        </tbody>
      </Table>
      <Form.Group>
        <Button onClick={submittedSelectedUsers}>Submit</Button>
      </Form.Group>
    </React.Fragment>
  );
};

export default RenderTable;

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import RenderRow from "./renderRow";

const RenderTable = ({ shift, userEmail, swapShift }) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Day</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>Email(Swapper)</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {shift.map(shift => (
            <RenderRow email={userEmail} shift={shift} swapShift={swapShift} />
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default RenderTable;

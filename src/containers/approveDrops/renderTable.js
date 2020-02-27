import React from "react";
import RenderRow from "./renderRow";
import { Table } from "react-bootstrap";

const RenderTable = ({ droppedShifts, onApproveShift }) => {
  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Day</td>
            <td>Start Time</td>
            <td>End Time</td>
            <td>Approved Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {droppedShifts.map(dropShift => (
            <RenderRow onApproveShift={onApproveShift} dropShift={dropShift} />
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default RenderTable;

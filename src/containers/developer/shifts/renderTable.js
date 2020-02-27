import React from "react";
import { Table, Form } from "react-bootstrap";
import RenderRows from "./renderRows";

const RenderTable = ({ timing, onDrop, onSwap }) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Day</td>
            <td>StartTime</td>
            <td>EndTime</td>
            <td>DropShift</td>
            <td>SwapShift</td>
          </tr>
        </thead>
        <tbody>
          <RenderRows onDrop={onDrop} onSwap={onSwap} timing={timing} />
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default RenderTable;

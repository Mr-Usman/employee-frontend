import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import API from "../../utils/api_end_points";

import RenderTable from "./renderTable";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ApproveDrops = props => {
  const user = props.location.state;
  const [droppedShifts, setDroppedShifts] = useState([]);

  useEffect(() => {
    async function getDropShifts() {
      try {
        const { token } = JSON.parse(localStorage.getItem("user"));
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const dropsShifts = await axios.post(
          API.getDropShifts,
          { userId: user._id },
          config
        );
        setDroppedShifts(dropsShifts.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getDropShifts();
  }, []);

  async function onApproveShift(id) {
    try {
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.post(
        API.approveShift,
        { timeId: id, userId: user._id },
        config
      );
      setDroppedShifts(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Wrapper>
      <Title>Drops Shifts of ({user.email})</Title>
      {droppedShifts.length && (
        <RenderTable
          onApproveShift={onApproveShift}
          droppedShifts={droppedShifts}
        />
      )}
    </Wrapper>
  );
};

export default ApproveDrops;

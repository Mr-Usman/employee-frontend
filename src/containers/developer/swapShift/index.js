import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import API from "../../../utils/api_end_points";

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

const SwapShift = () => {
  const [shift, setShift] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchSwappedShifts() {
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.get(API.getSwapShifts, config);
      //   console.log(res);
      setShift(res.data.swapShift);
      setUserEmail(res.data.email);
    }
    fetchSwappedShifts();
  }, []);

  const swapShift = async day => {
    try {
      const newDay = { ...day, accepted: true };
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.post(API.swapDay, { day: newDay }, config);
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Title>You Can Swap Your Shift With Followings</Title>
        {shift && (
          <RenderTable
            shift={shift}
            userEmail={userEmail}
            swapShift={swapShift}
          />
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default SwapShift;

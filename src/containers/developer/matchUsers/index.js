import React, { useState } from "react";
import styled from "styled-components";
import RenderTable from "./renderTable";

import axios from "axios";
import API from "../../../utils/api_end_points";

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MatchUsers = props => {
  const list = props.location.state ? props.location.state.swap : null;
  const day = props.location.state ? props.location.state.day : null;
  console.log("staste", props.location.state && props.location.state);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const allSelectedUsers = id => {
    const selectUsers = [...selectedUsers];
    selectUsers.push(id);
    setSelectedUsers(selectUsers);
  };

  const submittedSelectedUsers = async e => {
    try {
      const { swap, day } = props.location.state;
      const { token } = JSON.parse(localStorage.getItem("user"));
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const res = await axios.post(
        API.swapShift,
        { userIds: selectedUsers, day },
        config
      );
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Title>Swap Shift with following</Title>
      {list && (
        <RenderTable
          list={list}
          allSelectedUsers={allSelectedUsers}
          submittedSelectedUsers={submittedSelectedUsers}
        />
      )}
    </Wrapper>
  );
};

export default MatchUsers;

import React from 'react';
import styled from 'styled-components';

const UserEntry = props => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>
        <a>{props.user.username}</a>
      </td>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
};

export default UserEntry;

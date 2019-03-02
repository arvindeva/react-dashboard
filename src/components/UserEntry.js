import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserEntry = props => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>
        <Link to={`/users/${props.user.id}`}>{props.user.username}</Link>
      </td>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
};

export default UserEntry;

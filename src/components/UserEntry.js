import React from 'react';
import { Link } from 'react-router-dom';

const UserEntry = props => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>
        <Link
          to={{
            pathname: `/users/${props.user.id}`,
            state: { id: props.user.id }
          }}
        >
          {props.user.username}
        </Link>
      </td>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phone}</td>
    </tr>
  );
};

export default UserEntry;

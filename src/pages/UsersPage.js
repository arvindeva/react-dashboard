import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, clearUsers } from '../actions/users';
import styled from 'styled-components';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.clearUsers();
    this.props.fetchUsers();
  }

  render() {
    return (
      <StyledUsersPage>
        <div>
          <h1>Users</h1>
        </div>
        <div className="ui divider" />
        <div>
          <UserTable />
        </div>
      </StyledUsersPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    clearUsers: () => {
      dispatch(clearUsers());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UsersPage);

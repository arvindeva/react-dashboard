import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';
import styled from 'styled-components';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
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

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

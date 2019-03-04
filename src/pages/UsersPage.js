import React from 'react';
import { connect } from 'react-redux';
import { usersFetchData } from '../actions/users';
import styled from 'styled-components';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {
  async componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/users');
  }

  render() {
    return (
      <StyledUsersPage>
        <div>
          <h1>Users</h1>
        </div>
        <div className="ui divider" />
        <div>
          <UserTable users={this.props.users} />
        </div>
      </StyledUsersPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isLoading: state.usersIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);

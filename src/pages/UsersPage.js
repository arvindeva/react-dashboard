import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const users = res.data;
    this.setState({ users });
  }

  render() {
    return (
      <StyledUsersPage>
        <div>
          <h1>Users</h1>
        </div>
        <div className="ui divider" />
        <div>
          <UserTable users={this.state.users} />
        </div>
      </StyledUsersPage>
    );
  }
}

export default UsersPage;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
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

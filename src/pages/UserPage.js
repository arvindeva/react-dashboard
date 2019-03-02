import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledUserPage = styled.div``;

class UserPage extends React.Component {
  state = { user: {} };

  componentDidMount() {
    const userId = this.props.match.params.number;
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        let user = response.data;
        this.setState({ user });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <StyledUserPage>
        <div>
          <h1>{this.state.user.name}</h1>
        </div>
        <div className="ui divider" />
        <div>
          <h1>Post</h1>
        </div>
        <div className="ui divider" />
        <div />
        <div>
          <h1>Photos</h1>
        </div>
      </StyledUserPage>
    );
  }
}

export default UserPage;

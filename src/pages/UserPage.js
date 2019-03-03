import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PostList from '../components/PostList';
import AlbumList from '../components/AlbumList';

const StyledUserPage = styled.div``;

class UserPage extends React.Component {
  state = {
    user: {},
    posts: [],
    albums: []
  };

  async componentDidMount() {
    let userId = this.props.location.state ? this.props.location.state.id : 0;

    // Use params if user use URL directly
    if (!userId) {
      userId = this.props.match.params.userId;
    }

    let userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let user = userResponse.data;
    this.setState({ user: user });

    let postsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    let posts = postsResponse.data;
    this.setState({ posts: posts });

    let albumsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    let albums = albumsResponse.data;
    this.setState({ albums: albums });
  }

  render() {
    return (
      <StyledUserPage>
        <div>
          <h1>{this.state.user.name}</h1>
          <div className="ui divider" />
          <p>User Name: {this.state.user.username}</p>
          <p>Email: {this.state.user.email}</p>
          <p>Phone: {this.state.user.phone}</p>
          <p>Website: {this.state.user.website}</p>
        </div>
        <div className="ui divider" />
        <div className="ui stackable grid">
          <div className="eight wide column posts-list">
            <div className="ui fluid card">
              <div className="content">
                <h1>Posts</h1>
                <PostList
                  user={this.state.user}
                  posts={this.state.posts}
                  albums={this.state.albums}
                />
              </div>
            </div>
          </div>
          <div className="eight wide column albums-list">
            <div className="ui fluid card">
              <div className="content">
                <h1>Albums</h1>
                <AlbumList
                  user={this.state.user}
                  posts={this.state.posts}
                  albums={this.state.albums}
                />
              </div>
            </div>
          </div>
        </div>
      </StyledUserPage>
    );
  }
}

export default UserPage;
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import PostList from '../components/PostList';
import AlbumList from '../components/AlbumList';
import NewPostForm from '../components/NewPostForm';

const StyledUserPage = styled.div`
  .add-post-icon {
    cursor: pointer;
  }
`;

class UserPage extends React.Component {
  state = {
    user: {},
    posts: [],
    albums: [],
    showPostForm: false,
    newPost: {
      title: '',
      body: ''
    },
    isLoading: true
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

  toggleNewPost = () => {
    this.setState(prevState => ({
      showPostForm: !prevState.showPostForm
    }));
  };

  onInputChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        newPost: {
          ...prevState.newPost,
          [name]: value
        }
      };
    });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    let newPostResponse = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      this.state.newPost
    );
    const newPost = newPostResponse.data;

    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
      showPostForm: !prevState.showPostForm // Close the form
    }));
  };

  render() {
    return (
      <StyledUserPage>
        <div>
          <h1>
            {this.state.user.name ? (
              this.state.user.name
            ) : (
              <div class="ui placeholder">
                <div class="line" />
              </div>
            )}
          </h1>
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
                <div className="add-post">
                  <h3>
                    Add Post!
                    <i
                      className="teal plus square icon add-post-icon"
                      onClick={this.toggleNewPost}
                    />
                  </h3>
                  {this.state.showPostForm ? (
                    <NewPostForm
                      onInputChange={this.onInputChange}
                      onFormSubmit={this.onFormSubmit}
                      newPost={this.state.newPost}
                    />
                  ) : (
                    <div />
                  )}
                </div>
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

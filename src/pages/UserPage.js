import React from 'react';
import { connect } from 'react-redux';
import { userFetchData } from '../actions/user';
import { postsFetchData } from '../actions/posts';
import { albumsFetchData } from '../actions/albums';
import axios from 'axios';
import styled from 'styled-components';

import UserDetail from '../components/UserDetail';
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
    // user: {},
    // posts: [],
    albums: [],
    showPostForm: false,
    newPost: {
      title: '',
      body: ''
    },
    loadingNewPost: false
  };

  async componentDidMount() {
    // Get userId from Link
    let userId = this.props.location.state ? this.props.location.state.id : 0;
    // Use params if user use URL directly
    if (!userId) {
      userId = this.props.match.params.userId;
    }
    this.props.userFetchData(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    this.props.postsFetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    this.props.albumsFetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
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
    this.setState({ loadingNewPost: true });
    let newPostResponse = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      this.state.newPost
    );
    const newPost = newPostResponse.data;

    this.setState(prevState => ({
      posts: [newPost, ...prevState.posts],
      showPostForm: !prevState.showPostForm, // Close the form
      loadingNewPost: false
    }));
  };

  render() {
    return (
      <StyledUserPage>
        <div>
          <h1>
            {!this.props.userIsLoading ? (
              this.props.user.name
            ) : (
              <div className="ui placeholder">
                <div className="line" />
              </div>
            )}
          </h1>
          <div className="ui divider" />
          <UserDetail user={this.props.user} />
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
                {this.state.loadingNewPost ? (
                  <div className="ui active centered inline loader" />
                ) : null}
                {!this.props.postsIsLoading ? (
                  <PostList
                    // user={this.props.user}
                    posts={this.props.posts}
                    // albums={this.props.albums}
                  />
                ) : (
                  <div className="ui active inline loader" />
                )}
              </div>
            </div>
          </div>
          <div className="eight wide column albums-list">
            <div className="ui fluid card">
              <div className="content">
                <h1>Albums</h1>
                {!this.props.postsIsLoading ? (
                  <AlbumList
                    // user={this.props.user}
                    // posts={this.props.posts}
                    albums={this.props.albums}
                  />
                ) : (
                  <div className="ui active inline loader" />
                )}
              </div>
            </div>
          </div>
        </div>
      </StyledUserPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    userIsLoading: state.userIsLoading,
    posts: state.posts,
    postsIsLoading: state.postsIsLoading,
    albums: state.albums,
    albumsIsLoading: state.albumsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userFetchData: url => dispatch(userFetchData(url)),
    postsFetchData: url => dispatch(postsFetchData(url)),
    albumsFetchData: url => dispatch(albumsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

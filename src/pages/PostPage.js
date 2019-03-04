import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/post';
import { fetchUser } from '../actions/user';
import { fetchComments } from '../actions/comments';
import styled from 'styled-components';
import axios from 'axios';

import CommentList from '../components/CommentList';

const StyledPostPage = styled.div`
  .icons {
    cursor: pointer;
  }
`;

class PostPage extends React.Component {

  async componentDidMount() {
    let postId = this.props.location.state ? this.props.location.state.id : 0;
    // Use params if user use URL directly
    if (!postId) {
      postId = this.props.match.params.postId;
    }

    this.props.fetchPost(postId);
    this.props.fetchUser(this.props.user.id);
    this.props.fetchComments(postId);

    let postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let post = postResponse.data;
    this.setState({ post: post });

    let userResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`
    );
    let user = userResponse.data;
    this.setState({ user: user });
  }

  render() {
    return (
      <StyledPostPage>
        <h1>{this.props.post.title}</h1>
        <p>
          Posted by:{' '}
          <Link
            to={{
              pathname: `/users/${this.props.user.id}`,
              props: { id: this.props.user.id }
            }}
          >
            {this.props.user.name}
          </Link>
        </p>
        <p>{this.props.post.body}</p>
        <div className="icons">
          <i class="pencil alternate large icon teal edit-icon" />
          <i class="trash alternate large icon teal" />
        </div>
        <div className="ui divider" />
        <h1>Comments</h1>
        <CommentList
          comment={this.props.comment}
          comments={this.props.comments}
          type="comments"
        />
      </StyledPostPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.post,
    comments: state.comments,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => {
      dispatch(fetchPost(postId));
    },
    fetchUser: userId => {
      dispatch(fetchUser(userId));
    },
    fetchComments: postId => {
      dispatch(fetchComments(postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);

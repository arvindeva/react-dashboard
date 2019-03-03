import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CommentList from '../components/CommentList';

class PostPage extends React.Component {
  state = {
    post: {},
    user: {},
    comments: []
  };

  async componentDidMount() {
    let postId = this.props.location.state ? this.props.location.state.id : 0;
    // Use params if user use URL directly
    if (!postId) {
      postId = this.props.match.params.postId;
    }

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

    let commentsResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    let comments = commentsResponse.data;
    this.setState({ comments: comments });
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>
          Posted by:{' '}
          <Link
            to={{
              pathname: `/users/${this.state.user.id}`,
              state: { id: this.state.user.id }
            }}
          >
            {this.state.user.name}
          </Link>
        </p>
        <p>{this.state.post.body}</p>
        <div className="ui divider" />
        <h1>Comments</h1>
        <CommentList
          comment={this.state.comment}
          comments={this.state.comments}
          type="comments"
        />
      </div>
    );
  }
}

export default PostPage;

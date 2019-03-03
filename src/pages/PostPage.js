import React from 'react';
import axios from 'axios';

import CommentList from '../components/CommentList';

class PostPage extends React.Component {
  state = {
    post: {},
    comments: []
  };

  async componentDidMount() {
    let postId = this.props.location.state ? this.props.location.state.id : 0;
    // Use params if user use URL directly
    if (!postId) {
      postId = this.props.match.params.postId;
    }

    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    let post = res.data;
    this.setState({ post: post });

    res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    let comments = res.data;
    this.setState({ comments: comments });
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
        <div className="ui divider" />
        <h1>Comments</h1>
        <CommentList comment={this.state.comment} comments={this.state.comments} type="comments" />
      </div>
    );
  }
}

export default PostPage;

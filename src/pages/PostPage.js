import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, clearPost } from '../actions/post';
import { fetchUser, clearUser } from '../actions/user';
import { fetchComments, clearComments } from '../actions/comments';
import styled from 'styled-components';

import CommentList from '../components/CommentList';
import NewCommentForm from '../components/NewCommentForm';
import ListPlaceholder from '../components/placeholders/ListPlaceholder';

const StyledPostPage = styled.div`
  .add-comment-icon {
    cursor: pointer;
  }
`;

class PostPage extends React.Component {
  state = {
    showCommentForm: false
  };
  async componentDidMount() {
    // clear store state appropriately so the page does not render previous state.
    this.props.clearPost();
    this.props.clearComments();
    this.props.clearUser();

    let postId = this.props.location.state
      ? this.props.location.state.id
      : this.props.match.params.postId;

    this.props.fetchPost(postId);
    this.props.fetchComments(postId);
    this.props.fetchUser(this.props.user.id);
  }

  toggleNewComment = () => {
    this.setState(prevState => ({
      showCommentForm: !prevState.showCommentForm
    }));
  };

  render() {
    return (
      <StyledPostPage>
        {this.props.post.title ? (
          <h1>{this.props.post.title}</h1>
        ) : (
          <div className="ui placeholder">
            <div className="line" />
          </div>
        )}
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
        {this.props.post.body ? (
          <p>{this.props.post.body}</p>
        ) : (
          <div className="ui placeholder">
            <div className="line" />
          </div>
        )}

        <div className="ui divider" />
        <h1>Comments</h1>
        <div className="add-comment">
          <h3>
            Add Comment!
            <i
              className="teal plus square icon add-comment-icon"
              onClick={this.toggleNewComment}
            />
          </h3>
          {this.state.showCommentForm ? <NewCommentForm /> : <div />}
        </div>
        <div className="ui divider" />
        {this.props.comments.length !== 0 ? (
          <CommentList
            comment={this.props.comment}
            comments={this.props.comments}
            type="comments"
          />
        ) : (
          <ListPlaceholder />
        )}
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
    },
    clearPost: () => {
      dispatch(clearPost());
    },
    clearComments: () => {
      dispatch(clearComments());
    },
    clearUser: () => {
      dispatch(clearUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);

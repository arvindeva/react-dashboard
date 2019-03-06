import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/posts';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Post extends React.Component {
  state = {
    editModalOpen: false,
    deleteModalOpen: false,
    editedTitle: '',
    editedBody: ''
  };

  onEditOpen = () => this.setState({ editModalOpen: true });
  onEditClose = () => this.setState({ editModalOpen: false });
  onDeleteOpen = () => this.setState({ deleteModalOpen: true });
  onDeleteClose = () => this.setState({ deleteModalOpen: false });

  onDeleteClick = e => {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
    this.setState({ deleteModalOpen: false });
  };

  onEditClick = e => {
    e.preventDefault();
    this.props.editPost(
      this.props.post.id,
      this.state.editedTitle,
      this.state.editedBody
    );
    this.setState({ editModalOpen: false });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Link
          to={{
            pathname: `/posts/${this.props.post.id}`,
            state: { id: this.props.post.id, userId: this.props.post.userId }
          }}
        >
          {this.props.post.title}
        </Link>
        <p>{this.props.post.body}</p>
        <Modal
          trigger={
            <Button color="teal" onClick={this.onEditOpen}>
              Edit
            </Button>
          }
          open={this.state.editModalOpen}
          onClose={this.onEditClose}
          basic
          size="small"
        >
          <Header icon="pencil" content="Update this post" />
          <form className="ui form" onSubmit={this.onDeleteClick}>
            <div className="field">
              <label>New Title</label>
              <input
                type="text"
                name="editedTitle"
                placeholder="New Title"
                value={this.state.value}
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="field">
              <label>New Body</label>
              <textarea
                type="text"
                name="editedBody"
                placeholder="New Body"
                value={this.state.value}
                onChange={this.onInputChange}
                required
              />
            </div>
            <Button color="black" onClick={this.onEditClose} inverted>
              Cancel
            </Button>
            <Button color="teal" onClick={this.onEditClick} inverted>
              <Icon name="pencil" /> Edit
            </Button>
          </form>
        </Modal>
        <Modal
          trigger={
            <Button color="red" onClick={this.onDeleteOpen}>
              Delete
            </Button>
          }
          open={this.state.deleteModalOpen}
          onClose={this.onDeleteClose}
          basic
          size="small"
        >
          <Header icon="delete" content="Delete" />
          <Modal.Content>
            <h3>Are you sure you want to delete this post?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.onDeleteClose} inverted>
              Cancel
            </Button>
            <Button
              color="red"
              type="submit"
              onClick={this.onDeleteClick}
              inverted
            >
              <Icon name="trash" /> Delete
            </Button>
          </Modal.Actions>
        </Modal>
        <div className="ui divider" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    },
    editPost: (id, editedTitle, editedBody) => {
      dispatch(editPost(id, editedTitle, editedBody));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);

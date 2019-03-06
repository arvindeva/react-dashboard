import React from 'react';
import { connect } from 'react-redux';
import { deleteComment, editComment } from '../actions/comments';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Comment extends React.Component {
  state = {
    deleteModalOpen: false,
    editModalOpen: false,
    editedName: '',
    editedEmail: '',
    editedBody: ''
  };

  onDeleteOpen = () => this.setState({ deleteModalOpen: true });
  onDeleteClose = () => this.setState({ deleteModalOpen: false });
  onEditOpen = () => this.setState({ editModalOpen: true });
  onEditClose = () => this.setState({ editModalOpen: false });

  onDeleteClick = e => {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
    this.setState({ deleteModalOpen: false });
  };

  onEditClick = e => {
    e.preventDefault();
    this.props.editComment(
      this.props.comment.id,
      this.state.editedName,
      this.state.editedEmail,
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
      <div className="item card">
        <h2>{this.props.comment.name}</h2>
        <p>Comment by {this.props.comment.email}</p>
        <p>{this.props.comment.body}</p>
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
          <Header icon="pencil" content="Updating Comment" />
          <form className="ui form" onSubmit={this.onEditClick}>
            <div className="field">
              <label>New Name</label>
              <input
                type="text"
                name="editedName"
                placeholder="New Name"
                value={this.state.value}
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="field">
              <label>New Email</label>
              <input
                type="email"
                name="editedEmail"
                placeholder="New Email"
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
            <Button type="submit" color="green" inverted>
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
            <h3>Are you sure you want to delete this comment?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.onDeleteClose} inverted>
              Cancel
            </Button>
            <Button color="red" onClick={this.onDeleteClick} inverted>
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
    deleteComment: id => {
      dispatch(deleteComment(id));
    },
    editComment: (id, editedName, editedEmail, editedBody) => {
      dispatch(editComment(id, editedName, editedEmail, editedBody));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comment);

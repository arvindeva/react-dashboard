import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';

class NewCommentForm extends React.Component {
  state = {
    name: '',
    email: '',
    body: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.name, this.state.email, this.state.body);
    this.setState({
      name: '',
      email: '',
      body: ''
    });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Comment Name"
            autoComplete="off"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div className="field">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            required
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div className="field">
          <label>Body</label>
          <textarea
            rows="2"
            type="text"
            name="body"
            placeholder="Enter Post Body"
            required
            value={this.state.body}
            onChange={this.onInputChange}
          />
        </div>
        <button className="ui button teal" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (name, email, body) => {
      dispatch(addComment(name, email, body));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewCommentForm);

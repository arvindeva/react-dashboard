import React from 'react';
import styled from 'styled-components';

const StyledNewPostForm = styled.form``;

class NewPostForm extends React.Component {
  state = {
    title: '',
    body: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      console.log(this.state);
    }
  };

  render() {
    return (
      <StyledNewPostForm className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Post Title"
            autoComplete="off"
            required
            value={this.state.title}
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
      </StyledNewPostForm>
    );
  }
}

export default NewPostForm;

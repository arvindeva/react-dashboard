import React from 'react';
import styled from 'styled-components';

const StyledPostForm = styled.form``;

class PostForm extends React.Component {

  onInputChange = e => {
    this.props.onInputChange(e);
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <StyledPostForm className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter Post Title"
            autoComplete="off"
            value={this.props.newPost.title}
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
            value={this.props.newPost.body}
            onChange={this.onInputChange}
          />
        </div>
        <button className="ui button teal" type="submit">
          Submit
        </button>
      </StyledPostForm>
    );
  }
}

export default PostForm;

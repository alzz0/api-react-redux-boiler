import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postActions";
class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
    this.setState({ title: "", body: "" });
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <textarea
            name="body"
            placeholder="body"
            value={this.state.body}
            onChange={this.onChange}
          />
          <input type="submit" name="submit" />
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostForm);

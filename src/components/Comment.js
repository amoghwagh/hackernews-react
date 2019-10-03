import React, { Component } from "react";

class Comment extends Component {
  state = {
    upVoteStatus: "",
    downVoteStatus: "",
    upVoteState: false,
    downVoteState: false,
    commentCounter: 0
  };

  upVoteClick = () => {
    if (this.state.downVoteState) {
      this.setState({
        upVoteStatus: "green-text",
        downVoteStatus: "",
        downVoteState: false,
        commentCounter: this.state.commentCounter + 2,
        upVoteState: true
      });
    } else if (!this.state.upVoteState) {
      this.setState({
        upVoteStatus: "green-text",
        downVoteStatus: "",
        downVoteState: false,
        commentCounter: this.state.commentCounter + 1,
        upVoteState: true
      });
    } else {
      this.setState({
        upVoteStatus: "",
        commentCounter: this.state.commentCounter - 1,
        upVoteState: false
      });
    }
  };

  downVoteClick = () => {
    if (this.state.upVoteState) {
      this.setState({
        downVoteStatus: "red-text",
        upVoteStatus: "",
        upVoteState: false,
        commentCounter: this.state.commentCounter - 2,
        downVoteState: true
      });
    } else if (!this.state.downVoteState) {
      this.setState({
        downVoteStatus: "red-text",
        upVoteStatus: "",
        commentCounter: this.state.commentCounter - 1,
        downVoteState: true
      });
    } else {
      this.setState({
        downVoteStatus: "",
        commentCounter: this.state.commentCounter + 1,
        downVoteState: false
      });
    }
  };
  render() {
    return (
      <li class="collection-item white comment-text">
        <div class="counter-section">
          {" "}
          <a
            href="javascript:void(0)"
            className="upvote"
            onClick={this.upVoteClick}
          >
            <i className={"material-icons " + this.state.upVoteStatus}>
              arrow_drop_up
            </i>
          </a>
          <span>{this.state.commentCounter}</span>
          <a
            href="javascript:void(0)"
            className="downvote"
            onClick={this.downVoteClick}
          >
            <i className={"material-icons " + this.state.downVoteStatus}>
              arrow_drop_down
            </i>
          </a>
        </div>
        <span>{this.props.text}</span>
      </li>
    );
  }
}

export default Comment;

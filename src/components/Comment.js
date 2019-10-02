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
    if (!this.state.upVoteStatus) {
      this.setState({
        upVoteStatus: "green-text",
        downVoteStatus: "",
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
    if (!this.state.downVoteStatus) {
      this.setState({
        downVoteStatus: "red-text",
        upVoteStatus: "",
        commentCounter: this.state.commentCounter - 1
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

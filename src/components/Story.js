import React, { Component } from "react";
import Comments from "./CommentSection";

class Story extends Component {
  state = {
    upVoteStatus: "",
    downVoteStatus: "",
    score: this.props.story.score,
    upVoteState: false,
    downVoteState: false,
    showCommentState: true
  };

  upVoteClick = () => {
    if (!this.state.upVoteStatus) {
      this.setState({
        upVoteStatus: "green-text",
        downVoteStatus: "",
        score: this.props.story.score + 1,
        upVoteState: true
      });
    } else {
      this.setState({
        upVoteStatus: "",
        score: this.props.story.score,
        upVoteState: false
      });
    }
  };

  downVoteClick = () => {
    if (!this.state.downVoteStatus) {
      this.setState({
        downVoteStatus: "red-text",
        upVoteStatus: "",
        score: this.props.story.score - 1
      });
    } else {
      this.setState({
        downVoteStatus: "",
        score: this.props.story.score,
        downVoteState: false
      });
    }
  };

  toggleCommentState = () => {
    this.setState({
      showCommentState: !this.state.showCommentState
    });
  };

  render() {
    return (
      <li className="collection-item">
        <a
          className="upvote btn-floating btn-small waves-effect waves-light grey darken-2"
          onClick={this.upVoteClick.bind(this)}
        >
          <i className={"material-icons " + this.state.upVoteStatus}>
            arrow_drop_up
          </i>
        </a>
        <a href={this.props.story.url}>
          <span className="title"> {this.props.story.title} </span>
        </a>
        <br />
        <a
          className="downvote btn-floating btn-small waves-effect waves-light grey darken-2"
          onClick={this.downVoteClick}
        >
          <i className={"material-icons " + this.state.downVoteStatus}>
            arrow_drop_down
          </i>
        </a>
        <span className="tags">
          <span> {this.state.score} points by </span>
          <span>{this.props.story.by} posted on </span>
          <span>
            {this.props.story.submission_time.split("").slice(10)}
          </span> | <span>hide</span> |{" "}
          <a href="javascript:void(0)">
            <span onClick={this.toggleCommentState}>
              {this.props.story.comments.length} comments
            </span>
          </a>
        </span>
        {this.state.showCommentState ? <Comments /> : null}
      </li>
    );
  }
}

export default Story;

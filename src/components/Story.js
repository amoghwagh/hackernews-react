import React, { Component } from "react";
import CommentSection from "./CommentSection";
import uuidv4 from "uuid";

class Story extends Component {
  state = {
    upVoteStatus: "",
    downVoteStatus: "",
    score: this.props.story.score,
    upVoteState: false,
    downVoteState: false,
    showCommentState: true,
    comments: this.props.story.comments,
    textValue: ""
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

  handleChange = event => {
    this.setState({
      textValue: event.target.value
    });
  };

  addComment = () => {
    const newComment = {
      item_id: uuidv4(),
      text: this.state.textValue,
      by: "Amogh"
    };
    const newCommentsList = [...this.state.comments, newComment];
    this.setState({
      comments: newCommentsList
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
        {this.state.showCommentState ? (
          <CommentSection
            story={this.props.story}
            comments={this.state.comments}
            textValue={this.state.textValue}
            handleChange={this.handleChange}
            addComment={this.addComment}
          />
        ) : null}
      </li>
    );
  }
}

export default Story;

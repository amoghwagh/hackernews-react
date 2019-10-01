import React, { Component } from "react";

class Story extends Component {
  state = {
    upVoteStatus: "",
    downVoteStatus: "",
    score: this.props.score,
    upvoteState: false,
    downvoteState: false
  };

  upVoteClick = () => {
    this.setState({
      upVoteStatus: "green-text",
      downVoteStatus: "",
      score: this.state.score + 1
    });
  };

  downVoteClick = () => {
    this.setState({
      downVoteStatus: "red-text",
      upVoteStatus: "",
      score: this.state.score - 1
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
        <a href={this.props.url}>
          <span className="title"> {this.props.title} </span>
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
          <span>{this.props.user} posted on </span>
          <span>{this.props.time.split("").slice(10)}</span> | <span>hide</span>{" "}
          |{" "}
          <a>
            <span>{this.props.kids.length} comments</span>
          </a>
        </span>
      </li>
    );
  }
}

export default Story;

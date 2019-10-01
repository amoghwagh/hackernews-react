import React, { Component } from "react";

class Story extends Component {
  state = {
    score: this.props.score,
    upvoteState: false,
    downvoteState: false
  };
  render() {
    return (
      <li className="collection-item">
        <a className="upvote btn-floating btn-small waves-effect waves-light grey darken-2">
          <i className="material-icons green-text">arrow_drop_up</i>
        </a>
        <a href={this.props.url}>
          <span className="title"> {this.props.title} </span>
        </a>
        <br />
        <a className="downvote btn-floating btn-small waves-effect waves-light grey darken-2">
          <i className="material-icons red-text">arrow_drop_down</i>
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

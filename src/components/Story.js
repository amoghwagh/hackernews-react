import React, { Component } from "react";

class Story extends Component {
  render() {
    return (
      <li className="collection-item">
        <a className="upvote btn-floating btn-small waves-effect waves-light grey darken-2">
          <i className="material-icons green-text">arrow_drop_up</i>
        </a>
        <span className="title">
          {" "}
          {this.props.title}{" "}
          <a>
            <span>(link)</span>
          </a>
        </span>
        <br />
        <a className="downvote btn-floating btn-small waves-effect waves-light grey darken-2">
          <i className="material-icons red-text">arrow_drop_down</i>
        </a>
        <span className="tags"> LOL</span>
      </li>
    );
  }
}

export default Story;

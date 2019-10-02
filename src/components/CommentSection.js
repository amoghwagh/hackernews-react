import React, { Component } from "react";

class Comments extends Component {
  state = {
    upVoteStatus: "",
    downVoteStatus: "",
    score: 0,
    upVoteState: false,
    downVoteState: false
  };

  upVoteClick = () => {
    if (!this.state.upVoteStatus) {
      this.setState({
        upVoteStatus: "green-text",
        downVoteStatus: "",
        score: this.state.score + 1,
        upVoteState: true
      });
    } else {
      this.setState({
        upVoteStatus: "",
        score: this.state.score,
        upVoteState: false
      });
    }
  };

  downVoteClick = () => {
    if (!this.state.downVoteStatus) {
      this.setState({
        downVoteStatus: "red-text",
        upVoteStatus: "",
        score: this.state.score - 1
      });
    } else {
      this.setState({
        downVoteStatus: "",
        score: this.state.score,
        downVoteState: false
      });
    }
  };
  render() {
    return (
      <div className="row container">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
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
                </span>{" "}
                | <span>hide</span> |{" "}
                <a>
                  <span>{this.props.story.comments.length} comments</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
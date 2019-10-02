import React, { Component } from "react";

class Comments extends Component {
  renderComment = text => {
    return (
      <li class="collection-item white comment-text">
        <div class="counter-section">
          {" "}
          <a href="javascript:void(0)" className="upvote">
            <i className={"material-icons "}>arrow_drop_up</i>
          </a>
          <span>0</span>
          <a href="javascript:void(0)" className="downvote">
            <i className={"material-icons "}>arrow_drop_down</i>
          </a>
        </div>
        <span>{text}</span>
      </li>
    );
  };
  render() {
    return (
      <div className="comment-section row">
        <div className="col s12 m6">
          <div className="card white">
            <div className="card-content white-text">
              <div className="row">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="textarea"
                      className="materialize-textarea"
                    ></textarea>
                    <label for="textarea">New Comment</label>
                  </div>
                  <a className="waves-effect waves-light btn">
                    <i className="material-icons right">add</i>Add New Comment
                  </a>
                </div>
                <div className="row">
                  <ul className="comment-box collection black-text">
                    {this.props.story.comments.map(comment =>
                      this.renderComment(comment.text)
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;

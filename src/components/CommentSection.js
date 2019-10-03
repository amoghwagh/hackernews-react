import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
  renderComment = text => <Comment text={text} />;

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
                      value={this.props.textValue}
                      onChange={this.props.handleChange}
                    ></textarea>
                    <label for="textarea">New Comment</label>
                  </div>
                  <a
                    className="waves-effect waves-light btn add-comment-button"
                    onClick={this.props.addComment}
                  >
                    <i className="material-icons right">add</i>Add New Comment
                  </a>
                </div>
                <div className="row">
                  <ul className="comment-box collection black-text">
                    {this.props.comments.map(comment =>
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

import React, { Component } from "react";

class Comments extends Component {
  renderComment = text => {
    return <li class="collection-item white comment-text">{text}</li>;
  };
  render() {
    return (
      <div class="row container">
        <div class="col s12 m6">
          <div class="card white">
            <div class="card-content white-text">
              <div class="row">
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea1"
                      class="materialize-textarea"
                    ></textarea>
                    <label for="textarea1">ADD NEW COMMENT</label>
                  </div>
                </div>
                <div class="row">
                  <ul class="collection black-text">
                    {[0, 0, 0, 0].map(e => {
                      return this.renderComment("LOL");
                    })}
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

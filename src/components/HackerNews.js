import React, { Component } from "react";
import Stories from "./Stories";
class HackerNews extends Component {
  render() {
    return (
      <div className="container">
        <ul className="collection">
          <Stories />
        </ul>
      </div>
    );
  }
}

export default HackerNews;

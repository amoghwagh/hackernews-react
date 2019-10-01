import React, { Component } from "react";
import Story from "./Story";
import stories from "../data/stories.json";

class Stories extends Component {
  state = {
    stories: stories
  };
  render() {
    return this.state.stories.map(story => {
      return <Story story={story} />;
    });
  }
}

export default Stories;

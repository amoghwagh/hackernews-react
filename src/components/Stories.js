import React, { Component } from "react";
import Story from "./Story";
import stories from "../data/stories.json";

class Stories extends Component {
  state = {
    stories: stories.sort((a, b) => b.score - a.score)
  };
  render() {
    return this.state.stories.map(story => {
      return <Story key={story.item_id} story={story} />;
    });
  }
}

export default Stories;

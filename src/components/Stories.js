import React, { Component } from "react";
import Story from "./Story";
import stories from "../data/stories.json";

class Stories extends Component {
  render() {
    return stories.map(story => {
      return (
        <Story
          id={story.item_id}
          score={story.score}
          title={story.title}
          url={story.url}
          user={story.by}
          time={story.submission_time}
          kids={story.kids}
        />
      );
    });
  }
}

export default Stories;

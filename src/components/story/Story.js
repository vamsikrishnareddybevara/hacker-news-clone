import React, { useState, useEffect } from "react";
import { getStory } from "../../utils/fetchStories";
import mapTime from "./../../utils/mapTime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);
  const storyUrl = story?.url
    ?.replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/)[0];
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <div className="bg-gray-200 px-5 py-3 border-b border-gray-400">
      <h1 className="mb-0.5 text-base font-medium m-0 no-underline flex truncate">
        <span>
          <FontAwesomeIcon
            icon={["fas", "sort-up"]}
            className="mt-2 p-0 mr-2 text-xl"
          />
        </span>
        <a
          className="text-gray-900 font-normal truncate"
          href={story.url}
          target="_blank"
          rel="noreferrer"
        >
          {story.title}
        </a>
        &nbsp;
        <span>
          <a
            href={`https://${storyUrl}`}
            target="_blank"
            className=" text-gray-500 hover: underline"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fas", "globe"]} />
          </a>

          <a
            href={`https://${storyUrl}`}
            target="_blank"
            className="hidden text-gray-500 hover: underline md:inline"
            rel="noopener noreferrer"
          >
            ({storyUrl})
          </a>
        </span>
      </h1>{" "}
      <div className="text-sm flex flex-wrap truncate items-center">
        <span data-testid="story-points">
          <div className="text-stone-600">{story.score} points</div>
        </span>
        <span data-testid="story-by">
          <div className="text-stone-600">
            by <FontAwesomeIcon icon={["fas", "user"]} />
            <a
              href={`https://news.ycombinator.com/user?id=${story.by}`}
              target="_blank"
              className="text-stone-500 ml-1 no-underline hover:underline"
              rel="noopener noreferrer"
            >
              {story.by}
            </a>{" "}
          </div>
        </span>
        <span data-testid="story-time">
          <div className="text-stone-600">
            posted {mapTime(story.time)} ago |{" "}
          </div>{" "}
        </span>
        <span data-testid="story-by">
          <div className="text-stone-600">
            <FontAwesomeIcon icon={["far", "comment-alt"]} />
            <a
              href={`https://news.ycombinator.com/item?id=${story.kids?.length}`}
              target="_blank"
              className="text-stone-500 ml-1 no-underline hover:underline"
              rel="noopener noreferrer"
            >
              {story?.kids?.length} comments
            </a>
          </div>
        </span>
      </div>
    </div>
  ) : null;
};

export default Story;

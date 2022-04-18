import { useState, useEffect } from "react";
import { getStoryIds } from "../../utils/fetchStories";
import Story from "./../../components/story/Story";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from "antd";
const STORY_INCREMENT = 30;

export const Stories = ({ category }) => {
  const [storyIds, setStoryIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);
  const loadMoreStories = () => {
    setCount((preValue) => preValue + STORY_INCREMENT);
  };
  useEffect(() => {
    setLoading(true);
    setCount(STORY_INCREMENT);
    setStoryIds([]);
    getStoryIds(category).then((data) => {
      setLoading(false);
      setStoryIds(data);
    });
  }, [category]);
  if (loading) {
    return (
      <div className=" h-screen w-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={count}
        next={loadMoreStories}
        hasMore={true}
        loader={<Spin size="large" />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {storyIds.slice(0, count).map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Stories;

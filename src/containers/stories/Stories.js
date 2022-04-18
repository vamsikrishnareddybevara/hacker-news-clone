import { useState, useEffect } from "react";
import { getStoryIds } from "../../utils/fetchStories";
import Story from "./../../components/story/Story";
import { useInfiniteScroll } from "./../../hooks/useInfiniteScroll";
import { Spin } from "antd";

export const Stories = ({ category }) => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
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
      {storyIds.slice(0, count).map((storyId) => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </div>
  );
};

export default Stories;

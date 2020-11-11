import { useEffect, useState } from "react";
import { FetchPostsReturn, SinglePost } from "services/posts/interfaces";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

export type PossibleFunctionType = (page: number) => Promise<FetchPostsReturn>;
export type PossibleDataStateType = SinglePost[];

const UseInfiniteScroll = (callbackFunction: PossibleFunctionType) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<PossibleDataStateType>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data, total } = await callbackFunction(page);

        setData((prevState) => {
          const newState = prevState.concat(data);
          if (newState.length === total) {
            setHasMore(false);
          }

          return newState;
        });
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (hasMore) {
      fetchData();
    }
  }, [callbackFunction, page, hasMore]);

  useBottomScrollListener(() => {
    setPage(page + 1);
  });

  return {
    data,
    loading,
    error,
    hasMore,
  };
};

export default UseInfiniteScroll;
